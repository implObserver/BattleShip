import { playerGameboard } from "./gameBoard";

export const Session = (() => {
    let activeShip = null;
    let index = 0;
    let doubleIndex = 'ship';
    let currentElement = null;
    let playerGameBoardCells = playerGameboard.getStructedContainer();
    return { activeShip, index, doubleIndex, currentElement, playerGameBoardCells }
})()

export const resetSession = () => {
    Session.activeShip = null;
    Session.index = 0;
    Session.doubleIndex = 'ship';
    Session.currentElement = null;
}