import { game } from "..";
import { removeChilds } from "../helper/helper";
import { getRandomCell } from "../views/nodes/ship";
import { Timer } from "./elements/templates";


export const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;
    let timer = Timer();
    document.querySelector('.timer').appendChild(timer.getSvg());

    const setAiSpeedOfTought = (cells) => {
        aiSpeedOfTought = setTimeout(() => {
            game.gameHandler.takeHit(getRandomCell(cells));
            setTimeBetweenMoves(1000);
        }, 1000);
    }

    const setTimeBetweenMoves = (timeout) => {
        timeBetweenMoves = setTimeout(() => {
            game.gameHandler.switchMove();
        }, timeout);
    }

    const setTimeOfTheMove = () => {
        timer.view();
        timeOfTheMove = setInterval(() => {
            game.gameHandler.switchMove();
        }, 15000);
    }

    const reset = () => {
        timer.reset();
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearInterval(timeOfTheMove);
    }

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset }
}