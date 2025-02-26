import { contextArr } from "../constant/text.js";
import { getRandomColor, } from "../utils/a.js";

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
let hospitalEle = document.querySelector(".hospital");
console.log(hospitalEle.clientLeft, hospitalEle.clientTop);
let isMove = false;  // 标记是否正在拖动
function onmousedownHospitalHandle(event) {
    hospitalEle.style.left = event.clientX - 30 + "px"
    hospitalEle.style.top = event.clientY - 30 + "px"
    isMove = true
}
function onmousemoveHospitalHandle(event) {
    if (isMove) {
        console.log(event.clientX, event.clientY);
        hospitalEle.style.left = event.clientX - 30 + "px"
        hospitalEle.style.top = event.clientY - 30 + "px"
    }
}
function onmouseupHospitalHandle() {
    isMove = false
    hospitalEle.style.left =-30+"px"
    hospitalEle.style.top = 40+"%"
}
hospitalEle.addEventListener("mousedown", onmousedownHospitalHandle);
hospitalEle.addEventListener("mousemove", onmousemoveHospitalHandle);
hospitalEle.addEventListener("mouseup", onmouseupHospitalHandle);

console.log(111);
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
    }, 1000);
    resolve("first");
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});