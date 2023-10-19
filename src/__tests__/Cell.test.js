import { Cell } from "../models/cell";

describe('cell function', () => {
    let testCell;

    beforeEach(() => {
        testCell = Cell();
    });

    test('accepts a hit', () => {
        testCell.setTheHit();
        expect(testCell.isHit()).toBe(true)
    })
})