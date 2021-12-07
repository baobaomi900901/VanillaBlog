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
// import * as THREE from 'three';
// import "./images.js";
import lottie from 'lottie-web';
// import {
//     blues
// } from "./images.js";
// import {preFetchImgArray, preloadImgArray} from "./preload-img.js";



let takeToMe = document.querySelector('.takeToMe')
let takeToMeHot = document.querySelector('.takeToMeHot')


// 加载 blues 图片
// const imageUrls = Object.values(blues)
// let loadImages = []
// preloadImgArray(imageUrls).then(console.log)
// preFetchImgArray(imageUrls).then(imgs => loadImages = imgs)

var bbm = 0
let mouse = true;

// console.log(blues);

// function createImgElm(url) {
//     const img = new Image()
//     img.src = url
//     img.className = "takeToMe w-80 h-80 z-50"
//     img.style.display = "none"
//     return img
// }

// function createImgElms(urls) {
//     return urls.map(url => createImgElm(url))
// }

// const imgElms = createImgElms(imageUrls)
// document.body.querySelector('.takeToMeBox').append(...imgElms)
// imgElms[0].style.display = "inline-block"

// console.log(LottieJson)
const a  = lottie.loadAnimation({
    container: document.querySelector('.lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/data7.json'
})

a.stop()

console.log(a);

// takeToMeHot.addEventListener('mouseenter', function () {
//     // a.stop()
//     if (mouse) {
//         // (function animloop(time) {
//         //     myTimer();
//         //     // let v = `./src/assets/img/listiimgs/blue-${bbm}.png`
//         //     // let v = blues.blue[`${bbm}`]
//         //     // let v = blues[`blue${bbm}`]
//         //     // let b = `blues.blue${bbm}`
//         //     // let c = loadImages[bbm]
//         //     // // console.log("v->",v);
//         //     // // console.log("b->",b);
//         //     // console.log("c->", c);
//         //     // takeToMe.src = c;

//         //     // imgElms[bbm].style.display = "inline-block"
//         //     // imgElms.forEach((elm, i) => elm.style.display = i === bbm ? "inline-block" : "none")

//         //     // //  类似 setInterval, 默认 60 刷新
//         //     // let raf = requestAnimationFrame(animloop);
//         //     if (bbm > 72) {
//         //         //  类似 clearInterval
//         //         // cancelAnimationFrame(raf)
//         //         // 重置动画帧
//         //         mouse = true
//         //         // 重置动画帧
//         //         bbm = 0
//         //     }
//         // })();
//         a.play()
//     }

//     function myTimer() {
//         bbm++
//         // 动画播放标签
//         mouse = false;
//     }
// })

export {
    takeToMeHot
}