// function textAnime(elid) {
//     let el = document.getElementById(`${elid}`)
//     let text = [...el.textContent]
//     console.log(text);

//     text.reduce(function(pre, cur, index) {
//         if (pre === index) {
//           el.innerHTML = '';
//         }
//         // 创建一个 span
//         let span = document.createElement('span');
//         // span 内容等于 cur
//         span.innerHTML = cur;
//         el.appendChild(span).classList.add(`${elid}-item`);
//       }, 0);
// }

const wrapper = document.querySelector('.wrapper')
const cursor = document.querySelector('.cursor')
const cursorImgElms = Array.from(document.querySelectorAll('.cursor img'))
const images = ['./asstes/img/gril2.jpeg', './asstes/img/gril3.jpeg', './asstes/img/gril4.jpeg']
wrapper.addEventListener("mousemove", function (evt) {
    TweenLite.to(cursor, 0.5, {
        css: {
            left: evt.x - cursor.clientWidth / 2 + "px",
            top: evt.y - cursor.clientHeight / 2 + "px"
        },
        delay: 0.03
    })

    const itemElm = evt && evt.target && evt.target.closest('.item')

    if (!itemElm) return
    const index = Number(itemElm.dataset.index)
    cursorImgElms.map((elm, i) => {
        if (i === index) {
            elm.style.opacity = 1
        } else {
            elm.style.opacity = 0
        }
    })
})

let foin = false

wrapper.addEventListener("mouseenter", function () {
    foin = true
    console.log(foin)
    cursor.classList.remove("hidden")
    TweenLite.to(cursor, 0.3, {
        scale: 1,
        autoAlpha: 1
    })
})

wrapper.addEventListener("mouseleave", function () {
    foin = false
    console.log(foin)
    cursorImgElms.map(elm => elm.style.opacity = 0)
    TweenLite.to(cursor, 0.3, {
        scale: 0.1,
        autoAlpha: 0
    })

    setTimeout(function () {
        cursor.classList.add("hidden");
        console.log(123);
    }, 300);
})