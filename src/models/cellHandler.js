export const CellHandler = () => {
    const getBefore = (x, y, parent) => {
        try {
            return parent[y][--x]
        } catch (error) {
            return parent[y][++x]
        }
    }

    const getAfter = (x, y, parent) => {
        try {
            return parent[y][++x]
        } catch (error) {
            return parent[y][--x]
        }
    }

    const getOver = (x, y, parent) => {
        try {
            return parent[--y][x]
        } catch (error) {
            return parent[++y][x]
        }
    }

    const getUnder = (x, y, parent) => {
        try {
            return parent[++y][x]
        } catch (error) {
            return parent[--y][x]
        }
    }

    const getDiag1 = (x, y, parent) => {
        try {
            return parent[--y][--x]
        } catch (error) {
            return parent[++y][++x]
        }
    }

    const getDiag2 = (x, y, parent) => {
        try {
            return parent[--y][++x]
        } catch (error) {
            return parent[++y][--x]
        }
    }

    const getDiag3 = (x, y, parent) => {
        try {
            return parent[++y][++x]
        } catch (error) {
            return parent[--y][--x]
        }
    }

    const getDiag4 = (x, y, parent) => {
        try {
            return parent[++y][--x]
        } catch (error) {
            return parent[--y][++x]
        }
    }

    const getCellAroundArea = (x, y, parent) => {
        let cells = [];
        cells.push(getBefore(x, y, parent));
        cells.push(getAfter(x, y, parent));
        cells.push(getOver(x, y, parent));
        cells.push(getUnder(x, y, parent));
        cells.push(getDiag1(x, y, parent));
        cells.push(getDiag2(x, y, parent));
        cells.push(getDiag3(x, y, parent));
        cells.push(getDiag4(x, y, parent));
        return cells;
    }

    return { getCellAroundArea }
}