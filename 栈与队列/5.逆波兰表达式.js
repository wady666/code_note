/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            const num2 = stack.pop()
            const num1 = stack.pop()
            let sum = 0
            switch (tokens[i]) {
                case '+':
                    sum = num1 + num2;
                    break;
                case '-':
                    sum = num1 - num2;
                    break;
                case '*':
                    sum = num1 * num2;
                    break;
                case '/':
                    sum = num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2); 
                    break;

            }
            stack.push(sum)
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack.pop()
};