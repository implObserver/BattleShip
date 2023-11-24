export const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: 'min(0.5vh ,0.5vw)' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: 'min(5vh ,5vw)' },
        { name: 'stroke-dashoffset', val: 'min(5vh ,5vw)' }
    ];
    const leftDiag = [
        { name: 'x1', val: 'min(1vh ,1vw)' },
        { name: 'y1', val: 'min(1vh ,1vw)' },
        { name: 'x2', val: 'min(4vh ,4vw)' },
        { name: 'y2', val: 'min(4vh ,4vw)' },
    ];
    const rightDiag = [
        { name: 'x2', val: 'min(1vh ,1vw)' },
        { name: 'y2', val: 'min(4vh ,4vw)' },
        { name: 'x1', val: 'min(4vh ,4vw)' },
        { name: 'y1', val: 'min(1vh ,1vw)' },
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