export const Config = (() => {
    const Gameboard = (() => {
        const width = 10;
        const height = 10;

        document.documentElement.style.setProperty('--board-width', width);
        document.documentElement.style.setProperty('--board-height', height);

        return { width, height };
    })();

    return { Gameboard };
})();
