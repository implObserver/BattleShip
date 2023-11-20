import { game } from "../..";
import { removeHidden, setHidden, setLowOpacity, setNormalOpacity } from "../animations/changeVisible";

export const hiddenInterfaceBeforeStartPlay = () => {
    setHidden(document.querySelector('.play'))
    setHidden(document.querySelector('.footer'))
    setHidden(document.querySelector('.tips'))
    removeHidden(document.querySelector('.exit'))
}

export const viewInterfaceAfterEndGame = () => {
    removeHidden(document.querySelector('.play'))
    removeHidden(document.querySelector('.footer'))
    removeHidden(document.querySelector('.tips'))
    setHidden(document.querySelector('.exit'))
}

export const setPlayerMoveDesign = (ai, player) => {
    setNormalOpacity(ai.getGameboard().getNode().querySelector('.x-axis'))
    setNormalOpacity(ai.getGameboard().getNode().querySelector('.y-axis'))
    setNormalOpacity(ai.getGameboard().getNode().querySelector('.board'))
    setLowOpacity(player.getGameboard().getNode().querySelector('.x-axis'))
    setLowOpacity(player.getGameboard().getNode().querySelector('.y-axis'))
    setLowOpacity(player.getGameboard().getNode().querySelector('.board'))
}

export const setAiMoveDesign = (ai, player) => {
    setNormalOpacity(player.getGameboard().getNode().querySelector('.x-axis'))
    setNormalOpacity(player.getGameboard().getNode().querySelector('.y-axis'))
    setNormalOpacity(player.getGameboard().getNode().querySelector('.board'))
    setLowOpacity(ai.getGameboard().getNode().querySelector('.x-axis'))
    setLowOpacity(ai.getGameboard().getNode().querySelector('.y-axis'))
    setLowOpacity(ai.getGameboard().getNode().querySelector('.board'))
}