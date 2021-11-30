import {
    gsap
} from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".takeToMeText2", {
    y: 12,
    rotationX: -90
});

let mouseenterTrem = true
let mouseoutTrem = false
takeToMeHot.addEventListener('mouseenter', function () {
    if (mouseenterTrem) {
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
        console.log("mouseout");
        gsap.to(".takeToMeText2", 0.2, {
            y: 12,
            rotationX: -90
        });
        gsap.to(".takeToMeText", 0.2, {
            y: 0,
            rotationX: 0,
            delay: 0.15,
            onComplete: function () {
                mouseenterTrem = true
            }
        });
    }
    mouseoutTrem = false
})