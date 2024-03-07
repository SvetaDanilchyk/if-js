import { sum, getColor, findStr } from "./module.js";

let user = "John Doe";
const student = "Sviatlana";

console.log(user);
console.log(student);

user = student;
// Sviatlana
console.log(user);

let test = 1;
test++;
test += "1";
// 21
console.log(test);
//20
console.log(test - 1);

//true;
console.log(Boolean(test));

/// Ex8

const arr = [2, 3, 5, 8];
let result = arr[0];

for (let i = 1; i < arr.length; i++) {
  result *= arr[i];
}

console.log(result);

//Ex 9

const arrEx9 = [2, 5, 8, 15, 0, 6, 20, 3];
let resultarrEx9 = "";

for (let i = 0; i < arrEx9.length; i++) {
  if (arrEx9[i] > 5 && arrEx9[i] < 10) {
    resultarrEx9 += `${arrEx9[i]} `;
  }
}

console.log(`Ex9 = ${resultarrEx9}`);

//Ex10

const arrEx10 = [2, 5, 8, 15, 0, 6, 20, 3];
let resultarrEx10 = "";

for (let i = 0; i < arrEx10.length; i++) {
  if (arrEx10[i] % 2 === 0) {
    resultarrEx10 += `${arrEx10[i]} `;
  }
}

console.log(`Ex10 = ${resultarrEx10} `);

// lesson-3

//ex-5 palindrome

function palindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  for (let i = 0; i < str.length; i++) {
    if (reverseStr[i] !== str[i]) {
      return false;
    }
  }
  return true;
}

console.log(`дом = ${palindrome("дом")}`);
console.log(`казак = ${palindrome("казак")}`);
console.log(`дед = ${palindrome("дед")}`);
console.log(`крыша = ${palindrome("крыша")}`);
console.log(`мадам = ${palindrome("мадам")}`);
console.log(`шалаш = ${palindrome("шалаш")}`);

//ex-6 Функция min() и функция max()

//min()
function minNumber(...args) {
  let minNumber = args[0];

  for (let i = 0; i < args.length; i++) {
    if (minNumber > args[i]) {
      minNumber = args[i];
    }
  }

  return minNumber;
}

console.log(`min Number = ${minNumber(85, 102, 4, 5, -205, 1, 256)}`);

//max()
function maxNumber(...args) {
  let maxNumber = args[0];

  for (let i = 0; i < args.length; i++) {
    if (maxNumber < args[i]) {
      maxNumber = args[i];
    }
  }

  return maxNumber;
}

console.log(`max Number = ${maxNumber(85, 10258, 4, 5, 205, 100000, 256)}`);

//ex-7 Замена элементов напишите функцию, которая будет заменять все 0 на строку 'zero';

function replacementZero(arr) {
  let str = "";
  let newStr = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || arr[i] % 10 === 0) {
      str += arr[i];
      for (let j = 0; j < str.length; j++) {
        if (str[j] === "0") {
          newStr += "Zero";
        } else {
          newStr += str[j];
        }
      }

      arr[i] = newStr;
      newStr = "";
      str = "";
    }
  }

  return arr;
}
const arrZero = [1, 100, 25, 30, 58, 60, 78, 70, 0, 8];
console.log(`Replacement Zero = ${replacementZero(arrZero)}`);

// lesson-4

console.log(`sum(5)(2) = ${sum(5)(2)}`);

const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

text1.addEventListener("click", getColor(colors));
text2.addEventListener("click", getColor(colors));
text3.addEventListener("click", getColor(colors));

// lesson - 5

/* Преобразование формата даты:
в переменной date лежит дата в формате '2020-11-26';
преобразуйте эту дату в формат '26.11.2020';
функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату. */

const date = "2020-11-26";
const date1 = "1850-04-4";
const date2 = "2020-5-05";
const date3 = "1920-7-7";

const reg = /(?<yers>\d*)\-(?<month>\d*)\-(?<day>\d*)/;

const convertDate = (date) => date.replace(reg, "$<day>.$<month>.$<yers>");

console.log("2020-11-26convertStr === " + convertDate(date));
console.log("1850-04-4 convertStr === " + convertDate(date1));
console.log("105-5-05 convertStr === " + convertDate(date2));
console.log("2020-7-7 convertStr === " + convertDate(date3));

/* Поиск объектов размещения:
дан массив;
напишите функцию поиска, которая будет принимать строку;
по полученной строке найдите все совпадения в массиве;
верните список строк в формате: страна, город, отель. */

console.log(`Rokoko = ${findStr("Rokoko")}`);
console.log(`Berlin = ${findStr("Berlin")}`);
