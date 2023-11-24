import { game } from '../..';
import { Session } from '../../models/session';
import { removeHidden, setHidden } from '../../views/animations/changeVisible';
import { viewShipyard } from '../../views/nodes/shipyard';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        Session.manualMode = true;
        game.player.getGameboard().reset();
        viewShipyard(game.player.getShipyard());
        setHidden(game.ai.getGameboard().getNode());
        removeHidden(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        Session.manualMode = false;
        removeHidden(game.ai.getGameboard().getNode());
        setHidden(shipyard);
        game.player.getGameboard().randomFillingOfShips();
    });
};
