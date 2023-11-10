import { game } from "../..";

export const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');

    const click = button.addEventListener('click', e => {
        game.play();
    })
}

export const setListenersForCells = () => {
    const cells = game.ai.getGameboard().getUnstructedContainer();
    cells.forEach(cell => {
        const node = cell.getCellNode();
        node.style.zIndex = 1000;
        const click = node.addEventListener('click', e => {
            game.checkCell(cell);
        })
    })
}