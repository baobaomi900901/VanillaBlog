import {
    gsap
} from 'gsap'
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from 'lottie-web';

// bottom ball + text
gsap.set(".takeToMeText", {
    y: 52,
    rotationX: 0
});

gsap.set(".takeToMeText2", {
    y: 32,
    rotationX: -90
});

let mouseenterTrem = true
let mouseoutTrem = false
let takeToMeHot = document.querySelector('.takeToMeHot')

const blueBall = lottie.loadAnimation({
    container: document.querySelector('.lottie'), //渲染位置
    renderer: 'svg', // 形式 svg or cavans
    loop: false, // 是否重复
    path: '/data.json', // 动画资源
    autoplay: false // 初始化播放 or 停止
})

// 动画结束事件
blueBall.onComplete = function () {
    blueBall.stop() // 停止动画
    console.log("onComplete");
}

takeToMeHot.addEventListener('mouseenter', function () {
    if (mouseenterTrem) {
        blueBall.play()
        // console.log("mouseenter");
        gsap.fromTo('.takeToMeText', 0.2, {
            y: 52,
            rotationX: 0
        }, {
            y: 40,
            rotationX: 90,
        });
        gsap.to(".takeToMeText2", 0.2, {
            y: 24,
            rotationX: 0,
            delay: 0.15,
            onComplete: function () {
                mouseoutTrem = true
            }
        });
    }
    mouseenterTrem = false
})

takeToMeHot.addEventListener('mouseout', function () {
    if (mouseoutTrem) {
        gsap.to(".takeToMeText2", 0.2, {
            y: 32,
            rotationX: -90
        });
        gsap.to(".takeToMeText", 0.2, {
            y: 52,
            rotationX: 0,
            delay: 0.15,
            onComplete: function () {
                mouseenterTrem = true
            }
        });
    }
    mouseoutTrem = false
})

// 起始和page1
setTimeout(() => {
    (function moveHidden() {
        let StartAnimation = document.querySelector('.StartAnimation')
        StartAnimation.classList.remove('hidden')
        let app = document.querySelector('#app')
        app.classList.remove('hidden')
    }())
    // startAnime()
    var allAnimeLine = gsap.timeline({});
    allAnimeLine.add(StartPageLine,{}); 
    allAnimeLine.add(homePage1Line,'-=3');

    // overflow-auto
}, 1000)

// 起始动画
// function a() {
    let SATextHeadEnt = EnterAnime("SATextHead",0.4)
    let SATextFooterEnt = EnterAnime("SATextFooter",0.4)
    let t1Ent = EnterAnime("t1",0.2,null,0.4)
    let t1Out = outAnime("t1",0.2,null,0.4)
    let t2Ent = EnterAnime("t2",0.2,null,0.4)
    let t2Out = outAnime("t2",0.2,null,0.4)
    let t3Ent = EnterAnime("t3",0.2,null,0.4)
    let t3Out = outAnime("t3",0.2,null,0.4)
    let t4Ent = EnterAnime("t4",0.2,null,0.4)
    let t4Out = outAnime("t4",0.2,null,0.4)
    let t5Ent = EnterAnime("t5",0.2,null,0.4)
    let t5Out = outAnime("t5",0.2,null,0.4)
    let t6Ent = EnterAnime("t6",0.2,null,0.4)
    let t6Out = outAnime("t6",0.2,null,0.4)
    let SATextHeadOut = outAnime("SATextHead",0.2)
    let SATextFooterOut = outAnime("SATextFooter",0.2)

    var StartPageLine = gsap.timeline({
        delay: 2
    });

    StartPageLine.add(SATextHeadEnt);
    StartPageLine.add(SATextFooterEnt,0.2);
    StartPageLine.add(t1Ent);
    StartPageLine.add(t1Out);
    StartPageLine.add(t2Ent);
    StartPageLine.add(t2Out);
    StartPageLine.add(t3Ent);
    StartPageLine.add(t3Out);
    StartPageLine.add(t4Ent);
    StartPageLine.add(t4Out);
    StartPageLine.add(t5Ent);
    StartPageLine.add(t5Out);
    StartPageLine.add(t6Ent);
    StartPageLine.add(t6Out);
    StartPageLine.add(SATextHeadOut);
    StartPageLine.add(SATextFooterOut);
    StartPageLine.to(".StartPage", {
        opacity: 0,
        duration: 2,
        onComplete: function () {
            let StartPage = document.querySelector('.StartPage')
            StartPage.classList.add('hidden')
            console.log("StartPage");
        }
    })

