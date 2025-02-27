import { contextArr } from "../constant/text.js";
import { getRandomColor, } from "../utils/a.js";

let view = document.getElementById("view");
let mask = document.getElementById("mask");
let fluid_area = document.querySelectorAll(".fluid-area");
window.onload = () => {
    contextArr.forEach((item, index) => {
        const divEle = document.createElement('div');
        divEle.className = 'fluid-area-block' + index;
        divEle.textContent = item;
        divEle.style.backgroundColor = getRandomColor(0.1);
        divEle.style.color = getRandomColor();
        fluid_area[0].appendChild(divEle);

        let fluidAreaBlock = document.querySelector('.fluid-area-block' + index);
        function onclickfluidAreaBlock() {
            fluidAreaBlock.style.overflowY = "auto";
            fluidAreaBlock.style.position = "absolute";
            fluidAreaBlock.style.top = "50%";
            fluidAreaBlock.style.left = "50%";
            fluidAreaBlock.style.transform = "translate(-50%,-50%) scale(2,2)";
            fluidAreaBlock.style.zIndex = "1002";
            mask.style.display = "block";
            view.style.overflowY = "hidden";
        }
        fluidAreaBlock.addEventListener("click", onclickfluidAreaBlock);
        function maskOnclick() {
            mask.style.display = "none";
            fluidAreaBlock.style.overflowY = "hidden";
            fluidAreaBlock.style.position = "static";
            fluidAreaBlock.style.transform = "";
            fluidAreaBlock.style.zIndex = "auto";
            view.style.overflowY = "auto";
        }
        mask.addEventListener("click", maskOnclick);
    })
};

let hospitalEle = document.querySelector(".hospital");
let isMove = false;  // 标记是否正在拖动
function onmousedownHospitalHandle(event) {
    hospitalEle.style.left = event.clientX - 30 + "px"
    hospitalEle.style.top = event.clientY - 30 + "px"
    isMove = true
}
function onmousemoveHospitalHandle(event) {
    if (isMove) {
        hospitalEle.style.left = event.clientX - 30 + "px"
        hospitalEle.style.top = event.clientY - 30 + "px"
    }
}
function onmouseupHospitalHandle() {
    isMove = false
    hospitalEle.style.left = "-30px"
    hospitalEle.style.top = "40%"
}
hospitalEle.addEventListener("mousedown", onmousedownHospitalHandle);
hospitalEle.addEventListener("mousemove", onmousemoveHospitalHandle);
hospitalEle.addEventListener("mouseup", onmouseupHospitalHandle);

// console.log(111);
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("First");
//     }, 1000);
//     resolve("first");
// }).then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Second");
//             resolve();
//         }, 4000);
//     });
// }).then(function () {
//     setTimeout(function () {
//         console.log("Third");
//     }, 3000);
// });