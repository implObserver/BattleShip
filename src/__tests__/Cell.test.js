import { Cell } from '../models/cell';
import { getCell } from '../views/nodes/cell';

describe('cell function', () => {
    let testCell;

    beforeEach(() => {
        testCell = Cell();
    });

    test('accepts a hit', () => {
        testCell.setTheHit();
        expect(testCell.isHit()).toBe(true);
    });

    test('check node', () => {
        let node = getCell();
        expect(testCell.getCellNode()).toEqual(node);
    });
});
