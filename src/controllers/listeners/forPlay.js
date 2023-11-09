import { game } from "../..";

export const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');

    const click = button.addEventListener('click', e => {
        game.play();
    })
}