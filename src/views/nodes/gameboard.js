import { Config } from '../../models/gameConfig';

export const viewBoard = (board) => {
    console.log(board.getNode())
    const container = board.getStructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty('--board-width', Config.Gameboard.width);
    document.documentElement.style.setProperty('--board-height', Config.Gameboard.height);
})()
