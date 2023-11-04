import { Config } from '../../models/gameConfig';

export const viewBoard = (board) => {
    const container = board.getUnstructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty('--board-width', Config.Gameboard.width);
    document.documentElement.style.setProperty('--board-height', Config.Gameboard.height);
})()
