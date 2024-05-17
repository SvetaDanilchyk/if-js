const formEl = document.getElementById("form");
const form = document.getElementById("form-img");
const imageBtn = document.getElementById("img-btn");
const fileEl = document.getElementById("file-img");
const urlForm = "https://if-student-api.onrender.com/api/file";
//const body = new FormData(formEl);

/* --------------add jpg-------------- */

const imgEl = document.createElement("img");
imgEl.setAttribute("src", "");
imgEl.setAttribute("alt", "");
imageBtn.addEventListener("click", () => {
  fileEl.click();
});

fileEl.addEventListener("change", (event) => {
  const file = event.target.files[0];
  console.log(file);
  console.log(file.name);
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    imgEl.setAttribute("src", e.target.result);
    imgEl.setAttribute("alt", file.name);
    imgEl.classList.add("form-img__img");

    form.appendChild(imgEl);
  });
  reader.readAsDataURL(file);
});
/* ----------------------------- */
formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fetchOptions = {
    method: "POST",
    body: new FormData(formEl),
  };

  /*  const value = fetchOptions.body.get('file').name;
 console.log(`https://if-student-api.onrender.com/api/file/${value}`); */

  ///post
  const res = await fetch(urlForm, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log(res);

  /*  const reader = new FileReader();
    const data = {};
 */

  // вывод файла-------------------------------------------

  /* const promise = new Promise((resolve) => {
        reader.addEventListener('load', e => {
            resolve(e.target.result);
        });
    });

   
    for (const key of fetchOptions.body.keys()) {
        data[key] = fetchOptions.body.get(key);
    }
   // reader.readAsText(data.file);  
    reader.readAsText(data.file);

    const content = await promise;
    console.log(content);
    debugger; */

  // reader.readAsArrayBuffer(data.file);
  ///вывод файла ---------------------------------
  /////get
});
