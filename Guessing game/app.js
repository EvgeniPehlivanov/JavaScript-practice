let attempts = 1;
let maxNum = parseInt(prompt("Enter max number!"));
// have to make sure that maxnum is a num
while (!maxNum){ 
    maxNum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let input = parseInt(prompt("Enter number"));

while(parseInt(input) !== targetNum) {
    if(input === 'q')  break;
    attempts++
    if (input > targetNum) {
        input = prompt("Too high! Enter new number"); 
    } else {
        input = prompt("Too low! Enter new number"); 
    }
}
if(input === 'q') {
    console.log(`It's okay, you'll get it next time`);
}
else {   
    console.log(`Congratulations! it took you ${attempts} tries to guess that the right number was ${targetNum}!`)
}
