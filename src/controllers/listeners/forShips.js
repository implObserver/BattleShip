import { playerGameboard } from "../../models/gameBoard";
import { Config } from "../../models/gameConfig";
import { removeChilds } from "../../models/ship";
import { playerShipyardModel } from "../../models/shipyard";

let activeShip;
let index = 0;
let currentElement;

export const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');

    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach(deck => {
            deck.getCellNode().addEventListener('mousedown', evt => {
                index = deck.getNumber();
            })
        })

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            dragEnd();
            activeShip = null;
        });
    });

    const dragEnd = () => {
        let cells = playerGameboard.getStructedContainer();
        let isMoveable = false;
        let isAlterMovable = false;

        if (currentElement !== undefined) {
            isMoveable = currentElement.classList.contains(`cell`);
            isAlterMovable = currentElement.classList.contains(`deck`);
        }

        if (!isMoveable && !isAlterMovable) {
            return;
        }

        if (isMoveable) {
            for (let i = 0; i < Config.Gameboard.height; i++) {
                for (let j = 0; j < Config.Gameboard.width; j++) {
                    if (cells[j][i].getCellNode() === currentElement) {
                        activeShip.getOrientation()
                            ? activeShip.fillContainer(cells[j][i - index])
                            : activeShip.fillContainer(cells[j - index][i]);
                    }
                }
            }
        } else if (isAlterMovable) {
            let head = activeShip.getParent().getCellNode();
            let body = activeShip.getBody();
            let buff = 0;

            for (let i = 0; i < body.length; i++) {
                if (body[i].getCellNode() === currentElement) {
                    buff = index - i;
                }
            }

            for (let i = 0; i < Config.Gameboard.height; i++) {
                for (let j = 0; j < Config.Gameboard.width; j++) {
                    if (cells[j][i].getCellNode() === head) {
                        activeShip.getOrientation()
                            ? activeShip.fillContainer(cells[j][i - buff])
                            : activeShip.fillContainer(cells[j - buff][i]);
                    }
                }
            }
        }
    }

    border.addEventListener(`dragover`, (evt) => {
        currentElement = evt.target;
    })
}

export const setListenersForFregats = () => {
    const fregats = playerShipyardModel.getDockWithFregats().getShips();
    const border = document.querySelector('.player-board');

    fregats.forEach((fregat) => {
        const cells = fregat.getBody();
        cells.forEach(cell => {
            cell.getCellNode().addEventListener('mousedown', evt => {
                index = cell.getXY().x;
            })
        })

        fregat.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            activeShip = fregat;
        });

        fregat.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            dragEnd();
            activeShip = null;
        });
    });

    const dragEnd = () => {
        let cells = playerGameboard.getUnstructedContainer();
        let isMoveable = false;
        let isAlterMovable = false;

        if (currentElement !== undefined) {
            isMoveable = currentElement.classList.contains(`cell`);
            isAlterMovable = currentElement.classList.contains(`ship-cell`);
        }

        if (!isMoveable && !isAlterMovable) {
            return;
        }

        if (isMoveable) {
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].getCellNode() === currentElement) {
                    activeShip.fillContainer(cells[i - index]);
                }
            }
        } else if (isAlterMovable) {
            let head = activeShip.getParent().getCellNode();
            let body = activeShip.getBody();
            for (let i = 0; i < body.length; i++) {
                if (body[i].getCellNode() === currentElement) {
                    let buff = index - i;
                    for (let i = 0; i < cells.length; i++) {
                        if (cells[i].getCellNode() === head) {
                            activeShip.fillContainer(cells[i - buff]);
                        }
                    }
                }
            }
        }


    }

    border.addEventListener(`dragover`, (evt) => {
        currentElement = evt.target;
    })
};
