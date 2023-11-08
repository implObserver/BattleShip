import { viewAxis } from './axis';
import { viewBoard } from './gameboard';

export const viewProfile = (profile) => {
    viewBoard(profile.getGameboard());
    viewAxis(profile.getGameboard());
};
