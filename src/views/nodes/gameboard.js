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

export const setHidden = (board) => {
    const node = board.getNode();
    node.classList.add('hidden');
};

export const removeHidden = (board) => {
    const node = board.getNode();
    node.classList.remove('hidden');
};

viewBoard(playerGameboard);
viewBoard(aiGameboard);
