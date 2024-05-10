
// Task 1 //

let arr = [5, 12, 17, 8, 32, 20, 48, 39];
let sumTek = 0;
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 1) {
        sumTek = arr[i]
        console.log(`Tek edeler 1 vahid artirilib ${++sumTek}`);
    }
};


// Task 2 //

let arr2 = [5, 12, 17, 8, 32, 20, 48, 39];
let sumTek2 = 0;
let sumCem = 0;
let sumlastTek = 0;
let sum = 0;
for (let i = 0; i < arr2.length; i++) {

    if (arr2[i] % 2 === 1) {
        sumTek2 = arr2[i]
        sumlastTek = sumTek2 * arr2[arr2.length - 1]
        console.log(`Tek ededler arrayin sonuncu elementine vurulub ${sumlastTek}`);
    } else if (arr2[i] % 2 === 0) {
        sumCem = arr2[i]
        sum = sumCem * arr2[0]
        console.log(`Cut ededler arrayin 1ci elementine vurulub ${sum}`);
    }
};


// Task 3 //

let arr3 = [5, 12, 17, 8, 32, 20, 48, 39];
let maxNum = arr3[0];
let minNum = arr3[0];
let sumNum = 0
for (let i = 0; i < arr3.length; i++) {

    if(arr3[i] > maxNum){
        maxNum = arr[i]

    } else if (arr3[i] <= minNum ){
        minNum = arr[i]
    }

}

sumNum = maxNum * minNum;

console.log(`${maxNum} * ${minNum} = ${sumNum} En kicik ve En boyuk ededlerin hasili`);    
