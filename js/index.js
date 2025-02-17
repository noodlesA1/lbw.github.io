import { contextArr } from "../constant/text";
import { getRandomColor } from "../utils/a";

const fluid_area = document.querySelectorAll("fluid-area");

window.onload = () => {
    contextArr.forEach((item, index) => {
        console.log(item);
        fluid_area.appendChild(`<div class="${fluid_area + index}">${item}</div>`);
        const fluid_area_block = document.querySelectorAll(`${fluid_area + index}`);
        fluid_area_block.style.backgroundColor = getRandomColor();
    })
};