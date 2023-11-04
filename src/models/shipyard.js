import { Config } from './gameConfig';
import { Boat, Caravel, Drakkar, Fregat } from './ship';

export const Shipyard = (player) => {
    const fregats = Dock(Config.Elements.numberOf.fregates, 'Fregat', player);
    const caravels = Dock(Config.Elements.numberOf.caravels, 'Caravel', player);
    const drakkars = Dock(Config.Elements.numberOf.drakkars, 'Drakkar', player);
    const boats = Dock(Config.Elements.numberOf.boats, 'Boat', player);

    const getDockWithFregats = () => {
        return fregats;
    };

    const getDockWithCaravels = () => {
        return caravels;
    };

    const getDockWithDrakkars = () => {
        return drakkars;
    };

    const getDockWithBoats = () => {
        return boats;
    };

    const getPlayer = () => {
        return player;
    }

    return { getPlayer, getDockWithFregats, getDockWithCaravels, getDockWithDrakkars, getDockWithBoats };
};

const Dock = (count, shipBluePrint, player) => {
    const ships = [];

    const fillDock = (count, shipBluePrint) => {
        for (let i = 0; i < count; i++) {
            const ship = buildShip(shipBluePrint);
            ships.push(ship);
        }
    };

    const buildShip = (bluePrint) => {
        switch (bluePrint) {
            case 'Fregat':
                return Fregat(player);
            case 'Caravel':
                return Caravel(player);
            case 'Drakkar':
                return Drakkar(player);
            case 'Boat':
                return Boat(player);
            default:
                console.log('Sorry, illegal ship blueprint');
        }
    };

    fillDock(count, shipBluePrint);

    const getShips = () => {
        return ships;
    }

    return { getShips };
}