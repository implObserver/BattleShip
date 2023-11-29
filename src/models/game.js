import { setListenersForLinks } from "../controllers/listeners/forLinks";
import { setListenersForCells, setListenersForExitButton, setListenersForPlayButton } from "../controllers/listeners/forPlay";
import { setListenersforPopups } from "../controllers/listeners/forPopups";
import { setListenersForShips } from "../controllers/listeners/forShips";
import { removeHidden, setHidden, setLowOpacity } from "../views/animations/changeVisible";
import { viewAccurateHit, viewMissHit } from "../views/nodes/hits";
import { viewLosePopup, viewWinPopup } from "../views/nodes/popups";
import { viewProfile } from "../views/nodes/profile";
import { viewShipyard } from "../views/nodes/shipyard";
import { hiddenInterfaceBeforeStartPlay, setAiMoveDesign, setMiniShipyardDesign, setPlayerMoveDesign, viewInterfaceAfterEndGame } from "../views/nodes/ui";
import { CellHandler } from "./cellHandler";
import { killShipEffect, missEffect } from "./elements/audioEffects";
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
        setListenersforPopups();
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
        removeHidden(ai.getMiniShipyard().getNode())
        removeHidden(player.getMiniShipyard().getNode())
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
        setMiniShipyardDesign(player.getMiniShipyard())
        setMiniShipyardDesign(ai.getMiniShipyard())
    }

    const end = () => {
        setHidden(ai.getMiniShipyard().getNode())
        setHidden(player.getMiniShipyard().getNode())
        ai.getMiniShipyard().reset()
        player.getMiniShipyard().reset()
        timeManipulators.reset();
        viewInterfaceAfterEndGame();
        endGameState();
    }

    const playGameState = () => {
        document.querySelector('.x-axis').classList.add('correct')
        player.getGameboard().blockShips();
    }

    const endGameState = () => {
        document.querySelector('.x-axis').classList.remove('correct')
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

    const getActivePlayer = () => {
        return move === 'ai' ? ai : player;
    }

    const switchMove = () => {
        timeManipulators.reset();
        if (isEndGame()) {
            openPopup();
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
        cell.setTheHit();
        if (ship === 'free') {
            viewMissHit(cell);
            missEffect.play();
        } else {
            viewAccurateHit(cell);
            setTimeout(() => {
                if (checkLiveShip(ship)) {
                    hitAllDiags(cell);
                }
                move = move === 'ai' ? 'player' : 'ai';
            }, 500);
        }
    }

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            killShipEffect.play();
            ship.kill();
            let miniShip = getMiniShip(ship);
            miniShip.kill();
            hitAllAreaAroundShip(ship)
        }
        return ship.isLive();
    }

    const hitAllAreaAroundShip = (ship) => {
        const area = ship.getWaterAreas().getAreaAroundTheShip();
        area.forEach(cell => {
            if (!cell.isHit()) {
                setLowOpacity(cell.getCellNode());
            }
            viewMissHit(cell);
            removeCell(cell);
        });
    }

    const removeCell = (cell) => {
        let cells = move === 'ai' ? playerCells : aiCells;
        let index = cells.indexOf(cell);
        if (index > -1) {
            cells.splice(index, 1);
        }
    }

    const hitAllDiags = (hitCell) => {
        const handler = CellHandler();
        const x = hitCell.getXY().x;
        const y = hitCell.getXY().y;
        const opponent = move === 'ai' ? player : ai;
        const parent = opponent.getGameboard().getStructedContainer();
        const cells = handler.getDiads(x, y, parent);
        cells.forEach(cell => {
            if (cell !== hitCell) {
                if (!cell.isHit()) {
                    setLowOpacity(cell.getCellNode());
                }
                viewMissHit(cell);
                removeCell(cell);
            }
        });
    }

    const getMiniShip = (ship) => {
        const type = ship.getType();
        const activePlayer = getActivePlayer();
        const ships = activePlayer.getMiniShipyard().getShipsOfType(type);
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].isLive()) {
                return ships[i];
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    const openPopup = () => {
        move === 'player' ? viewLosePopup() : viewWinPopup()
    }

    return { checkCell, playerMove, setDefaultSettings, switchMove, takeHit, isEndGame, fillBoardsToRandomShips };
}