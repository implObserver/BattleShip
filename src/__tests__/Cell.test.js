import { Cell } from '../models/cell';
import { getNode } from '../views/nodes/factory';

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
        let node = getNode('cell');
        expect(testCell.getCellNode()).toEqual(node);
    });
});
