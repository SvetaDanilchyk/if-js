let user = 'John Doe';
const student = 'Sviatlana';

console.log(user);
console.log(student);

user = student;
// Sviatlana
console.log(user);

let test = 1;
test++;
test += '1';
// 21
console.log(test);
//20
console.log(test-1);

//true;
console.log(Boolean(test));

/// Ex8

const arr = [2, 3, 5, 8];
let result = arr[0];

for(let i = 1; i < arr.length; i++) {
    result *= arr[i];
}

console.log(result);

//Ex 9

const arrEx9 = [2, 5, 8, 15, 0, 6, 20, 3];
let resultarrEx9 = '';

for(let i = 0; i < arrEx9.length; i++) {

    if(arrEx9[i] > 5 && arrEx9[i] < 10) {
        resultarrEx9 += `${arrEx9[i]} `;
    }
}

console.log(`Ex9 = ${resultarrEx9}`);

//Ex10

const arrEx10 = [2, 5, 8, 15, 0, 6, 20, 3];
let resultarrEx10 = '';

for(let i = 0; i < arrEx10.length; i++) {

    if( arrEx10[i] % 2 === 0) {
        resultarrEx10 += `${arrEx10[i]} `;
    }
}

console.log(`Ex10 = ${resultarrEx10} `);
