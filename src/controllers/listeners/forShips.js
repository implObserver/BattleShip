import { Session, resetSession } from "../../models/session";
import { dragEnd, shipTravers } from "../../models/ship";
import { viewShip } from "../../views/nodes/ship";

export const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');

    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach(deck => {
            deck.getCellNode().addEventListener('mousedown', evt => {
                Session.index = deck.getNumber();
            })
        })

        ship.getContainer().addEventListener('click', e => {
            if (ship.getParent() !== null) {
                Session.activeShip = ship;
                Session.currentElement = ship.getParent().getCellNode();
                ship.setVertical();
                shipTravers(Session.activeShip.clearCells, Session.activeShip, Session.activeShip.getParent());
                shipTravers(ship.checkCells, ship, ship.getParent());
                if (ship.isLegal()) {
                    viewShip(ship, ship.getParent());
                    ship.setOrientation();
                } else {
                    ship.setHorizontal();
                }
                resetSession();
            }
        })

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            Session.activeShip = ship;
            shipTravers(Session.activeShip.clearCells, Session.activeShip, Session.activeShip.getParent());
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            dragEnd();
            resetSession();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        Session.currentElement = evt.target;
    })
}