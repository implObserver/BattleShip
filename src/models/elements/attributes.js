export const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '0.5vh' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '5vh' },
        { name: 'stroke-dashoffset', val: '5vh' }
    ];
    const leftDiag = [
        { name: 'x1', val: '1vh' },
        { name: 'y1', val: '1vh' },
        { name: 'x2', val: '4vh' },
        { name: 'y2', val: '4vh' },
    ];
    const rightDiag = [
        { name: 'x2', val: '1vh' },
        { name: 'y2', val: '4vh' },
        { name: 'x1', val: '4vh' },
        { name: 'y1', val: '1vh' },
    ];
    return { line, leftDiag, rightDiag };
})();

export const HorizontalLine = (() => {
    const horizontal = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '3vh' },
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