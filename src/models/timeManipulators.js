import { game } from "..";
import { getRandomCell } from "../views/nodes/ship";


export const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;

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
        timeOfTheMove = setInterval(() => {
            console.log('dwdwd')
            game.gameHandler.switchMove();
        }, 3000);
    }

    const reset = () => {
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearInterval(timeOfTheMove);
    }

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset }
}