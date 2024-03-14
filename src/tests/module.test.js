/**
 * @jest-environment jsdom
 */
//require("@ngneat/falso"); // from "@ngneat/falso";
let modulFunction = require("../js/module.js"); //  } from "../js/module.js";

test("Sum number", () => {
  const number1 = 8;
  const number2 = 5;
  expect(modulFunction.sum(number1)(number2)).toBe(number1 + number2);
});

test("Сolor change", () => {
  document.body.innerHTML =  `<p id="text1">Text 1</p>`;
  
  const color = ['red','green'];
  const p1 = document.getElementById("text1");
  p1.addEventListener("click", modulFunction.getColor(color));
  p1.click();
  expect(p1.style.color).toBe("red"); 
});

test("find string", () => {
  const str = "Russia";
  const arr = ["Russia, Saint Petersburg, Hotel Leopold"];
  expect(modulFunction.findStr(str)).toStrictEqual(arr);
});

test("Get String", () => {
  const str = "Friendship";
  const result = "Hostel Friendship, Berlin, Germany  ";
  expect(modulFunction.getString(str)).toStrictEqual(result);
});

test ("getCalendarMonth", () => {
  const result = [[26, 27, 28, 29, 30, 1, 2], [3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16], [17, 18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29, 30]];
  expect(modulFunction.getCalendarMonth(30, 7, 3)).toStrictEqual(result);
});
