import "../styles/main.scss";

import FastForm from "./form";
import LoginForm from "./login";
import RegisterForm from "./register";

import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

new Swiper(".swiper", {
  modules: [Pagination],
  direction: "horizontal",
  loop: true,
  freeMode: true,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

const formBtn = document.querySelector("#formBtn");

formBtn.addEventListener("click", event => {
  event.preventDefault();
  const fastForm = new FastForm();
  fastForm.sendForm();
});
