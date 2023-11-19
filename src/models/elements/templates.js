import { createCrossSVG, viewCross } from "../../views/nodes/markers";
import { createTimerSVG, viewTimer } from "../../views/nodes/timer";

export const Template = (svg) => {
    let animations;
    const getSvg = () => {
        return svg;
    }

    const reset = () => {
        animations.forEach(animation => {
            animation.finish();
        })
    }

    const setAnimations = (val) => {
        animations = val;
    }

    return { setAnimations, getSvg, animations, reset };
}

export const Cross = () => {
    const prototype = Template(createCrossSVG());

    const view = () => {
        prototype.setAnimations(viewCross(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}

export const Timer = () => {
    const prototype = Template(createTimerSVG());

    const view = () => {
        prototype.setAnimations(viewTimer(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}