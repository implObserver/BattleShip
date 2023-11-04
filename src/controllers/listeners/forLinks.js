import { ai } from '../..';
import { removeHidden, setHidden } from '../../views/animations/changeVisible';

export const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        console.log(ai.getGameboard().getNode())
        setHidden(ai.getGameboard().getNode());
        removeHidden(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        removeHidden(ai.getGameboard().getNode());
        setHidden(shipyard);
    });
};
