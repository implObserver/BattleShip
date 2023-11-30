export const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '5%' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '120%' },
        { name: 'stroke-dashoffset', val: '120%' },
    ];
    const leftDiag = [
        { name: 'x1', val: '10%' },
        { name: 'y1', val: '10%' },
        { name: 'x2', val: '90%' },
        { name: 'y2', val: '90%' },
    ];
    const rightDiag = [
        { name: 'x2', val: '10%' },
        { name: 'y2', val: '90%' },
        { name: 'x1', val: '90%' },
        { name: 'y1', val: '10%' },
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
    ];
    return { horizontal };
})();
