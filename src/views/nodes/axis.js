import { Alphabets } from '../../models/alphabets';
import { getNode } from './factory';

const alphabet = Alphabets.rus().codes;

export const viewAxis = (board) => {
    const node = board.getNode();
    const xAxis = node.querySelector('.x-axis');
    const yAxis = node.querySelector('.y-axis');
    const size = board.getSize();

    for (let i = 0; i < size.width; i++) {
        const cell = getNode('x-cell', 'cell');
        const letter = String.fromCharCode(alphabet[i]).toUpperCase();
        cell.textContent = letter;
        xAxis.appendChild(cell);
    }

    for (let i = 0; i < size.height; i++) {
        const cell = getNode('y-cell', 'cell');
        cell.textContent = i;
        yAxis.appendChild(cell);
    }
};
