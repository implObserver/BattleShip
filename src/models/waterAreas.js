import { CellHandler } from "./cellHandler";
import { Session } from "./session";

export const ShipWaterAreas = () => {
    let underTheShip = [];
    let aroundTheShip = [];

    const getAreaUnderTheShip = () => {
        return underTheShip;
    }

    const getAreaAroundTheShip = () => {
        return aroundTheShip
    }

    const setAreas = (area) => {
        underTheShip = area;
        aroundTheShip = setAreaAroundTheShip();
    }

    const setAreaAroundTheShip = () => {
        let handler = CellHandler();
        let areas = [];
        underTheShip.forEach(sector => {
            let coordinates = sector.getXY();
            let area = handler.getCellAroundArea(coordinates.x, coordinates.y)
            areas = areas.concat(area);
        })
        return Array.from(new Set(areas)).filter(x => !underTheShip.includes(x) && x !== undefined);
    }

    const occupyArea = (area, occupant) => {
        area.forEach(sector => {
            sector.setParent(occupant);
        })
    }

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            if (!sector.isFree() && sector.getParent() !== Session.activeShip.getContainer()) {
                acessibility = false;
            }
        })
        return acessibility;
    }

    const clearAreas = () => {
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach(sector => {
            sector.setParent('free');
        })
    }

    return { clearAreas, checkArea, getAreaUnderTheShip, getAreaAroundTheShip, setAreas, occupyArea }
}