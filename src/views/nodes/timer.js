import { appendChilds, setAttributes } from '../../helper/helper';
import { HorizontalLine } from '../../models/elements/attributes';
import { colorsTimer, drawTimer } from '../animations/timer';

export const createTimerSVG = () => {
    let timer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    setAttributes(line, HorizontalLine.horizontal);
    appendChilds(timer, line);
    return timer;
};

export const viewTimer = (svg) => {
    const animations = [
        colorsTimer(svg.lastChild, 15000, 'none', [
            { stroke: 'green' },
            { stroke: 'orange' },
            { stroke: 'red' },
        ]),
        drawTimer(svg.lastChild, 15000, 'none', [
            { strokeDashoffset: '99vw' },
            { strokeDashoffset: '0vw' },
        ]),
    ];
    return animations;
};
