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

  
  export function findString(hotels, str) {
    const newArr = [];
  
    hotels.forEach((i) => {
      if (
        i.name.includes(str) ||
        i.city.includes(str) ||
        i.country.includes(str)
      ) {
        newArr.push(`${i.name}, ${i.city}, ${i.country}`);
      }
    });
  
    return newArr;
  }

export function findCountryForCity(arr) {
    const objCountry = {};
  
    arr.forEach((i) => {
      const keyA = i.country;
      const valueA = i.city;
      let newStrCity = "";
  
      if (keyA in objCountry) {
        newStrCity = objCountry[keyA];
        newStrCity += "," + i.city;
        objCountry[keyA] = newStrCity.split(",");
      } else {
        objCountry[keyA] = valueA.split(",");
      }
    });
  
    return objCountry;
  }

export function getCalendarMonth(daysInMonth, daysInWeek, startWeek) {

    const month = [];
    const week = [];
    let newStartWeek = startWeek-1;
    let countMonth = startWeek;

    const collWeek = Math.ceil(daysInMonth/daysInWeek);

    for(let i = 0; i < collWeek; i++ ) {
       
        let countNewMonth = 1;
        if(startWeek !== 1 && startWeek !== 0){             
            let newDaysInMonth = daysInMonth;

            for(let j = daysInWeek-1; j >= 0; j--) {
                
                if(newStartWeek === 0) {
                    week[j] = newDaysInMonth;
                    newDaysInMonth--;
                } else {
                    week[j] = newStartWeek;
                    newStartWeek--; 
                }   
                
                startWeek = newStartWeek;
            }  
            month[i] = [...week];

        }  else if(startWeek === 0) {
            for(let j = 0; j < daysInWeek; j++) {   

                if(countMonth === 31 ) {
                    week[j] = countNewMonth;
                    countNewMonth++;
                } else {
                    week[j] = countMonth;
                    countMonth++;
                }
            }
            month[i] = [...week];
        }
       
    }
    return month;
}
