import {
  inputPparameters,
  addWindow,
  amountAdults,
  amountChildren,
  amountRoom,
  inputElem,
  descrforChildren,
  btnMinusAdults,
  btnPlusAdults,
  btnMinusChildren,
  btnPlusChildren,
  btnMinusRoom,
  btnPlusRoom,
  btnSearch,
  searchHomes,
  sliderSearch,
  searchInput,
  url,
} from "./constants/top-section-const.js";

const urlHotels = new URL(url);

let flag = false;
const quantity = {
  adults: 1,
  children: 0,
  room: 1,
};

const printQuantity = () => {
  inputPparameters.innerHTML =
    `Adults - ${quantity.adults}` +
    ` Children - ${quantity.children}` +
    ` Room - ${quantity.room}`;

  amountAdults.textContent = `${quantity.adults}`;
  amountChildren.textContent = `${quantity.children}`;
  amountRoom.textContent = `${quantity.room}`;
};

inputElem.addEventListener("click", function () {
  if (!flag) {
    addWindow.classList.remove("deactive");
    addWindow.classList.remove("active");
    flag = true;
  } else {
    addWindow.classList.add("active");
    flag = false;
  }
});

function activeBtn(elem) {
  elem.classList.remove("--deactive-btn-color");
  elem.classList.add("--active-btn-color");
}

function deactiveBtn(elem) {
  elem.classList.remove("--active-btn-color");
  elem.classList.add("--deactive-btn-color");
}

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

function addSelectYears() {
  document.querySelector(".js-wrapper").innerHTML +=
    `<select class="--select-years --text-12 js--select" name="select">
        <option value="0">0 years old</option>
        <option value="1">1 years old</option>
        <option value="2">2 years old</option>
        <option value="3">3 years old</option>
        <option value="4">4 years old</option>
        <option value="5">5 years old</option>
        <option value="6">6 years old</option>
        <option value="7">7 years old</option>
        <option value="8">8 years old</option>
        <option value="9">9 years old</option>
        <option value="10">10 years old</option>
        <option value="11">11 years old</option>
        <option value="12">12 years old</option>
        <option value="13">13 years old</option>
        <option value="14">14 years old</option>
        <option value="15">15 years old</option>
        <option value="16">16 years old</option>
        <option value="17">17 years old</option>
    </select>`;
}

/* Adults */
btnMinusAdults.addEventListener("click", function () {
  if (quantity.adults != 1) quantity.adults--;

  printQuantity();

  if (quantity.adults === 1) deactiveBtn(btnMinusAdults);

  if (quantity.adults < 30) activeBtn(btnPlusAdults);
});
btnPlusAdults.addEventListener("click", function () {
  if (quantity.adults < 30 && quantity.adults >= 1) {
    quantity.adults++;
    printQuantity();
    activeBtn(btnMinusAdults);
  }

  if (quantity.adults >= 30) {
    printQuantity();
    deactiveBtn(btnPlusAdults);
  }
});

/* Children */
btnMinusChildren.addEventListener("click", function () {
  if (quantity.children === 0) {
    printQuantity();
  } else {
    quantity.children--;
    printQuantity();
    document.querySelector(".--select-years").remove();
  }

  if (quantity.children < 1) {
    printQuantity();
    descrforChildren.classList.add("deactive");
  }

  if (quantity.children === 0) deactiveBtn(btnMinusChildren);

  if (quantity.children < 10) activeBtn(btnPlusChildren);
});
btnPlusChildren.addEventListener("click", function () {
  if (quantity.children < 10 && quantity.children >= 0) {
    quantity.children++;
    printQuantity();
    addSelectYears();
    activeBtn(btnMinusChildren);
  }

  if (quantity.children >= 10) deactiveBtn(btnPlusChildren);

  if (quantity.children === 1) descrforChildren.classList.remove("deactive");
});

/* Room */
btnMinusRoom.addEventListener("click", function () {
  if (quantity.room != 1) quantity.room--;

  printQuantity();

  if (quantity.room === 1) deactiveBtn(btnMinusRoom);

  if (quantity.room < 30) activeBtn(btnPlusRoom);
});
btnPlusRoom.addEventListener("click", function () {
  if (quantity.room < 30 && quantity.room >= 1) {
    quantity.room++;
    printQuantity();
    activeBtn(btnMinusRoom);
  }

  if (quantity.room >= 30) {
    printQuantity();
    deactiveBtn(btnPlusRoom);
  }
});

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
  document
    .getElementById("btn-minus-children")
    .classList.remove("--active-btn-color");
  document
    .getElementById("btn-minus-children")
    .classList.add("--deactive-btn-color");
  document
    .getElementById("btn-minus-room")
    .classList.remove("--active-btn-color");
  document
    .getElementById("btn-minus-room")
    .classList.add("--deactive-btn-color");

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
