// 随机生成RGB颜色
export function getRandomColor(transparency = 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b},${transparency})`;
}
//获取随机宽高
export function getRandomWidthAndHeight() {
    const w = Math.floor((Math.random() + 0.2) * 180);
    const h = Math.floor(Math.random() * 500);
    return {
        w,
        h
    };
}