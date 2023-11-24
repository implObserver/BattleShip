export const Session = (() => {
    let activeShip = null;
    let index = 0;
    let doubleIndex = 'ship';
    let currentElement = null;
    let choisedCell = null;
    let manualMode = false;
    return { manualMode, activeShip, index, doubleIndex, currentElement, choisedCell };
})();

export const resetSession = () => {
    Session.activeShip = null;
    Session.index = 0;
    Session.doubleIndex = 'ship';
    Session.currentElement = null;
};
