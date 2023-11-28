import { game } from "../..";
import { hiddenPopup } from "../../views/nodes/popups";

export const setListenersforPopups = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const click = popup.addEventListener('click', e => {
            hiddenPopup(popup);
            game.end();
        })
    });
}