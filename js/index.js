import { contextArr } from "../constant/text.js";
import { getRandomColor, } from "../utils/a.js";

let mask = document.getElementById("mask");
let fluid_area = document.querySelectorAll(".fluid-area");
let fluidAreaBlockParams
window.onload = () => {
    contextArr.forEach(function (item, index) {
        const divEle = document.createElement('div');
        divEle.className = 'fluid-area-block' + index;
        divEle.textContent = item;
        divEle.style.backgroundColor = getRandomColor(0.1);
        divEle.style.color = getRandomColor();
        fluid_area[0].appendChild(divEle);

        let fluidAreaBlock = document.querySelector('.fluid-area-block' + index);
        function onclickfluidAreaBlock() {
            fluidAreaBlock.style.display = "block";
            fluidAreaBlock.style.height = "60vw";
            fluidAreaBlock.style.width = "60vw";
            fluidAreaBlock.style.overflowY = "auto";
            fluidAreaBlock.style.position = "absolute";
            fluidAreaBlock.style.top = "50%";
            fluidAreaBlock.style.left = "50%";
            fluidAreaBlock.style.transform = "translate(-50%,-50%)";
            fluidAreaBlock.style.zIndex = "1002";
            fluidAreaBlock.style.color = "#000";
            mask.style.display = "block";
            fluidAreaBlockParams=fluidAreaBlock
        }
        fluidAreaBlock.addEventListener("click", onclickfluidAreaBlock);
    })
};
function maskOnclick(fluidAreaBlock) {
    if(fluidAreaBlock){
        mask.style.display = "none";
        fluidAreaBlock.style.display = "-webkit-box";
        fluidAreaBlock.style.height = "auto";
        fluidAreaBlock.style.width = "auto";
        fluidAreaBlock.style.overflowY = "hidden";
        fluidAreaBlock.style.position = "static";
        fluidAreaBlock.style.transform = "scale(1)";
        fluidAreaBlock.style.color =getRandomColor();
        fluidAreaBlock.style.zIndex = "auto";
    }
}
mask.addEventListener("click",function(){
    maskOnclick(fluidAreaBlockParams)
} );

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