// }

// homePage-1-Anime

    let logo = gsap.fromTo('#logo', {
        x: -20,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.5
    })

    let navbar = gsap.fromTo('.navBarItem', {
        x: 10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        // 从最后一个元素开始
        stagger: -0.05
    })


    let leftMenuBox = gsap.fromTo('#leftMenuBox', {
        transformOrigin: 'left',
        scaleX: 0,
        opacity: 0,
    }, {

        scaleX: 1,
        opacity: 1,
        duration: 0.5,
    })

    let leftimgbox = gsap.fromTo('#leftimgbox', {
        transformOrigin: 'left',
        scaleX: 0,
        opacity: 0,
    }, {

        scaleX: 1,
        opacity: 1,
        duration: 0.5,
    })

    let leftimg = gsap.fromTo('.leftimg', {
        transformOrigin: 'right',
        scale: 1.2,
        opacity: 0,
    }, {
        scale: 1.05,
        opacity: 1,
        duration: 1.2,
        ease: "none"
        // ease: "elastic.out(1, 1)",
    })

    let HomePageContentHead = gsap.fromTo('#HomePageContentHead', {
        transformOrigin: 'left',
        scaleX: 0,
        opacity: 0,
    }, {

        scaleX: 1,
        opacity: 1,
        duration: 0.8,
    })

    let menu = gsap.fromTo('.menu', {
        x: -20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
    })

    let menuItem = gsap.fromTo('.menuItem', {
        x: -20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1
    })

    let aboutMeBox = gsap.fromTo('#aboutMeBox', {
        transformOrigin: 'left',
        scaleX: 0,
        opacity: 0,
    }, {

        scaleX: 1,
        opacity: 1,
        duration: 0.5,
    })

    let aboutLine = gsap.fromTo('#aboutLine', {
        transformOrigin: 'left',
        scaleX: 0,
        opacity: 0,
    }, {

        scaleX: 1,
        opacity: 1,
        duration: 0.5,
    })

    let hbimg = gsap.fromTo('.hbimg', {
        transformOrigin: 'left',
        scale: 1.2,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "none"
        // ease: "elastic.out(1, 1)",
    })

    let mark = gsap.fromTo('.mark', {
        transformOrigin: 'right',
        scaleX: 1,
        opacity: 1
    }, {
        scaleX: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0,
        onComplete: function () {
            // console.log("mark");
        }
    })

    let welcome = EnterAnime("welcome")
    let myname1 = EnterAnime("myname1", 0.5, 0.02, null, 60)
    let myname2 = EnterAnime("myname2", 0.5, 0.02, null, 60)
    let myname3 = EnterAnime("myname3", 0.5, 0.02, null, 60)
    let aboutMe = EnterAnime("aboutMe", 0.5, 0.02)
    let aboutText = EnterAnime("aboutText", 0.4, 0.01)
    let dribbbleLink = EnterAnime("dribbbleLink", 0.5, 0.01)
    let myCoords = EnterAnime("myCoords", 0.5, 0.01)

    let homePage1Line = gsap.timeline({
        delay: 1,
        onComplete:function () {
            console.log('homePage1');
            document.querySelector('body').classList.remove('overflow-hidden')
        }
    });

    homePage1Line.add(logo, 1);
    homePage1Line.add(navbar, 1);
    homePage1Line.add(leftMenuBox, 0);
    homePage1Line.add(leftimgbox, 0);
    homePage1Line.add(leftimg, 1.2);
    homePage1Line.add(HomePageContentHead, 0.4);
    homePage1Line.add(menu, 1.4);
    homePage1Line.add(menuItem, 1.6);
    homePage1Line.add(welcome, 1.5); // "-=0.8"
    homePage1Line.add(myname1, 1.6); // "-=0.4"
    homePage1Line.add(myname2, 1.7); // "-=0.4"
    homePage1Line.add(myname3, 1.8); // "-=0.4"
    homePage1Line.add(aboutMeBox, 1);
    homePage1Line.add(aboutLine, 1.4);
    homePage1Line.add(mark, 1.4);
    homePage1Line.add(hbimg, 1.2);
    homePage1Line.add(aboutMe, 1.9);
    homePage1Line.add(aboutText, 2);
    homePage1Line.add(dribbbleLink,2.1);
    homePage1Line.add(myCoords, 2.2);


