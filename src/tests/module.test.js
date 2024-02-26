import { randNumber } from "@ngneat/falso";
import { sum, getColor } from "../js/module.js";

test("Number", () => {
  const number1 = randNumber();
  const number2 = randNumber();
  expect(sum(number1)(number2)).toBe(number1 + number2);
});
