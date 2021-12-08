import {
    gsap
} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import lottie from 'lottie-web'; 

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

const blueBall  = lottie.loadAnimation({
    container: document.querySelector('.lottie'), //渲染位置
    renderer: 'svg', // 形式 svg or cavans
    loop: false, // 是否重复
    path: '/data.json', // 动画资源
    autoplay: false // 初始化播放 or 停止
})

// 动画结束事件
blueBall.onComplete = function(){
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


setTimeout(() => {
    (function moveHidden() {
        let StartAnimation = document.querySelector('.StartAnimation')
        StartAnimation.classList.remove('hidden')
        let app = document.querySelector('#app')
        app.classList.remove('hidden')
    }())
    // startAnime()
    var allAnimeLine = gsap.timeline({});
    allAnimeLine.add(line); 
    allAnimeLine.add(homePage1);
}, 1000)

// 起始动画
// function a() {
    let SATextHeadEnt = EnterAnime("SATextHead")
    let SATextFooterEnt = EnterAnime("SATextFooter")
    let t1Ent = EnterAnime("t1")
    let t1Out = outAnime("t1")
    let t2Ent = EnterAnime("t2")
    let t2Out = outAnime("t2")
    let t3Ent = EnterAnime("t3")
    let t3Out = outAnime("t3")
    let t4Ent = EnterAnime("t4")
    let t4Out = outAnime("t4")
    let t5Ent = EnterAnime("t5")
    let t5Out = outAnime("t5")
    let t6Ent = EnterAnime("t6")
    let t6Out = outAnime("t6")
    let SATextHeadOut = outAnime("SATextHead")
    let SATextFooterOut = outAnime("SATextFooter")

    var line = gsap.timeline({
        delay: 2
    });

    line.add(SATextHeadEnt);
    line.add(SATextFooterEnt, "-=0.8");
    line.add(t1Ent, "-=0.5");
    line.add(t1Out);
    line.add(t2Ent);
    line.add(t2Out);
    line.add(t3Ent);
    line.add(t3Out);
    line.add(t4Ent);
    line.add(t4Out);
    line.add(t5Ent);
    line.add(t5Out);
    line.add(t6Ent);
    line.add(t6Out);
    line.add(SATextHeadOut);
    line.add(SATextFooterOut, "-=0.5");
    line.to(".StartPage", {
        opacity: 0,
        duration: 2,
        onComplete: function () {
            let StartPage = document.querySelector('.StartPage')
            StartPage.classList.add('hidden')
            console.log("end");
        }
    })

//     return line

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
        ease: "circ.inOut"
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
        scale: 1.05,
        opacity: 1,
        duration: 1.2,
        ease: "circ.inOut"
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
    let aboutText = EnterAnime("aboutText", 0.5, 0.01)
    let dribbbleLink = EnterAnime("dribbbleLink", 0.5, 0.01)
    let myCoords = EnterAnime("myCoords", 0.5, 0.01)

    let homePage1 = gsap.timeline({
        delay: 1
    });

    homePage1.add(logo, 1);
    homePage1.add(navbar, 1);
    homePage1.add(leftMenuBox, 0);
    homePage1.add(leftimgbox, 0);
    homePage1.add(leftimg, 1.2);
    homePage1.add(HomePageContentHead, 0.4);
    homePage1.add(menu, 1.4);
    homePage1.add(menuItem, 1.6);
    homePage1.add(welcome, 1.5); // "-=0.8"
    homePage1.add(myname1, 1.6); // "-=0.4"
    homePage1.add(myname2, 1.7); // "-=0.4"
    homePage1.add(myname3, 1.8); // "-=0.4"
    homePage1.add(aboutMeBox, 1);
    homePage1.add(aboutLine, 1.4);
    homePage1.add(mark, 1.4);
    homePage1.add(hbimg, 1.2);
    homePage1.add(aboutMe, 1.9);
    homePage1.add(aboutText, 2);
    homePage1.add(dribbbleLink,2.1);
    homePage1.add(myCoords, 2.2);


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
            ease: "circ.out",
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

let el = document.querySelectorAll('nav')

// navmenu[0].style.color = "red"
// navmenu.forEach(element => {
//     element.style.color = "red"
// });

console.log(el);


// gsap.fromTo(".homePage2", {
// },{
//     x: 400,
//     rotation: 360,
//     duration: 1,
//     color: "#020202",
//     // backgroundColor: "blue",
//     scrollTrigger: {
//         markers: "true", // 启用标尺
//         trigger: '.homePage2',
//         start: "start center",
//         end: "+=200",
//         toggleActions: 'play pause resume pause', //restart
//     }
// })