import { Session, resetSession } from "../../models/session";
import { shipDragEnd } from "../../models/ship";
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
            if (ship.getHead() !== null) {
                Session.activeShip = ship;
                Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = viewShip(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                    resetSession()
                } else {
                    ship.orientationSwitch();
                }
            }
        })

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            evt.target.classList.remove(`selected`);
            shipDragEnd();
            resetSession();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        Session.currentElement = evt.target;
    })
}