function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
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

    return new Function('return ' + expr)();

}

module.exports = {
    expressionCalculator
}