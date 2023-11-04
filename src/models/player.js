import { Gameboard } from "./gameBoard";
import { Shipyard } from "./shipyard";

const Player = (id, name) => {

    const getId = () => {
        return id;
    }

    const getName = () => {
        return name;
    }

    return { getId, getName }
}

export const Profile = (id, name, nodeId) => {
    const prototype = Player(id, name);

    let gameboard = Gameboard(nodeId, prototype);
    let shipyard = Shipyard(prototype);

    const getGameboard = () => {
        return gameboard
    }

    const getShipyard = () => {
        return shipyard;
    }

    return Object.assign(prototype, { getGameboard, getShipyard });
}