import { aiGameboard, playerGameboard } from '../../models/gameBoard';
import { Config } from '../../models/gameConfig';

const viewBoard = (board) => {
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

viewBoard(playerGameboard);
viewBoard(aiGameboard);