// 提取文字拆分
function textSplit(el, sc) {
    let element = document.getElementById(el)
    let elArr = [...element.textContent]
    // 提取文字
    elArr.reduce(function (pre, cur, index) {
        if (pre === index) {
            element.innerHTML = '';
        }
        // 创建一个 span
        let span = document.createElement('span');
        // span 内容等于 cur
        span.innerHTML = cur;
        // 处理空格
        if (cur == " ") {
            span.innerHTML = `&nbsp;`
        } else {
            span.innerHTML = cur;
        }
        element.appendChild(span).classList.add(sc, 'inline-block');
    }, 0);
}

// 文字入场动画
function EnterAnime(el, duration = 0.75, stagger = 0.01, delayTime = 0, y = 10) {
    // 文字类, 动画中使用
    let spanclass = `${el}Span`
    textSplit(el, spanclass)
    // 动画
    let anime = gsap.fromTo(
        `.${spanclass}`, {
            transformOrigin: 'bottom  center',
            y: `${y}`,
            opacity: 0,
            rotateX: 90,
        }, {
            y: 0,
            duration: `${duration}`,
            stagger: `${stagger}`,
            delay: `${delayTime}`,
            opacity: 1,
            rotateX: 0,
            ease: "none",
            // ease: "elastic.out(1, 0.75)"
        }
    );
    return anime
}

// 文字退场动画
function outAnime(el, duration = 0.5, stagger = 0.01, delayTime = 0) {
    let element = document.querySelectorAll(`.${el}Span`)
    if (element.length) {
        return animeOut()
    } else {
        let spanclass = `${el}Span`
        textSplit(el, spanclass)
        return animeOut()
    }

    function animeOut() {
        let spanclass = `${el}Span`
        let anime = gsap.to(`.${spanclass}`, {
            transformOrigin: 'top  center',
            y: -0,
            duration: `${duration}`,
            stagger: `${stagger}`,
            delay: `${delayTime}`,
            opacity: 0,
            rotateX: 90,
            // ease: "elastic.out(1, 0.75)",
        })
        return anime
    }
}



// 内容滚轴


// 内容文字入场动画
function contentEnterAnime(el, durationTime = 0.3, staggerTime = 0.01, delayTime = 0, yValue = 10) {
    // 文字类, 动画中使用
    let spanclass = `${el}Span`
    textSplit2(el, spanclass)
    // 动画
    let anime = gsap.fromTo(
        `.${spanclass}`, {
            transformOrigin: 'bottom  center',
            y: yValue,
            opacity: 0,
            rotateX: 90,
        }, {
            y: 0,
            duration: durationTime,
            stagger: staggerTime,
            delay: delayTime,
            opacity: 1,
            rotateX: 0,
            ease: "none",
            // ease: "elastic.out(1, 0.75)"
        }
    );
    return anime
}

// 提取文字拆分
function textSplit2(el, sc) {
    let element = document.getElementById(el)
    let elArr = [...element.textContent]
    // 提取文字
    elArr.reduce(function (pre, cur, index) {
        if (pre === index) {
            element.innerHTML = '';
        }
        // 创建一个 span
        let span = document.createElement('span');
        // span 内容等于 cur
        span.innerHTML = cur;
        // 处理空格
        if (cur == " ") {
            span.innerHTML = `&nbsp;`
        } else {
            span.innerHTML = cur;
        }
        element.appendChild(span).classList.add(sc, 'inline-block');
    }, 0);
}

let contentOne1 = contentEnterAnime("el-content-one-1")
let contentOne2 = contentEnterAnime("el-content-one-2")
let contentOne3 = contentEnterAnime("el-content-one-3", 0.2)
let contentOne4 = contentEnterAnime("el-content-one-4", 0.2)
let contentOne5 = contentEnterAnime("el-content-one-5", 0.2)

var contentOneTimeLine = gsap.timeline({
    scrollTrigger: {
        // markers: "true", // 启用标尺
        trigger: '#aboutMeBox',
        start: "start center",
        // end: "+=400",
        toggleActions: 'play play resume pause', //restart
    }
});

contentOneTimeLine.add(contentOne1)
contentOneTimeLine.add(contentOne2)
contentOneTimeLine.add(contentOne3, "-=0.5")
contentOneTimeLine.add(contentOne4, "-=0.6")
contentOneTimeLine.add(contentOne5, "-=0.6")

// let twoTest = gsap.fromTo("#el-content-two", {
//     x: -40,
//     opacity: 0
// }, {
//     x: 0,
//     opacity: 1
// })

let contentTwo1 = contentEnterAnime("el-content-two-1")
let contentTwo2 = contentEnterAnime("el-content-two-2")

