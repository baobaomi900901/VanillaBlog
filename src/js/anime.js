// console.log(123);
// import { gsap } from 'gsap'

// let aboutme = document.querySelector('.aboutme')
// let leftimg = document.querySelector('.leftimg')

// let aboutmeh = aboutme.clientHeight
// leftimg.style.height = `${aboutmeh}px`

// window.addEventListener('resize', () => { 
//     let h = aboutme.clientHeight
//     leftimg.style.height = `${h}px`
// });

import "./images.js";
import {
    blues
} from "./images.js";

let takeToMe = document.querySelector('.takeToMe')
let takeToMeBox = document.querySelector('.takeToMeBox')
let takeToMeHot = document.querySelector('.takeToMeHot')

var bbm = 0
let mouse = true;

console.log(blues);

takeToMeHot.addEventListener('mouseenter', function () {
    if (mouse) {
        (function animloop(time) {
            myTimer();
            // let v = `./src/assets/img/listiimgs/blue-${bbm}.png`
            // let v = blues.blue[`${bbm}`]
            let v = blues[`blue${bbm}`]
            console.log("v", v);
            takeToMe.src = v;
            //  类似 setInterval, 默认 60 刷新
            let raf = requestAnimationFrame(animloop);
            if (bbm > 72) {
                //  类似 clearInterval
                cancelAnimationFrame(raf)
                // 重置动画帧
                mouse = true
                // 重置动画帧
                bbm = 0
            }
        })();
    }

    function myTimer() {
        bbm++
        // 动画播放标签
        mouse = false;
    }
})

let array = []

// for (let i = 0; i < 74; i++) {
//     // console.log(`import blue${i} from "../assets/img/listiimgs/blue-${i}.png";`);
//     array.push(`blue${i}`)
// }

console.log(array);

export {
    takeToMeHot
}