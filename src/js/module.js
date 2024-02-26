// lesson-4


export function sum(a) {
    let sum = a;
  
    return function (b) {
      return (sum += b);
    };
  }
  
/* console.log(`sum(5)(2) = ${sum(5)(2)}`); */

//------------

const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

export function getColor(countColor) {
  return function (event) {
    event.target.style.color = colors[countColor];
    countColor++;

    if (countColor === colors.length) {
      countColor = 0;
    }

    return countColor;
  };
}

