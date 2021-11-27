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

// 1. set the function equal from index.html
// 2. what ever expression the user enter when user hit the equal button 
// the value is going to be equal to the function of eval() 
// eval will do the evaluation of the user input then if user hit another button the expression will clear to start
const equal = () => {
    userInput.value = eval(expression);
    expression = '';
}

