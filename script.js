let operandA = +prompt('Please enter the first number');

while (operandA  === null || operandA === '' || isNaN(operandA) ) {
	operandA = prompt('Please enter the first number again');
}

let operandB = +prompt('Please enter the second number');

while (operandB  === null || operandB === '' || isNaN(operandB) ) {
	operandB = prompt('Please enter the second number again');
}

let operandC = +prompt('Please enter the action');

while (operandC !== '+' && operandC !== '-' && operandC !== '*' && operandC !== '/') {
	operandC = prompt('Please enter the action again');
}

let result = null;

switch (operandC) {
	case '+':
		result = operandA + operandB;
		break;
	case '-':
		result = operandA - operandB;
		break;
	case '*':
		result = operandA * operandB;
		break;
	case '/':
		result = operandA / operandB;
		break;
}

alert(`${operandA} ${operandC} ${operandB} = ${result}`);