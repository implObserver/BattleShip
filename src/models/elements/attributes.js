export const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: 'min(0.5vh ,max(0.2vw,0.2vh))' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: 'min(5vh ,max(2vw, 2vh))' },
        { name: 'stroke-dashoffset', val: 'min(5vh ,max(2vw, 2vh))' }
    ];
    const leftDiag = [
        { name: 'x1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'y1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'x2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'y2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
    ];
    const rightDiag = [
        { name: 'x2', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'y2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'x1', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'y1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
    ];
    return { line, leftDiag, rightDiag };
})();

export const HorizontalLine = (() => {
    const horizontal = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: 'min(3vh ,3vw)' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '100vw' },
        { name: 'stroke-dashoffset', val: '100vw' },
        { name: 'x1', val: '0vw' },
        { name: 'y1', val: '0vw' },
        { name: 'x2', val: '100vw' },
        { name: 'y2', val: '0vw' },
    ]
    return { horizontal };
})();