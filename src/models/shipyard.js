import { Config } from './gameConfig';
import { Boat, Caravel, Drakkar, Fregat } from './ship';

export const Shipyard = () => {
    const fregats = Dock(Config.Elements.numberOf.fregates, 'Fregat');
    const caravels = Dock(Config.Elements.numberOf.caravels, 'Caravel');
    const drakkars = Dock(Config.Elements.numberOf.drakkars, 'Drakkar');
    const boats = Dock(Config.Elements.numberOf.boats, 'Boat');

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

    return { getDockWithFregats, getDockWithCaravels, getDockWithDrakkars, getDockWithBoats };
};

const Dock = (count, shipBluePrint) => {
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
                return Fregat();
            case 'Caravel':
                return Caravel();
            case 'Drakkar':
                return Drakkar();
            case 'Boat':
                return Boat();
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

export const playerShipyardModel = Shipyard();