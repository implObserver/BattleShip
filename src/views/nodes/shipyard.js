import { Config } from '../../models/gameConfig';
import { Boat, Caravel, Drakkar, Fregat } from '../../models/ship';
import { setDraggableForShips } from '../dragAndDrop/ships';

export const viewShipYard = () => {
    fillShipyard();
    setDraggableForShips();
};

const fillShipyard = () => {
    addFregates();
    addCaravels();
    addDrakkars();
    addBoats();
};

const addFregates = () => {
    const dock = document.querySelector('.fregats');
    for (let i = 0; i < Config.Elements.numberOf.fregates; i++) {
        const fregat = Fregat();
        dock.appendChild(fregat.getContainer());
    }
};

const addCaravels = () => {
    const dock = document.querySelector('.caravels');
    for (let i = 0; i < Config.Elements.numberOf.caravels; i++) {
        const caravel = Caravel();
        dock.appendChild(caravel.getContainer());
    }
};

const addDrakkars = () => {
    const dock = document.querySelector('.drakkars');
    for (let i = 0; i < Config.Elements.numberOf.drakkars; i++) {
        const drakkar = Drakkar();
        dock.appendChild(drakkar.getContainer());
    }
};

const addBoats = () => {
    const dock = document.querySelector('.boats');
    for (let i = 0; i < Config.Elements.numberOf.boats; i++) {
        const boat = Boat();
        dock.appendChild(boat.getContainer());
    }
};
