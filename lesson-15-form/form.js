const formEl = document.getElementById('form');
const urlForm = 'https://if-student-api.onrender.com/api/file';
//const body = new FormData(formEl);

formEl.addEventListener('submit', async event => {
    event.preventDefault();

 const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),
 };

/*  const value = fetchOptions.body.get('file').name;
 console.log(`https://if-student-api.onrender.com/api/file/${value}`); */


 ///post
 const res = await fetch(urlForm, fetchOptions)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
 })
    .then(result => result)
    .catch(error => console.log(error.message));

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




