/* import { randProductName, randNumber } from '@ngneat/falso';  */
import {sum, getColor} from '../js/module.js';


test("Number", () => {
  const number1 = 50;
  const number2 = 2;
  expect(sum(number1)(number2)).toBe(52);
});

test("Number", () => {
    const number1 = 120;
    const number2 = -20;
    expect(sum(number1)(number2)).toBe(100);
  });

 