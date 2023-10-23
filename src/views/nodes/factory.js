export const getNode = (...names) => {
    const cell = document.createElement('div');
    names.forEach(name => {
        if (name !== '') {
            cell.classList.add(name);
        }
    })
    return cell;
};
