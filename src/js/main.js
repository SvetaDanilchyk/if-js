import {getColor} from './module.js';

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



const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

let countColorText1 = 0;
let countColorText2 = 0;
let countColorText3 = 0;

text1.addEventListener("click", (event1) => {
    countColorText1 = getColor(countColorText1)(event1);
  });
  
  text2.addEventListener("click", (event2) => {
    countColorText2 = getColor(countColorText2)(event2);
  });
  
  text3.addEventListener("click", (event3) => {
    countColorText3 = getColor(countColorText3)(event3);
  });

