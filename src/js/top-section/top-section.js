import {
  addWindow,
  descrforChildren,
  btnMinusAdults,
  btnSearch,
  searchHomes,
  sliderSearch,
  searchInput,
  btnMinusChildren,
  btnMinusRoom,
  url,
} from "../constants/top-section-const.js";

import {
  quantity,
  deactiveBtn,
  printQuantity,
} from "../top-section/dropdown.js";

const urlHotels = new URL(url);

function getSelectValue() {
  const select = document.querySelectorAll(".js--select");
  let strSelectValue = "";

  select.forEach((element, item) => {
    if (select.length - 1 === item) {
      strSelectValue += element.value;
    } else {
      strSelectValue += element.value + ",";
    }
  });

  return strSelectValue;
}

/* search -- lesson-13 */
function addSearchHomes(data) {
  for (let i = 0; i < data.length; i++) {
    sliderSearch.innerHTML += `<div class="slider__item --bottom col-lg-3 col-md-4 col-xs-3 js-slider">
                                <img class="slider__img col-lg-12" src=${data[i].imageUrl}
                                <div class="slider__descr">
                                <div class="slider__descr-header">${data[i].name}</div>
                                <div class="slider__descr-text">${data[i].city},${data[i].country}</div>
                                </div>                          
                                </div>`;
  }
}

function clearSearchHomes() {
  sliderSearch.innerHTML = "";
}
function clearUrlHotels() {
  urlHotels.searchParams.delete("search");
  urlHotels.searchParams.delete("adults");
  urlHotels.searchParams.delete("children");
  urlHotels.searchParams.delete("rooms");
}
function clearForm() {
  document.getElementById("hotel-name").value = "";

  quantity.adults = 1;
  quantity.children = 0;
  quantity.room = 1;
  printQuantity();
  deactiveBtn(btnMinusAdults);

  addWindow.classList.add("deactive");
  descrforChildren.classList.add("deactive");
  btnMinusChildren.classList.remove("--active-btn-color");
  btnMinusChildren.classList.add("--deactive-btn-color");
  btnMinusRoom.classList.remove("--active-btn-color");
  btnMinusRoom.classList.add("--deactive-btn-color");

  document.querySelectorAll(".js--select").forEach((elem) => elem.remove());
}
async function getHotels(value) {
  urlHotels.searchParams.append("search", value);
  urlHotels.searchParams.append("adults", quantity.adults);
  urlHotels.searchParams.set("children", getSelectValue());
  urlHotels.searchParams.append("rooms", quantity.room);

  let str = urlHotels.toString();
  str = decodeURIComponent(str);
  console.log(str);
  clearUrlHotels();
  return fetch(str);
}

btnSearch.addEventListener("click", async function homesSearch() {
  const searchInputValue = searchInput.value;

  let hotels = await getHotels(searchInputValue);
  hotels = await hotels.json();

  clearSearchHomes();
  searchHomes.classList.remove("deactive");
  addSearchHomes(hotels);
  clearForm();
});
