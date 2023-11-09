import { setListenersForLinks } from "../controllers/listeners/forLinks";
import { setListenersForPlayButton } from "../controllers/listeners/forPlay";
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
    let aiCells = [...ai.getGameboard().getStructedContainer()];

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
        document.querySelector('.play').classList.add('hidden');
        document.querySelector('.footer').classList.add('hidden');
        document.querySelector('.tips').classList.add('hidden');

        player.getGameboard().blockShips();
        playerMove()
        setInterval(() => {
            switchMove();
        }, 5000);
    }

    const switchMove = () => {
        if (move === 'ai') {
            move = 'player';
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    }

    const playerMove = () => {
        setPlayerMoveDesign(ai, player);
    }

    const aiMove = () => {
        setAiMoveDesign(ai, player);
        randomAiHit(playerCells)
    }

    return { start, play, ai, player }
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

const randomAiHit = (playerCells) => {
    if (playerCells.length > 0) {
        let cell = getRandomCell(playerCells);
        console.log(cell)
        cell.getCellNode().classList.add('miss-hit');
    }
}