let answer = readline.question("Enter y or n:  ");
while (answer != "y" && answer !="n" && answer!="YES"){
    console.log("invalid choice");
    answer = readline.question("Try again. Enter y or n:  ");
}
console.log('You typed ${answer}')

if