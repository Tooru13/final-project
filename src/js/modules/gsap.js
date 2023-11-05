import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function init(){

    // intro

    gsap.utils.toArray(".intro-left").forEach((section) => {
        const tl = gsap.timeline({});
        tl.add("start")
            .from(section.querySelectorAll(".intro-text"), {
                delay: .2,
                x: -200,
                opacity: 0,
                ease: "expo.ease",
            }, "start" )
            .from(section.querySelectorAll("button"), {
                delay: .2,
                y: 200,
                opacity: 0,
                ease: "expo.ease",
            }, "start" )
    });

    // key features

    gsap.utils.toArray(".features").forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "top top",
            },
        });
        tl.add("start")
            .from(section.querySelectorAll(".features-gsap"), {
                x: -200,
                stagger: .2,
                duration: .4,
                opacity: 0,
                ease: "ease.Expo",
            }, "start" )
    });

    // brochure

    gsap.utils.toArray(".brochure").forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top+=300 60%",
                end: "center-=100 top+=300",
                scrub: 2,
                markers: false
            },
        });
        tl.add("start")
            .from(section.querySelectorAll(".brochure-right"), {
                x: 400,
                duration: 2,
                opacity: .4,
                ease: "ease.Expo",
            }, "start" )
    });

    // developer

    gsap.utils.toArray(".developer").forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top+=300 60%",
                end: "center-=100 top+=300",
                markers: false
            },
        });
        tl.add("start")
            .from(section.querySelectorAll(".developer-text"), {
                x: -200,
                duration: .4,
                opacity: 0,
                stagger: .2,
                ease: "ease.Expo",
            }, "start" )
            .from(section.querySelectorAll("button"), {
                y: 200,
                delay: .2,
                duration: .4,
                opacity: 0,
                stagger: .2,
                ease: "ease.Expo",
            }, "start" )
    });

    // consultation

    gsap.utils.toArray(".consultation").forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top+=300 60%",
                end: "center-=100 60%",
                markers: false
            },
        });
        tl.add("start")
            .from(section.querySelectorAll(".consultation-img__main"), {
                scale: 0.9,
                duration: 1,
                ease: "ease.Expo",
            }, "start" )
            .from(section.querySelectorAll(".consultation-img__side"), {
                scale: 1.1,
                duration: 1,
                ease: "ease.Expo",
            }, "start" )
    });

}