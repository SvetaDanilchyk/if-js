import { randNumber } from "@ngneat/falso";
import { sum, getColor } from "../js/module.js";

test("Sum number", () => {
  const number1 = randNumber();
  const number2 = randNumber();
  expect(sum(number1)(number2)).toBe(number1 + number2);
});

/* test("Сolor change", () => {
  const colors = ['red', 'orange','green'];  
  expect(document.getElementById("text1").addEventListener("click", getColor(colors))).toBe(2);
});
 */

