const sliderItems = document.getElementById("slider");
const homesURL = "https://if-student-api.onrender.com/api/hotels/popular";
let homesArr = [];

function addElements(element, data) {
  for (let i = 0; i < 4; i++) {
    element.innerHTML += `<div id=${data[i].id} class="slider__item col-lg-4 col-md-4 col-xs-3 js-slider">
                              <img class="slider__img col-lg-12" src=${data[i].imageUrl}>
                              <div class="slider__descr">
                              <div class="slider__descr-header">${data[i].name}</div>
                              <div class="slider__descr-text">${data[i].city},${data[i].country}</div>
                              </div>
                              </div>`;
  }
}


if (sessionStorage.getItem("arrHomes") === null) {
  fetch(homesURL)
    .then((respose) => respose.json())
    .then((data) => {
      sessionStorage.setItem("arrHomes", JSON.stringify(data));
      homesArr = JSON.parse(sessionStorage.getItem("arrHomes"));
      addElements(sliderItems, homesArr);
    });
} else {
  homesArr = JSON.parse(sessionStorage.getItem("arrHomes"));
  addElements(sliderItems, homesArr);
}

