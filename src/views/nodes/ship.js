import { playerGameboard } from "../../models/gameBoard";
import { removeChilds, shipTravers } from "../../models/ship";

export const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
    }
    return isView;
};
