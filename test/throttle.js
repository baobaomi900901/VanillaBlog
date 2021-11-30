// 防抖
const throttle = (func, delay) => {
    let prev = Date.now()
    console.log(func, delay);
    return function (...args) {
        let now = Date.now()
        if (now - prev >= delay) {
            func.apply(this, args)
            prev = Date.now();
        }
    }
}

function mouseenter() {
    console.log("mouseenter");
    gsap.fromTo('.takeToMeText', 0.2, {
        y: 0,
        rotationX: 0
    }, {
        y: -12,
        rotationX: 90,
    });
    gsap.to(".takeToMeText2", 0.2, {
        y: 0,
        rotationX: 0,
        delay: 0.15
    });
}

function mouseout() {
    console.log("mouseout");
    gsap.to(".takeToMeText2", 0.2, {
        y: 12,
        rotationX: -90
    });
    gsap.to(".takeToMeText", 0.2, {
        y: 0,
        rotationX: 0,
        delay: 0.15
    });
}


// 接收
let mouseenterAnimeFn = throttle(mouseenter,550)
let mouseoutAnimeFn = throttle(mouseout,550)

takeToMeHot.addEventListener('mouseenter',mouseenterAnimeFn)
takeToMeHot.addEventListener('mouseout', mouseoutAnimeFn)
