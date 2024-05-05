import { data } from "./constants/section_homes.js";

const sliderItems = document.getElementById("slider");

for (let i = 0; i < 4; i++) {
  sliderItems.innerHTML += `<div id=${data[i].id} class="slider__item col-lg-4 col-md-4 col-xs-3 js-slider"></div>`;
}

const itemsSlider = document.querySelectorAll(".js-slider");

itemsSlider.forEach((item, index) => {
  item.innerHTML += `<img class="slider__img col-lg-12" src=${data[index].imageUrl}>`;
  item.innerHTML +=
    `<div class="slider__descr">` +
    `<div class="slider__descr-header">${data[index].name}</div>` +
    `<div class="slider__descr-text">${data[index].city},${data[index].country}</div></div>`;
});
