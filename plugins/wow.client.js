import "animate.css";
import WOW from "wow.js";

export default defineNuxtPlugin(() => {
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
    }).init();
});