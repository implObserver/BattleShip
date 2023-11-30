import { lose, win } from '../../models/elements/audioEffects';

export const viewWinPopup = () => {
    const popup = document.querySelector('.popup-win');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    win.play();
};

export const viewLosePopup = () => {
    const popup = document.querySelector('.popup-lose');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    lose.play();
};

export const hiddenPopup = (popup) => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    win.pause();
    lose.pause();
};
