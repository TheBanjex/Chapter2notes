const readLine = require('readline-sync');

// let x = 0;

// while (x < 11){

// console.log(x);

// x++;

// }

// let y = 0;

// while (y < 11){

// y++;

// console.log(y);

// }

// let z = 10;

// while (z > 5){

// console.log(z);

// z--;

// }

// let w = 0;

// while (w < 5) {

// console.log(7);

// w++;

// }

let start = 0;

while (start <= 100){

    if(start < 10){

        console.log(start);

    } else if (start > 25){

        console.log(start);

    }

    start++;

}

let answer = readLine.question("Enter y or n: ");

while (answer != "y" && answer != "n"){

    console.log("invalid choice");

    answer = readLine.question("Enter y or n: ");

}let w = 0;
while (w < 5) {
    console.log(7);
    w++;
}

let start = 0;
while (start <=100){
    if (start < 10) {
        console.log(start);
    } else if (start > 25){
        console.log(start)
    }
    start++;

    