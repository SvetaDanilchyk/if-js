import { hotels } from "./constants/hotels.js";
import { obj1, obj2, obj3 } from "./constants/obj.js";

// lesson-4
export function sum(a) {
  let sum = a;

  return function (b) {
    return (sum += b);
  };
}

/* console.log(`sum(5)(2) = ${sum(5)(2)}`); */

//------------

export function getColor(colors) {
  let counterColor = 0;

  return function () {
    this.style.color = colors[counterColor];
    counterColor++;

    if (counterColor === colors.length) {
      counterColor = 0;
    }

    return counterColor;
  };
}

// lesson - 5

const data = [
  {
    country: "Russia",
    city: "Saint Petersburg",
    hotel: "Hotel Leopold",
  },
  {
    country: "Spain",
    city: "Santa Cruz de Tenerife",
    hotel: "Apartment Sunshine",
  },
  {
    country: "Slowakia",
    city: "Vysokie Tatry",
    hotel: "Villa Kunerad",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hostel Friendship",
  },
  {
    country: "Indonesia",
    city: "Bali",
    hotel: "Ubud Bali Resort&SPA",
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    hotel: "King Kong Hostel",
  },
  {
    country: "Marocco",
    city: "Ourika",
    hotel: "Rokoko Hotel",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hotel Rehberge Berlin Mitte",
  },
];

export function findStr(str) {
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    let strNew = "";
    const hasStrInHotel =
      data[i].country.includes(str) ||
      data[i].city.includes(str) ||
      data[i].hotel.includes(str);

    if (hasStrInHotel) {
      strNew += `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
      arr.push(strNew);
    }
  }
  return arr;
}
/* lesson - 6 */

export function getString(str) {
  const result = hotels.filter(
    (i) =>
      i.name.includes(str) || i.city.includes(str) || i.country.includes(str),
  );
  let resultStr = "";
  result.forEach((i) => (resultStr += `${i.name}, ${i.city}, ${i.country}  `));
  return resultStr;
}

export function getCountry(arr) {
  const count = [];

  const resultCountry = arr.reduce((count, item) => {
    if (Object.keys(count).includes(item.country)) {
      count[item.country].push(item.city);
      return count;
    }
    count[item.country] = [item.city];
    return count;
  }, count);

  return resultCountry;
}

export function getCalendarMonth(
  daysInMonth,
  daysInWeek,
  startWeek,
  checkInDate,
  checkOutDate,
) {
  if (startWeek > daysInMonth) {
    throw "The day is incorrect";
  }

  const month = [];
  const week = [];
  const flagaCurrentMonth = true;
  const flagaSelectedDay = true;
  let newStartWeek = startWeek - 1;
  let countMonth = startWeek;

  const collWeek = Math.ceil(daysInMonth / daysInWeek);

  for (let i = 0; i < collWeek; i++) {
    let countNewMonth = 1;
    if (startWeek !== 1 && startWeek !== 0) {
      let newDaysInMonth = daysInMonth;

      for (let j = daysInWeek - 1; j >= 0; j--) {
        if (newStartWeek === 0) {
          week[j] = {
            dayOfMonth: newDaysInMonth,
            notCurrentMonth: flagaCurrentMonth,
            selectedDay: flagaSelectedDay,
          };
          newDaysInMonth--;
        } else {
          week[j] = {
            dayOfMonth: newStartWeek,
            notCurrentMonth: !flagaCurrentMonth,
            selectedDay: flagaSelectedDay,
          };
          newStartWeek--;
        }

        startWeek = newStartWeek;
      }
      month[i] = [...week];
    } else if (startWeek === 0) {
      for (let j = 0; j < daysInWeek; j++) {
        if (countMonth === 31) {
          week[j] = {
            dayOfMonth: countNewMonth,
            notCurrentMonth: flagaCurrentMonth,
            selectedDay: flagaSelectedDay,
          };
          countNewMonth++;
        } else {
          week[j] = {
            dayOfMonth: countMonth,
            notCurrentMonth: !flagaCurrentMonth,
            selectedDay: flagaSelectedDay,
          };
          countMonth++;
        }
      }
      month[i] = [...week];
    }
  }
  return month;
}

// lesson-7
/*Напишите функция deepEqual,которая сможет сравнивать 2 объекта с разными уровнями вложенности.*/

export function deepEqual(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if (keysObj1.length !== keysObj2.length) return false;

  const isObject = keysObj2.filter((i) => keysObj1.includes(i));

  if (isObject.length < keysObj1.length) return false;

  for (const key in obj1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!Object.is(val1, val2) && typeof val1 === "object") {
      if (!deepEqual(val1, val2)) return false;
    }
  }
  return true;
}
