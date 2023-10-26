import { aiGameboard } from '../../models/gameBoard';
import { removeHidden, setHidden } from '../../views/nodes/gameboard';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        setHidden(aiGameboard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        removeHidden(aiGameboard);
    });
};
