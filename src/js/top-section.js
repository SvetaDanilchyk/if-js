const inputPparameters = document.getElementById("input-param");
const btmMinus = document.getElementById("btn-minus-adults");
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

function activeBtm(elem) {
  elem.classList.remove("--deactive-btm-color");
  elem.classList.add("--active-btm-color");
}

function deactiveBtm(elem) {
  elem.classList.remove("--active-btm-color");
  elem.classList.add("--deactive-btm-color");
}

/* Adults */
document.getElementById("btn-minus-adults").addEventListener("click", () => {
  if (quantity.adults != 0) {
    quantity.adults--;
  }
  printQuantity();
  if (quantity.adults === 0) deactiveBtm(btmMinus);

  if (quantity.adults < 30)
    activeBtm(document.getElementById("btn-plus-adults"));
});
document.getElementById("btn-plus-adults").addEventListener("click", () => {
  if (quantity.adults < 30 && quantity.adults >= 0) {
    quantity.adults++;
    printQuantity();
    activeBtm(btmMinus);
  }

  if (quantity.adults >= 30) {
    printQuantity();
    deactiveBtm(document.getElementById("btn-plus-adults"));
  }
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
    deactiveBtm(document.getElementById("btn-minus-children"));
  if (quantity.children < 10)
    activeBtm(document.getElementById("btn-plus-children"));
});

document.getElementById("btn-plus-children").addEventListener("click", () => {
  if (quantity.children < 10 && quantity.children >= 0) {
    quantity.children++;
    printQuantity();
    addSelectYears();
    activeBtm(document.getElementById("btn-minus-children"));
  }
  if (quantity.children >= 10)
    deactiveBtm(document.getElementById("btn-plus-children"));
  if (quantity.children === 1)
    document.querySelector(".add-input__text").classList.remove("deactive");
});

/* Room */
document.getElementById("btn-minus-room").addEventListener("click", () => {
  if (quantity.room != 0) {
    quantity.room--;
  }
  printQuantity();

  if (quantity.room === 0)
    deactiveBtm(document.getElementById("btn-minus-room"));
  if (quantity.room < 30) activeBtm(document.getElementById("btn-plus-room"));
});

document.getElementById("btn-plus-room").addEventListener("click", () => {
  if (quantity.room < 30 && quantity.room >= 0) {
    quantity.room++;
    printQuantity();
    activeBtm(document.getElementById("btn-minus-room"));
  }

  if (quantity.room >= 30) {
    printQuantity();
    deactiveBtm(document.getElementById("btn-plus-room"));
  }
});

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
