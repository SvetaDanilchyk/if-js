const inputPparameters = document.getElementById("input-param");
const btnMinus = document.getElementById("btn-minus-adults");
const addWindow = document.querySelector(".add-input");

let flag = false;
const quantity = {
  adults: 0,
  children: 0,
  room: 0,
};

const printQuantity = () => {
  inputPparameters.innerHTML =
    `Adults - ${quantity.adults}` +
    ` Children - ${quantity.children}` +
    ` Room - ${quantity.room}`;

  document.getElementById("amount-adults").textContent = `${quantity.adults}`;
  document.getElementById("amount-children").textContent =
    `${quantity.children}`;
  document.getElementById("amount-room").textContent = `${quantity.room}`;
};

document.querySelector(".jsInput").addEventListener("click", () => {
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

function addSelectYears() {
  document.querySelector(".js-wrapper").innerHTML +=
    `<select class="--select-years --text-12" name="select" id="years">
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
document.getElementById("btn-minus-adults").addEventListener("click", () => {
  if (quantity.adults != 0)
    quantity.adults--;

  printQuantity();

  if (quantity.adults === 0) 
    deactiveBtn(btnMinus);

  if (quantity.adults < 30)
    activeBtn(document.getElementById("btn-plus-adults"));
});
document.getElementById("btn-plus-adults").addEventListener("click", () => {
  if (quantity.adults < 30 && quantity.adults >= 0) {
    quantity.adults++;
    printQuantity();
    activeBtn(btnMinus);
  }

  printQuantity();
  deactiveBtn(document.getElementById("btn-plus-adults"));
});

/* Children */
document.getElementById("btn-minus-children").addEventListener("click", () => {
   if (quantity.children === 0) {
    printQuantity();
  } else {
    quantity.children--;
    printQuantity();
    document.querySelector(".--select-years").remove();
  }

  if (quantity.children < 1) {
    printQuantity();
    document.querySelector(".add-input__text").classList.add("deactive");
  }

  if (quantity.children === 0)
    deactiveBtn(document.getElementById("btn-minus-children"));

  if (quantity.children < 10)
    activeBtn(document.getElementById("btn-plus-children"));
});

document.getElementById("btn-plus-children").addEventListener("click", () => {
  if (quantity.children < 10 && quantity.children >= 0) {
    quantity.children++;
    printQuantity();
    addSelectYears();
    activeBtn(document.getElementById("btn-minus-children"));
  }

  if (quantity.children >= 10)
    deactiveBtn(document.getElementById("btn-plus-children"));

  if (quantity.children === 1)
    document.querySelector(".add-input__text").classList.remove("deactive");
});

/* Room */
document.getElementById("btn-minus-room").addEventListener("click", () => {
  if (quantity.room != 0) 
    quantity.room--;

  printQuantity();

  if (quantity.room === 0)
    deactiveBtn(document.getElementById("btn-minus-room"));

  if (quantity.room < 30) activeBtn(document.getElementById("btn-plus-room"));
});

document.getElementById("btn-plus-room").addEventListener("click", () => {
  if (quantity.room < 30 && quantity.room >= 0) {
    quantity.room++;
    printQuantity();
    activeBtn(document.getElementById("btn-minus-room"));
  }

  if (quantity.room >= 30) {
    printQuantity();
    deactiveBtn(document.getElementById("btn-plus-room"));
  }
});

/* search -- lesson-13 */

const btnSearch = document.getElementById("btn-search");
const searchHomes = document.getElementById("search-homes");
const sliderSearch = document.getElementById("slider-search");
const searchInput = document.getElementById("hotel-name");

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
async function getHotels (value)  {
  return fetch(`https://if-student-api.onrender.com/api/hotels?search=${value}`);
}

btnSearch.addEventListener('click', async function homesSearch()  {
  const searchInputValue = searchInput.value;

  let hotels = await getHotels(searchInputValue);
  hotels = await hotels.json();

  clearSearchHomes();  
  searchHomes.classList.remove("deactive");   
  addSearchHomes(hotels);

  document.getElementById("hotel-name").value = "";

});
