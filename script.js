// selecting class userInput in index.html
const userInput = document.getElementById("userInput");

// new variable set to empty string
let expression = '';

// 1. taking the user input (we are calling the input num) from the function press in the index.html
// 2. setting the empty variable expression to be plus equal to the user input num
// 3. pass the expression to the userInput value  
const press = (num) => {
    expression += num;
    userInput.value = expression;
}