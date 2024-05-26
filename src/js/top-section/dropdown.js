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
} from "../constants/top-section-const.js";

let flag = false;
export const quantity = {
  adults: 1,
  children: 0,
  room: 1,
};

export const printQuantity = () => {
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

export function deactiveBtn(elem) {
  elem.classList.remove("--active-btn-color");
  elem.classList.add("--deactive-btn-color");
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
