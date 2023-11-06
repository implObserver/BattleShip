import { ai, player1 } from '../..';
import { removeHidden, setHidden } from '../../views/animations/changeVisible';
import { viewShipyard } from '../../views/nodes/shipyard';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        player1.getGameboard().reset();
        viewShipyard(player1.getShipyard());
        setHidden(ai.getGameboard().getNode());
        removeHidden(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        player1.getGameboard().reset();
        removeHidden(ai.getGameboard().getNode());
        setHidden(shipyard);
        player1.getGameboard().addRandomShips();
    });
};
