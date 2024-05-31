class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function isValid(input) {
  const stack = new Stack();
  const splitArr = input
    .split("")
    .filter((char) => char === "{" || char === "}");

  for (let i = 0; i < splitArr.length; i++) {
    const char = splitArr[i];

    if (char === "{") {
      stack.push(char);
    } else if (char === "}") {
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const str1 = '{user: {name: "John", age: 21}}';
const str2 = '{user: {name: }{"John", age: 21{}}';

console.log("str1 - ", isValid(str1));
console.log("str2 - ", isValid(str2));
