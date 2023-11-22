import { setListenersForLinks } from "../controllers/listeners/forLinks";
import { setListenersForCells, setListenersForExitButton, setListenersForPlayButton } from "../controllers/listeners/forPlay";
import { setListenersForShips } from "../controllers/listeners/forShips";
import { removeHidden, removeNullOpacity, setHidden } from "../views/animations/changeVisible";
import { viewProfile } from "../views/nodes/profile";
import { viewShipyard } from "../views/nodes/shipyard";
import { hiddenInterfaceBeforeStartPlay, setAiMoveDesign, setMiniShipyardDesign, setPlayerMoveDesign, viewInterfaceAfterEndGame } from "../views/nodes/ui";
import { drawCross, killShipEffect, missEffect, nextMoveEffect } from "./elements/audioEffects";
import { Cross } from "./elements/templates";
import { Profile } from "./player";
import { TimeManipulators } from "./timeManipulators";

export const Game = () => {
    let player = Profile(1, 'Player', 'player-board', '.ai-mini-shipyard');
    let ai = Profile(0, 'AI', 'ai-board', '.player-mini-shipyard');
    const timeManipulators = TimeManipulators();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        viewProfile(player);
        viewProfile(ai);
        viewShipyard(player.getShipyard());
        viewShipyard(player.getMiniShipyard());
        viewShipyard(ai.getMiniShipyard());
        setMiniShipyardDesign(player.getMiniShipyard())
        setMiniShipyardDesign(ai.getMiniShipyard())
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
        ai.getGameboard().hiddenShips();
    }

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        hiddenInterfaceBeforeStartPlay();
        playGameState();
        removeHidden(ai.getMiniShipyard().getNode())
        removeHidden(player.getMiniShipyard().getNode())
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
        document.querySelector('.x-axis').classList.add('correct')
    }

    const end = () => {
        document.querySelector('.x-axis').classList.remove('correct')
        setHidden(ai.getMiniShipyard().getNode())
        setHidden(player.getMiniShipyard().getNode())
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
        ai.getGameboard().hiddenShips();
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
        nextMoveEffect.play();
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
            missEffect.play();
            cell.getCellNode().classList.add('miss-hit');
        } else {
            const deck = cell.getLinkedDeck();
            removeNullOpacity(deck.getCellNode());
            deck.setTheHit();
            let cross = Cross();
            cross.view();
            deck.getCellNode().appendChild(cross.getSvg());
            drawCross.play()
            if (!ship.isLive()) {
                killShipEffect.play();
                ship.getContainer().style.opacity = '0.3';
                ship.getContainer().style.border = '0.5vh rgba(255, 0, 0, 1) solid';
                const type = ship.getType();
                let ships;
                if (move === 'ai') {
                    ships = ai.getMiniShipyard().getShipsOfType(type);
                } else {
                    ships = player.getMiniShipyard().getShipsOfType(type);
                }
                console.log(ships)
                let killedShip = null;
                ships.forEach(ship => {
                    if (ship.isLive()) {
                        if (killedShip === null) {
                            killedShip = ship;
                        }
                    }
                })

                killedShip.kill();
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    return { checkCell, playerMove, setDefaultSettings, switchMove, takeHit, isEndGame, fillBoardsToRandomShips };
}