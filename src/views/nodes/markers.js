import { appendChilds, setAttributes } from "../../helper/helper";
import { CrossAttributes } from "../../models/elements/attributes";
import { Cross } from "../../models/elements/templates";
import { drawCross } from "../animations/markers";

export const createCrossSVG = () => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let leftLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let rightLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    appendChilds(svg, leftLine, rightLine);
    setAttributes(leftLine, CrossAttributes.line.concat(CrossAttributes.leftDiag));
    setAttributes(rightLine, CrossAttributes.line.concat(CrossAttributes.rightDiag));
    return svg;
}

export const viewCross = (svg) => {
    const animations = [
        drawCross(svg, 200, 'forwards', [{ strokeDashoffset: '5vh' }, { strokeDashoffset: '0vh' }])
    ]
    return animations;
}