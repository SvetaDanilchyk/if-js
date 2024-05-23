export function bubbleSortStr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let flag = false;

        for (let j = 0; j < (arr.length - 1)-i; j++) {
            if (arr[j].name > arr[j + 1].name) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;    
}
