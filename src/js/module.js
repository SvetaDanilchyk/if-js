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

