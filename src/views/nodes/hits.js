import { drawCross } from "../../models/elements/audioEffects";
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
    let cross = Cross();
    deck.getCellNode().classList.add('destroyed');
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
}