let contentTwo3 = contentEnterAnime("el-content-two-3")
let contentTwo4 = contentEnterAnime("el-content-two-4")
let contentTwo5 = contentLineAnime("el-content-two-5")

let contentTwo6 = contentEnterAnime("el-content-two-6")
let contentTwo7 = contentEnterAnime("el-content-two-7")
let contentTwo8 = contentLineAnime("el-content-two-8")

let contentTwo9 = contentEnterAnime("el-content-two-9")
let contentTwo10 = contentEnterAnime("el-content-two-10")
let contentTwo11 = contentLineAnime("el-content-two-11")

let contentTwo12 = contentEnterAnime("el-content-two-12")
let contentTwo13 = contentEnterAnime("el-content-two-13")
let contentTwo14 = contentEnterAnime("el-content-two-14")
let contentTwo15 = contentEnterAnime("el-content-two-15")
let contentTwo16 = contentEnterAnime("el-content-two-16")
let contentTwo17 = contentEnterAnime("el-content-two-17")

let contentTwo18 = contentEnterAnime("el-content-two-18")



var contentTwoTimeLine = gsap.timeline({
    // delay: 1,
    scrollTrigger: {
        // markers: "true", // 启用标尺
        trigger: '#aboutMeBox',
        start: "start center",
        // end: "+=400",
        toggleActions: 'play play resume pause', //restart
    },
});

contentTwoTimeLine.add(contentTwo1)
contentTwoTimeLine.add(contentTwo2, 0.2)

contentTwoTimeLine.add(contentTwo3, 0.3)
contentTwoTimeLine.add(contentTwo4, 0.6)
contentTwoTimeLine.add(contentTwo5, 0.4)

contentTwoTimeLine.add(contentTwo6, 0.5)
contentTwoTimeLine.add(contentTwo7, 0.8)
contentTwoTimeLine.add(contentTwo8, 0.6)

contentTwoTimeLine.add(contentTwo9, 0.7)
contentTwoTimeLine.add(contentTwo10, 1)
contentTwoTimeLine.add(contentTwo11, 0.8)

contentTwoTimeLine.add(contentTwo12, 0.8)
contentTwoTimeLine.add(contentTwo13, 1)
contentTwoTimeLine.add(contentTwo14, 1.2)
contentTwoTimeLine.add(contentTwo15, 1.4)
contentTwoTimeLine.add(contentTwo16, 1.6)
contentTwoTimeLine.add(contentTwo17, 1.8)
contentTwoTimeLine.add(contentTwo18, 1.8)


let contentThree1 = contentEnterAnime("el-content-three-1")
let contentThree2 = contentEnterAnime("el-content-three-2")
let contentThree3 = contentEnterAnime("el-content-three-3")
let contentThree4 = contentEnterAnime("el-content-three-4")

let contentThree5 = contentEnterAnime("el-content-three-5")
let contentThree6 = contentEnterAnime("el-content-three-6")
let contentThree7 = contentLineAnime("el-content-three-7")

let contentThree8 = contentEnterAnime("el-content-three-8")
let contentThree9 = contentEnterAnime("el-content-three-9")
let contentThree10 = contentLineAnime("el-content-three-10")

let contentThree11 = contentEnterAnime("el-content-three-11")
let contentThree12 = contentEnterAnime("el-content-three-12")
let contentThree13 = contentLineAnime("el-content-three-13")

let contentThree14 = contentEnterAnime("el-content-three-14")
let contentThree15 = contentEnterAnime("el-content-three-15")
let contentThree16 = contentLineAnime("el-content-three-16")

let contentThree17 = contentEnterAnime("el-content-three-17")
let contentThree18 = contentEnterAnime("el-content-three-18")
let contentThree19 = contentLineAnime("el-content-three-19")


var contentThreeTimeLine = gsap.timeline({
    // delay: 0.5,
    scrollTrigger: {
        // markers: "true", // 启用标尺
        trigger: '#el-content-two',
        start: "top center",
        // end: "+=400",
        toggleActions: 'play play play pause', //restart
    }
});


contentThreeTimeLine.add(contentThree1)
contentThreeTimeLine.add(contentThree2, 0.2)
contentThreeTimeLine.add(contentThree3, 0.4)
contentThreeTimeLine.add(contentThree4, 0.6)

contentThreeTimeLine.add(contentThree5, 0.6)
contentThreeTimeLine.add(contentThree6, 0.9)
contentThreeTimeLine.add(contentThree7, 0.7)

