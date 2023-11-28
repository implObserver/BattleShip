import { drawCross, missEffect } from "../../models/elements/audioEffects";
import { Cross } from "../../models/elements/templates";
import { removeNullOpacity } from "../animations/changeVisible";

export const viewMissHit = (cell) => {
    cell.getCellNode().classList.add('miss-hit');
}

export const viewAccurateHit = (cell) => {
    const deck = cell.getLinkedDeck();
    removeNullOpacity(deck.getCellNode());
    deck.setTheHit();
    appendCrossSvg(deck);
    drawCross.play();
}

export const appendCrossSvg = (deck) => {
    let copyCross = document.querySelector('.cross').cloneNode(true);
    copyCross.classList.remove('hidden');
    let cross = Cross();
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
    setTimeout(() => {
        deck.getCellNode().removeChild(cross.getSvg());
        deck.getCellNode().appendChild(copyCross);
    }, 500);
}