import { game } from '../..';
import { removeHidden, setHidden } from '../../views/animations/changeVisible';
import { viewShipyard } from '../../views/nodes/shipyard';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        game.player.getGameboard().reset();
        viewShipyard(game.player.getShipyard());
        setHidden(game.ai.getGameboard().getNode());
        removeHidden(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        removeHidden(game.ai.getGameboard().getNode());
        setHidden(shipyard);
        game.player.getGameboard().randomFillingOfShips();
    });
};
