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