contentThreeTimeLine.add(contentThree8, 0.8)
contentThreeTimeLine.add(contentThree9, 1.1)
contentThreeTimeLine.add(contentThree10, 1.3)

contentThreeTimeLine.add(contentThree11, 1)
contentThreeTimeLine.add(contentThree12, 1.3)
contentThreeTimeLine.add(contentThree13, 1.5)

contentThreeTimeLine.add(contentThree14, 1.2)
contentThreeTimeLine.add(contentThree15, 1.5)
contentThreeTimeLine.add(contentThree16, 1.7)

contentThreeTimeLine.add(contentThree17, 1.4)
contentThreeTimeLine.add(contentThree18, 1.7)
contentThreeTimeLine.add(contentThree19, 1.9)



let contentFour1 = contentEnterAnime("el-content-four-1")
let contentFour2 = contentEnterAnime("el-content-four-2")
let contentFour3 = contentEnterAnime("el-content-four-3")

let contentFour4 = contentEnterAnime("el-content-four-4")
let contentFour5 = contentEnterAnime("el-content-four-5")
let contentFour6 = contentLineAnime("el-content-four-6")

let contentFour7 = contentEnterAnime("el-content-four-7")
let contentFour8 = contentEnterAnime("el-content-four-8")
let contentFour9 = contentLineAnime("el-content-four-9")

let contentFour10 = contentEnterAnime("el-content-four-10")
let contentFour11 = contentEnterAnime("el-content-four-11")
let contentFour12 = contentLineAnime("el-content-four-12")

let contentFour13 = contentEnterAnime("el-content-four-13")
let contentFour14 = contentEnterAnime("el-content-four-14")
let contentFour15 = contentLineAnime("el-content-four-15")

let contentFour16 = contentEnterAnime("el-content-four-16")
let contentFour17 = contentEnterAnime("el-content-four-17")
let contentFour18 = contentLineAnime("el-content-four-18")

let contentFour19 = contentEnterAnime("el-content-four-19")

let blueBallBox = gsap.fromTo('#blueBallBox',{
    y:40,
    opacity:0
},{
    y:0,
    opacity:1
})

var contentFourTimeLine = gsap.timeline({
    // delay: 0.5,
    scrollTrigger: {
        // markers: "true", // 启用标尺
        trigger: '#el-content-three',
        start: "top center",
        // end: "+=400",
        toggleActions: 'play play play pause', //restart
    }
});


contentFourTimeLine.add(contentFour1)
contentFourTimeLine.add(contentFour2, 0.2)
contentFourTimeLine.add(contentFour3, 0.4)

contentFourTimeLine.add(contentFour4, 0.6)
contentFourTimeLine.add(contentFour5, 0.9)
contentFourTimeLine.add(contentFour6, 1.1)

contentFourTimeLine.add(contentFour7, 0.8)
contentFourTimeLine.add(contentFour8, 1.1)
contentFourTimeLine.add(contentFour9, 1.3)

contentFourTimeLine.add(contentFour10, 1)
contentFourTimeLine.add(contentFour11, 1.3)
contentFourTimeLine.add(contentFour12, 1.5)

contentFourTimeLine.add(contentFour13, 1.2)
contentFourTimeLine.add(contentFour14, 1.5)
contentFourTimeLine.add(contentFour15, 1.7)

contentFourTimeLine.add(contentFour16, 1.4)
contentFourTimeLine.add(contentFour17, 1.7)
contentFourTimeLine.add(contentFour18, 1.9)

contentFourTimeLine.add(contentFour19, 1.6)
contentFourTimeLine.add(blueBallBox, 2)

// menu


let testEl = document.getElementById('el-content-three-5')

testEl.addEventListener('mouseenter',function() {
    console.log("mouseenter");
})


function contentLineAnime(el) {
    let element = document.getElementById(el)
    // console.log("el->", element);
    let anime = gsap.fromTo(element, {
        transformOrigin: 'left',
        scaleX: 0,
        // opacity: 0
    }, {
        scaleX: 1,
        // opacity: 1,
        duration: 0.3,
    })
    return anime
}

// document.getElementById()
// contentLineAnime("el-content-two-5")

// gsap.fromTo(".el-content-one", {
//     x: -40,
//     opacity: 0
// }, {
//     x: 0,
//     opacity: 1,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         markers: "true", // 启用标尺
//         trigger: '#aboutMeBox',
//         start: "start center",
//         // end: "+=400",
//         toggleActions: 'play play resume pause', //restart
//     }
// })