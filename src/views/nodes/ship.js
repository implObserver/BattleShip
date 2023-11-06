import { ai, player1 } from "../..";
import { removeHidden, setHidden } from "../animations/changeVisible";

export const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
        if (ship.getBoard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
    return isView;
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    removeHidden(ai.getGameboard().getNode());
    setHidden(shipyard);
}
