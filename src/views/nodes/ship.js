import { removeChilds, shipTravers } from "../../models/ship";

export const viewShip = (ship, head) => {
    shipTravers(ship.checkCells, ship, head);
    if (ship.isLegal()) {
        let parent = ship.getParent();

        if (parent !== null) {
            removeChilds(parent.getCellNode());
        }

        ship.setParent(head);
        head.getCellNode().appendChild(ship.getContainer());
        shipTravers(ship.setCoordinates, ship, head);
        shipTravers(ship.occupyCells, ship, head);
    }
};
