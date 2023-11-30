import { Animations } from './animations';

export const colorsTimer = (e, dur, fill, ...keyFrames) => {
    return Animations.custom(e, dur, fill, ...keyFrames);
};

export const drawTimer = (e, dur, fill, ...keyFrames) => {
    return Animations.custom(e, dur, fill, ...keyFrames);
};
