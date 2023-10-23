import { aiGameboard, playerGameboard } from '../../models/gameBoard';
import { Boat, Caravel, Drakkar, Fregat } from '../../models/ship';

export const playerBoardNode = document.querySelector('.player-board');
export const aiBoardNode = document.querySelector('.ai-board');

const viewBoard = (board, node) => {
    const container = board.getStructedContainer();
    const boardwr = node.querySelector('.board');
    container.forEach((line) => {
        line.forEach((cell) => {
            boardwr.appendChild(cell.getCellNode());
        });
    });
};

viewBoard(playerGameboard, playerBoardNode);
viewBoard(aiGameboard, aiBoardNode);
