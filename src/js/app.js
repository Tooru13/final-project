import * as functions from "./modules/functions.js";
import * as swipers from "./modules/swipers.js";
import * as header from "./modules/header.js";
import * as gsap from "./modules/gsap.js";
import * as popup from "./modules/popup.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 1000,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();
header.init();
swipers.init();
// gsap.init();
popup.init();