setTimeout(() => {
    (function moveHidden(params) {
        let StartAnimation = document.querySelector('.StartAnimation')
        StartAnimation.classList.remove('hidden')
    }())
    startAnime()
}, 2000)

function startAnime(params) {
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

    var line = new TimelineMax({
        delay: 2
    });
    line.add(SATextHeadEnt);
    line.add(SATextFooterEnt, 0.4);
    line.add(t1Ent, 0.6);
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
    // line.add(SATextHeadOut);
    // line.add(SATextFooterOut,"-=0.5");
}



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
        element.appendChild(span).classList.add(sc);
    }, 0);
}

// 文字入场动画
function EnterAnime(el, duration = 0.5) {
    // 文字类, 动画中使用
    let spanclass = `${el}Span`
    textSplit(el, spanclass)
    // 动画
    let anime = gsap.fromTo(
        `.${spanclass}`,
        {
            transformOrigin: 'bottom  center',
            y: 10,
            opacity: 0,
            rotateX: 90,
        }, {
            y: 0,
            duration: `${duration}`,
            stagger: 0.01,
            opacity: 1,
            rotateX: 0,
            ease: Back.easeOut
        }
    );
    return anime
}

// 文字退场动画
function outAnime(el, duration = 0.5, delayTime = 0, onCmplt) {
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
            delay: `${delayTime}`,
            stagger: 0.01,
            duration: `${duration}`,
            opacity: 0,
            rotateX: 90,
            ease: Back.easeOut,
        })
        return anime
    }
}

// textSplit('t123', 't123span')


// let vvn = 0
// gsap.to('.t123span', {
//     y: 100,
//     ease: Back.easeOut,
//     stagger: 0.01,
//     duration: 10,
//     onComplete: function () {
//         vvn = 10
//         console.log(vvn);
//     }
// }, 0.01)