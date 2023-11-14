export const hiddenInterfaceBeforeStartPlay = () => {
    document.querySelector('.play').classList.add('hidden');
    document.querySelector('.footer').classList.add('hidden');
    document.querySelector('.tips').classList.add('hidden');
    document.querySelector('.exit').classList.remove('hidden');
}

export const viewInterfaceAfterEndGame = () => {
    document.querySelector('.play').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
    document.querySelector('.tips').classList.remove('hidden');
    document.querySelector('.exit').classList.add('hidden');
}

export const setPlayerMoveDesign = (ai, player) => {
    ai.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}

export const setAiMoveDesign = (ai, player) => {
    player.getGameboard().getNode().querySelector('.x-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.y-axis').classList.remove('low-opacity');
    player.getGameboard().getNode().querySelector('.board').classList.remove('low-opacity');
    ai.getGameboard().getNode().querySelector('.x-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.y-axis').classList.add('low-opacity');
    ai.getGameboard().getNode().querySelector('.board').classList.add('low-opacity');
}