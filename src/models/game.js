import { game } from "..";
import { setListenersForLinks } from "../controllers/listeners/forLinks";
import { setListenersForCells, setListenersForPlayButton } from "../controllers/listeners/forPlay";
import { setListenersForShips } from "../controllers/listeners/forShips";
import { setDraggableForShips } from "../views/dragAndDrop/ships";
import { viewProfile } from "../views/nodes/profile";
import { getRandomCell } from "../views/nodes/ship";
import { viewShipyard } from "../views/nodes/shipyard";
import { Profile } from "./player";

export const Game = () => {
    let player = Profile(1, 'Player', 'player-board');
    let ai = Profile(0, 'AI', 'ai-board');
    let move = 'player';
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];
    let timeOfTheMove;

    const viewInterfaces = () => {
        viewProfile(player);
        viewProfile(ai);
        viewShipyard(player);
    }

    const setListeners = () => {
        setListenersForShips(player.getShipyard().getAllShips());
        setListenersForLinks();
        setListenersForPlayButton();
    }

    const start = () => {
        setListeners();
        viewInterfaces();
    }

    const play = () => {
        setListenersForCells();
        document.querySelector('.play').classList.add('hidden');
        document.querySelector('.footer').classList.add('hidden');
        document.querySelector('.tips').classList.add('hidden');

        player.getGameboard().blockShips();
        playerMove();
        timeOfTheMove = getTimeOfTheMove();
    }

    const getTimeOfTheMove = () => {
        return setInterval(() => {
            switchMove();
        }, 3000);
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

    const switchMove = () => {
        clearInterval(timeOfTheMove)
        if (isEndGame()) {
            return false;
        } else if (move === 'ai') {
            move = 'player';
            timeOfTheMove = getTimeOfTheMove();
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    }

    const playerMove = () => {
        ai.getGameboard().getNode().classList.remove('block');
        setPlayerMoveDesign(ai, player);
    }

    const aiMove = () => {
        ai.getGameboard().getNode().classList.add('block');
        setAiMoveDesign(ai, player);
        setTimeout(() => {
            takeHit(getRandomCell(playerCells));
        }, 1000);
    }

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            let index = aiCells.indexOf(cell);
            takeHit(aiCells.splice(index, 1)[0]);
        }
    }

    return { start, play, switchMove, checkCell, ai, player }
}

const setPlayerMoveDesign = (ai, player) => {
    ai.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}

const setAiMoveDesign = (ai, player) => {
    player.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}

export const takeHit = (cell) => {
    const ship = cell.getOccupant();
    if (ship === 'free') {
        cell.getCellNode().classList.add('miss-hit');
    } else {
        const deck = cell.getLinkedDeck();
        deck.setTheHit();
        deck.getCellNode().classList.add('destroyed');
        console.log(ship.isLive())
        if (!ship.isLive()) {
            ship.getContainer().style.opacity = '0.3';
        }
    }
    game.switchMove();
}