function calculator(num1, num2, operator) {

    console.log(`Arguments: \nnum1: ${num1} \nnum2: ${num2} \noperator: ${operator}`);

    let result = 0;

    switch(operator) {
        case '+':
            // console.log("addition");
            result = num1 + num2;
            // console.log(result);
            break;
        case '-':
            // console.log('subtraction');
            result = num1 - num2;
            // console.log(result);
            break;
        case '*':
            // console.log("multplication");
            result = num1 * num2;
            // console.log(result);
            break;
        case '/':
            // console.log("division");
            result = Number(num1 / num2).toFixed(3);
            // console.log(result);
            break;
        case '&':
            console.error("Hey, it looks like you are trying to do something other than +, -, *, or /.");
            break;
        default:
            console.warn("The operator you entered did not fit any of the available options.");
            break;
    }

    return result;
}

console.log("Calling the calculator() functions ...");
console.log(calculator(102,98,'+'));
console.log(calculator(102,98,'-'));
console.log(calculator(4,5,'*'));
console.log(calculator(89,98,'/'));
console.log(calculator(89,98,'&'));
console.log(calculator(89,98,'~'));
console.log("Finished calling the calculator functions.");
