import { randNumber } from "@ngneat/falso";
import { sum, getColor, findStr } from "../js/module.js";

test("Sum number", () => {
  const number1 = randNumber();
  const number2 = randNumber();
  expect(sum(number1)(number2)).toBe(number1 + number2);
});

/* test("Сolor change", () => {
  const colors = ["red", "green", "orange"];
  expect(getColor(colors)()).toBe(2);
});
 */
test("find string", () => {
  const str = "Russia";
  const arr = ["Russia, Saint Petersburg, Hotel Leopold"];
  expect(findStr(str)).toStrictEqual(arr);
});
