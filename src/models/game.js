import { game } from "..";
import { setListenersForLinks } from "../controllers/listeners/forLinks";
import { removeListenersForCells, setListenersForCells, setListenersForExitButton, setListenersForPlayButton } from "../controllers/listeners/forPlay";
import { setListenersForShips } from "../controllers/listeners/forShips";
import { setDraggableForShips } from "../views/dragAndDrop/ships";
import { viewProfile } from "../views/nodes/profile";
import { getRandomCell } from "../views/nodes/ship";
import { viewShipyard } from "../views/nodes/shipyard";
import { hiddenInterfaceBeforeStartPlay, setAiMoveDesign, setPlayerMoveDesign, viewInterfaceAfterEndGame } from "../views/nodes/ui";
import { Cross } from "./elements/templates";
import { Profile } from "./player";
import { TimeManipulators } from "./timeManipulators";

export const Game = () => {
    let player = Profile(1, 'Player', 'player-board');
    let ai = Profile(0, 'AI', 'ai-board');
    const timeManipulators = TimeManipulators();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        viewProfile(player);
        viewProfile(ai);
        viewShipyard(player);
    }

    const setDefaultListeners = () => {
        setListenersForShips(player.getShipyard().getAllShips());
        setListenersForLinks();
        setListenersForPlayButton();
        setListenersForExitButton();
    }

    const setGamePlayListeners = () => {
        setListenersForCells();
    }

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
    }

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        hiddenInterfaceBeforeStartPlay();
        playGameState();
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
    }

    const end = () => {
        timeManipulators.reset();
        viewInterfaceAfterEndGame();
        endGameState();
    }

    const playGameState = () => {
        player.getGameboard().blockShips();
    }

    const endGameState = () => {
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().unblockShips();
        player.getGameboard().reset();
        gameHandler.fillBoardsToRandomShips();
        setAiMoveDesign(ai, player)
    }

    return { start, play, end, ai, player, gameHandler }
}

const GameHandler = (ai, player, timeManipulators) => {
    let move;
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];

    const setDefaultSettings = () => {
        move = 'player';
        playerCells = [...player.getGameboard().getUnstructedContainer()];
        aiCells = [...ai.getGameboard().getUnstructedContainer()];
    }

    const switchMove = () => {
        timeManipulators.reset();
        if (isEndGame()) {
            return false;
        } else if (move === 'ai') {
            timeManipulators.setTimeOfTheMove();
            move = 'player';
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    }

    const isEndGame = () => {
        let isEnd = isPlayerLose(player) || isPlayerLose(ai);
        return isEnd;
    }

    const isPlayerLose = (player) => {
        let isLose = true;
        const ships = player.getShipyard().getAllShips();
        ships.forEach(ship => {
            if (ship.isLive()) {
                isLose = false;
            }
        })
        return isLose;
    }

    const playerMove = () => {
        ai.getGameboard().unblock();
        setPlayerMoveDesign(ai, player);
    }

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            const index = aiCells.indexOf(cell);
            ai.getGameboard().block();
            takeHit(aiCells.splice(index, 1)[0]);
            timeManipulators.setTimeBetweenMoves(500);
        }
    }

    const aiMove = () => {
        ai.getGameboard().block();
        setAiMoveDesign(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    }

    const takeHit = (cell) => {
        const ship = cell.getOccupant();
        if (ship === 'free') {
            cell.getCellNode().classList.add('miss-hit');
        } else {
            const deck = cell.getLinkedDeck();
            deck.setTheHit();
            let cross = Cross();
            cross.view();
            deck.getCellNode().appendChild(cross.getSvg());
            if (!ship.isLive()) {
                ship.getContainer().style.opacity = '0.3';
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    return { checkCell, playerMove, setDefaultSettings, switchMove, takeHit, isEndGame, fillBoardsToRandomShips };
}