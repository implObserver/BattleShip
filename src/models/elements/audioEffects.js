import crossAudio from '../../views/audio/cross.mp3';
import nextMove from '../../views/audio/nextMove.mp3';
import missHit from '../../views/audio/shot.mp3';
import boomShip from '../../views/audio/boom.mp3';
import click from '../../views/audio/clickPlay.mp3';
import timer from '../../views/audio/timer.mp3';
import winSound from '../../views/audio/win.mp3';
import loseSound from '../../views/audio/lose.mp3';

export const drawCross = (() => {
    let audio = new Audio(crossAudio)
    audio.playbackRate = 3;
    audio.volume = 0.5;
    return audio;
})();

export const nextMoveEffect = (() => {
    let audio = new Audio(nextMove);
    audio.playbackRate = 2;
    return audio;
})();

export const missEffect = (() => {
    let audio = new Audio(missHit);
    audio.playbackRate = 2;
    audio.volume = 0.4;
    return audio;
})();

export const killShipEffect = (() => {
    let audio = new Audio(boomShip);
    audio.volume = 0.2;
    return audio;
})();

export const clickEffect = (() => {
    let audio = new Audio(click);
    audio.volume = 1;
    return audio;
})();

export const timerEffect = (() => {
    let audio = new Audio(timer);
    audio.volume = 1;
    return audio;
})();

export const win = (() => {
    let audio = new Audio(winSound);
    audio.volume = 1;
    return audio;
})();

export const lose = (() => {
    let audio = new Audio(loseSound);
    audio.volume = 1;
    return audio;
})();

/*export const aiCross = (() => {
    let audio = new Audio('../audio/terminatorCross.mp3');
    audio.playbackRate = 2.3;
    return audio;
})();

export const winRound = (() => {
    let audio = new Audio('../audio/winRound.mp3');
    audio.volume = 0.5;
    return audio;
})();

export const draw = (() => {
    let audio = new Audio('../audio/wow.mp3');
    audio.volume = 0.5;
    return audio;
})();

export const win = (() => {
    let audio = new Audio('../audio/win.mp3');
    return audio;
})();

export const timer = (() => {
    let audio = new Audio('../audio/timer.mp3');
    return audio;
})();

export const lose = (() => {
    let audio = new Audio('../audio/terminatorEnd.mp3');
    return audio;
})();*/