import { Animations } from './animations';

export const drawCross = (e, dur, fill, ...keyFrames) => {
    Animations.custom(e.firstChild, dur, fill, ...keyFrames);
    setTimeout(() => {
        return Animations.custom(e.lastChild, dur, fill, ...keyFrames);
    }, dur);
};
