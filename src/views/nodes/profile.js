import { viewAxis } from "./axis";
import { viewBoard } from "./gameboard"
import { viewShipyard } from "./shipyard";

export const viewProfile = (profile) => {
    viewBoard(profile.getGameboard());
    viewAxis(profile.getGameboard());
    //viewShipyard(profile.getShipyard());
}