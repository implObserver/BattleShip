import { Fregat, Ship } from "../models/ship";

describe('ship functions', () => {
    let testShip;
    let testFregat;

    beforeEach(() => {
        testShip = Ship(2);
        testFregat = Fregat(); //Ship(4)
    });

    test('test ship of live', () => {
        expect(testShip.isLive()).toBe(true)
    })

    test('test ship of death', () => {
        let body = testShip.getBody();

        body.forEach(cell => {
            cell.setTheHit();
        });

        expect(testShip.isLive()).toBe(false)
    })

    test('test fregat of live', () => {
        expect(testFregat.isLive()).toBe(true)
    })

    test('test fregat of death', () => {
        let body = testFregat.getBody();

        body.forEach(cell => {
            cell.setTheHit();
        });

        expect(testFregat.isLive()).toBe(false)
    })

});
