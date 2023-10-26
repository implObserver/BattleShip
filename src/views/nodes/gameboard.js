import { aiGameboard, playerGameboard } from '../../models/gameBoard';

const viewBoard = (board) => {
    const container = board.getStructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

viewBoard(playerGameboard);
viewBoard(aiGameboard);
