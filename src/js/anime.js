// console.log(123);

let aboutme = document.querySelector('.aboutme')
let leftimg = document.querySelector('.leftimg')

let aboutmeh = aboutme.clientHeight
leftimg.style.height = `${aboutmeh}px`

// console.log(leftimg.clientHeight);

// console.log(aboutme.clientHeight);

// window.onresize = function () {
//     console.log(2333333);
// }

window.addEventListener('resize', () => { 
    let h = aboutme.clientHeight
    leftimg.style.height = `${h}px`
    console.log(aboutme.clientHeight);
    console.log(leftimg.clientHeight);
    console.log(2333);
});