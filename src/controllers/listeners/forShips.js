import { player1 } from '../..';
import { Session, resetSession } from '../../models/session';
import { viewShip } from '../../views/nodes/ship';
import { shipDragEnd } from '../ship';

export const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');
    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach((deck) => {
            deck.getCellNode().addEventListener('mousedown', (evt) => {
                Session.index = deck.getNumber();
            });
        });

        ship.getContainer().addEventListener('click', (e) => {
            if (ship.getHead() !== null) {
                Session.activeShip = ship;
                Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = viewShip(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                } else {
                    ship.orientationSwitch();
                }

                resetSession();
            }
        });

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            player1
                .getGameboard()
                .getUnstructedContainer()
                .forEach((cell) => {
                    cell.getCellNode().style.border = '';
                });
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
    });
};
