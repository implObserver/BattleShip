export const getNode = (name) => {
    const cell = document.createElement('div');
    cell.classList.add(name);
    return cell;
};
