import { Fregat, Ship } from '../models/ship';
import { Game } from './models/game';


jest.mock('../models/cell')
jest.mock('../models/cellHandler')
jest.mock('../models/game')
jest.mock('../models/gameBoard')
jest.mock('../models/gameConfig')
jest.mock('../models/player')
jest.mock('../models/session')
jest.mock('../models/ship')
jest.mock('../models/shipyard')
jest.mock('../models/waterAreas')
jest.mock('../models/elements/templates')
jest.mock('../index')
jest.mock('../controllers/listeners/forLinks')
jest.mock('../controllers/listeners/forPlay')
jest.mock('../controllers/listeners/forPopups')
jest.mock('../controllers/listeners/forShips')

describe('ship functions', () => {
    let testShip;
    let testFregat;

    beforeEach(() => {
        testShip = Ship(2);
        testFregat = Fregat(); //Ship(4)
    });

    test('test ship of live', () => {
        expect(testShip.isLive()).toBe(true);
    });

    test('test ship of death', () => {
        let body = testShip.getBody();

        body.forEach((cell) => {
            cell.setTheHit();
        });

        expect(testShip.isLive()).toBe(false);
    });

    test('test fregat of live', () => {
        expect(testFregat.isLive()).toBe(true);
    });

    test('test fregat of death', () => {
        let body = testFregat.getBody();

        body.forEach((cell) => {
            cell.setTheHit();
        });

        expect(testFregat.isLive()).toBe(false);
    });
});
