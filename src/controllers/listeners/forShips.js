import { Coordinates } from '../../models/game';
import { Session, resetSession } from '../../models/session';
import { viewDragShipForMobile, viewShip } from '../../views/nodes/ship';
import { shipDragEnd } from '../ship';

export const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');

    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach((deck) => {
            deck.getCellNode().addEventListener('mousedown', (evt) => {
                Session.index = deck.getNumber();
            });

            deck.getCellNode().addEventListener('touchstart', (evt) => {
                const { left, top, width, height } = deck.getCellNode().getBoundingClientRect()
                const centerX = left + width / 2
                const centerY = top + height / 2
                Coordinates.setCoordinates(centerX, centerY);
            });

            deck.getCellNode().addEventListener('touchend', (evt) => {
                let event = new Event('mousedown');
                deck.getCellNode().dispatchEvent(event);
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
            Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            Coordinates.reset();
            evt.target.classList.remove(`selected`);
            ship.getContainer().style.setProperty('--y', `0px`);
            ship.getContainer().style.setProperty('--x', `0px`);
            shipDragEnd();
            resetSession();
        });

        ship.getContainer().addEventListener(`touchstart`, (evt) => {
            Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`touchend`, (evt) => {
            let event = new DragEvent('dragend');
            ship.getContainer().dispatchEvent(event);
        });

        ship.getContainer().addEventListener(`touchmove`, (e) => {
            let cursorX = e.touches[0].clientX;
            let cursorY = e.touches[0].clientY;
            setCurrentElementForMobileDrag(cursorX, cursorY);
            viewDragShipForMobile(cursorX, cursorY, ship.getContainer());
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        Session.currentElement = evt.target;
    });

    const setCurrentElementForMobileDrag = (cursorX, cursorY) => {
        const elements = document.elementsFromPoint(cursorX, cursorY);
        elements.forEach(element => {
            if (element.classList.contains('marine-sector')) {
                Session.currentElement = element;
            }
        })
    }
};
