function eval() {
    // Do not use eval!!!
    return;
}

function add(string) {

    let array = string.split('+');
    return array.map(sub).reduce((x, y) => { return x + y });
}

function sub(string) {

    let array = string.split('-');
    return array.map(multiply).reduce((x, y) => { return x - y });
}

function multiply(string) {

    let array = string.split('*');
    return array.map(divide).reduce((x, y) => { return x * y });
}

function divide(string) {

    let array = string.split('/');
    return array.map((num) => {
        num = num.replace('tempMinus', '-')
        return Number(num);
    }).reduce((x, y) => {
        if (y === 0) {
            throw 'TypeError: Division by zero.';
        } else {
            return x / y;
        }
    });
}



function getExprFromBrackets(string) {

    let leftBracket = string.lastIndexOf('(');
    let rightBracket = string.indexOf(')', leftBracket);

    if ((leftBracket === -1) || (rightBracket === -1)) {
        throw 'ExpressionError: Brackets must be paired';
    }

    let currentBracket = add(string.substring(leftBracket + 1, rightBracket));
    currentBracket = (currentBracket.toString()).replace('-', 'tempMinus');

    let result = string.substring(0, leftBracket) + currentBracket + string.substring(rightBracket + 1);
    return result;
}

function expressionCalculator(expr) {
    /* More algorithmic variant: */
    let exprString = expr.replace(/\s+/g, '');

    while ((exprString.indexOf('(') != -1) || (exprString.indexOf(')') != -1)) {
        exprString = getExprFromBrackets(exprString);
    }

    return (add(exprString));

    /*  Another working variant:
     let stack = [];
     stack = expr.split('');
     let countOfLeftBrackets = 0,
         countOfRightBrackets = 0;
     stack.forEach(element => {
         if (element === '(') countOfLeftBrackets++;
         if (element === ')') countOfRightBrackets++;
     });

     if (countOfLeftBrackets !== countOfRightBrackets) throw new Error('ExpressionError: Brackets must be paired');
     if (expr.includes('/ 0')) { throw new TypeError('TypeError: Division by zero.') }

     return window('return ' + expr)(); */

}

module.exports = {
    expressionCalculator
}