import { contextArr } from "../constant/text.js";
import { getRandomColor, getRandomWidthAndHeight } from "../utils/a.js";

let fluid_area = document.querySelectorAll(".fluid-area");
window.onload = () => {
    contextArr.forEach((item, index) => {
        const divEle = document.createElement('div');
        divEle.className = 'fluid-area-block'
        divEle.textContent = item
        divEle.style.backgroundColor = getRandomColor(0.1);
        divEle.style.color = getRandomColor();
        fluid_area[0].appendChild(divEle);
    })
};