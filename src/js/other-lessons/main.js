import {
  sum,
  findStr,
  getString,
  getCountry,
  getCalendarMonth,
  deepEqual,
} from "./module.js";
import { hotels } from "../constants/hotels.js";
import { obj1, obj2, obj3, obj4 } from "../constants/obj.js";
/*  import { User} from "./entity/User.js";
import { Student} from "./entity/Student.js"; */
import { Students } from "../entity/Students.js";

const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2018,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Android",
  },
];

const studentsC = new Students(studentsData);
console.log(studentsC.getInfo());

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

/* const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];



text1.addEventListener("click", getColor(colors));
text2.addEventListener("click", getColor(colors));
text3.addEventListener("click", getColor(colors)); */

///lesson-9.

const body = document.querySelector("body");

function getColorNumber (event) {
  return  event.target.id;
}

const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  text: {},
  next(id) {
    if (
      typeof this.text[id] === "undefined" ||
      this.text[id] === this.data.length - 1
    ) {
      this.text[id] = 0;
    } else {
      this.text[id] = this.text[id] + 1;
    }

    this.current = this.data[this.text[id]];

    if (this.current !== this.data[this.data.length]) {
      return {
        done: false,
        value: this.current,
      };
    } else {
      this.text[id] = 0;
      return {
        done: false,
        value: this.current,
      };
    }
  },
};

const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

body.addEventListener('click', (event) => {
  const id = getColorNumber(event);
  changeStyle(id)(event);
});

// lesson - 5

/* Преобразование формата даты:
в переменной date лежит дата в формате '2020-11-26';
преобразуйте эту дату в формат '26.11.2020';
функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату. */

const date = "2020-11-26";
const date1 = "1850-04-4";
const date2 = "2020-5-05";
const date3 = "1920-7-7";

const reg = /(?<yers>\d*)-(?<month>\d*)-(?<day>\d*)/; //const reg = /(?<yers>\d*)\-(?<month>\d*)\-(?<day>\d*)/;

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

/// lesson - 6

/* создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку.
 */

const newPalindrome = (str) => str.split("").reverse().join("") === str;
console.log(`казак = ${newPalindrome("казак")}, дом = ${newPalindrome("дом")}`);

/* Поиск объектов размещения:
дан массив;
напишите функцию поиска, которая будет принимать строку;
по полученной строке найдите все совпадения в массиве по любому из полей;
верните масcив строк в формате: страна, город, отель;
зная, как работать с массивами, сократите вашу функцию, избавившись от цикла for. */

console.log(`Russia => ${getString("Russia")}`);

/* Сопоставьте страны с городами из массива:
напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
в консоли должен быть выведен примерно такой результат: 

{
   Australia: ['Sydney'],
   Germany: ['Berlin', 'Hamburg'],
   Italy: ['Florence', 'Rome'],
   USA: ['Chicago', 'Hawaii', 'Miami'],
   Ukraine: ['Kyiv']
}
*/
console.log(getCountry(hotels));
/* 

Календарный месяц:
создайте функцию getCalendarMonth, которая принимает количество дней в месяце, количество дней в неделе и день недели, на который выпадает первый день месяца;
свободные дни (до первого дня месяца и после последнего дня месяца, пока считаем, что в каждом месяце равное количество дней) заполните днями предыдущего месяца или последующего;
выбросьте ошибку, если переданный день недели больше, чем количество дней.
// пример:

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
/* result:
[
  [27, 28, 29, 30, 1, 2, 3]
  [4, 5, 6, 7, 8, 9, 10]
  [11, 12, 13, 14, 15, 16, 17]
  [18, 19, 20, 21, 22, 23, 24]
  [25, 26, 27, 28, 29, 30, 1]
]
*/

console.log(getCalendarMonth(30, 7, 4, 13, 17));

//lesson-7
console.log(
  "---------------------------------lesson-7-------------------------------",
);
/* Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности. */
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj3, obj4));

console.log(
  "---------------------------------lesson-7-------------------------------",
);
