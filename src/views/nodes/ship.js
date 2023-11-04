export const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        if (ship.isHorizontal()) {
            ship.getContainer().style.width = `${ship.getBody().length * 5}vh`;
            ship.getContainer().style.height = `5vh`;
        } else {
            ship.getContainer().style.height = `${ship.getBody().length * 5}vh`;
            ship.getContainer().style.width = `5vh`;
        }
        head.getCellNode().appendChild(ship.getContainer());
    }
    return isView;
};
