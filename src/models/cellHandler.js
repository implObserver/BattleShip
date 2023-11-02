import { playerGameboard } from "./gameBoard"

export const CellHandler = () => {
    const getBefore = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[y][--x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[y][++x]
        }
    }

    const getAfter = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[y][++x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[y][--x]
        }
    }

    const getOver = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[--y][x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[++y][x]
        }
    }

    const getUnder = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[++y][x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[--y][x]
        }
    }

    const getDiag1 = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[--y][--x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[++y][++x]
        }
    }

    const getDiag2 = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[--y][++x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[++y][--x]
        }
    }

    const getDiag3 = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[++y][++x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[--y][--x]
        }
    }

    const getDiag4 = (x, y) => {
        try {
            return playerGameboard.getStructedContainer()[++y][--x]
        } catch (error) {
            return playerGameboard.getStructedContainer()[--y][++x]
        }
    }

    const getCellAroundArea = (x, y) => {
        console.log(x, y)
        let cells = [];
        cells.push(getBefore(x, y));
        cells.push(getAfter(x, y));
        cells.push(getOver(x, y));
        cells.push(getUnder(x, y));
        cells.push(getDiag1(x, y));
        cells.push(getDiag2(x, y));
        cells.push(getDiag3(x, y));
        cells.push(getDiag4(x, y));
        console.log(cells)
        return cells;
    }

    return { getCellAroundArea }
}