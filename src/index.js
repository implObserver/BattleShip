import { Cell } from './models/cell';
import { Gameboard } from './models/gameBoard';
import { Fregat, Ship } from './models/ship';
import { getCell } from './views/nodes/container';
import { getNode } from './views/nodes/factory';
import './views/styles/main.css';

//view board
let board = Gameboard();

let container = board.getContainer();
let size = board.getSize();
let boardwr = document.querySelector('.board');
let xAxis = document.querySelector('.x-axis');
let yAxis = document.querySelector('.y-axis');

container.forEach((line) => {
    line.forEach((cell) => {
        boardwr.appendChild(cell.getCellNode());
    });
});

for (let i = 0; i < size.width; i++) {
    xAxis.appendChild(getNode('x-cell'));
}

for (let i = 0; i < size.height; i++) {
    yAxis.appendChild(getNode('y-cell'));
}

//fill axis
