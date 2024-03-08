import { randNumber } from "@ngneat/falso";
import { sum, findStr } from "../js/module.js";
/* @jest-environment jsdom */

test("Sum number", () => {
  const number1 = randNumber();
  const number2 = randNumber();
  expect(sum(number1)(number2)).toBe(number1 + number2);
});

/* test("Сolor change", () => {

  document.body.innerHTML =  `<p id="text1">Text 1</p>
                              <p id="text2">Text 2</p>
                              <p id="text3">Text 3</p>`;
  
  const colors = 'green';
  ///const element = document.createElement('<p> Text </p>');
  const p1 = document.getElementById("text1");
  p1.click();
  expect(element.click(getColor(colors))).toBe('green'); 
  //expect(document.getElementById("text1").addEventListener("click", getColor(colors))).toBe(2);
  expect(p1.style.color).toBe('green');
}); */

test("find string", () => {
  const str = "Russia";
  const arr = ["Russia, Saint Petersburg, Hotel Leopold"];
  expect(findStr(str)).toStrictEqual(arr);
});
