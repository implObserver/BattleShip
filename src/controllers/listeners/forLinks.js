import { aiGameboard } from '../../models/gameBoard';
import { removeHidden, setHidden } from '../../views/animations/changeVisible';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        setHidden(aiGameboard.getNode());
        removeHidden(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        removeHidden(aiGameboard.getNode());
        setHidden(shipyard);
    });
};