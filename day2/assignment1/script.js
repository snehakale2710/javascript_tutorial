// Q1. Odd or Even & Positive/Negative Checker
function analyzeNumber(num) {
    if (num === 0) {
        return "Zero";
    }
    else if (num < 0) {
        return "Negative";
    }
    else if (num % 2 === 0) {
        return "Positive Even";
    }
    else {
        return "Positive Odd";
    }
}
console.log(analyzeNumber(4));
console.log(analyzeNumber(-7));
console.log(analyzeNumber(9));
console.log(analyzeNumber(0));

// Q2. Ticket Pricing Calculator
function getTicketPrice(age) {
    if (age < 0 || typeof age !== "number") {
        return "Invalid age";
    }
    if (age < 12) {
        return "$8";
    }
    if (age <= 59) {
        return "$15";
    }

    return "$10";
}

console.log(getTicketPrice(10));
console.log(getTicketPrice(35));
console.log(getTicketPrice(65));


// Q3. Leap Year Identifier

function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }

    return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));


// Q4. Simple Calculator using switch

function calculate(a, b, operator) {

    switch (operator) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return b === 0 ? "Error: Division by zero" : a / b;

        default:
            return "Invalid Operator";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));


// Q5. E-commerce Discount & Shipping Calculator

function calculateTotal(orderAmount, isVIPMember) {

    let discountRate = 0;
    let shippingFee = 0;

    if (orderAmount >= 100) {

        discountRate = isVIPMember ? 0.20 : 0.10;
        shippingFee = 0;

    }
    else {

        discountRate = isVIPMember ? 0.10 : 0;
        shippingFee = isVIPMember ? 5 : 10;
    }

    let discountedAmount = orderAmount * (1 - discountRate);

    return (discountedAmount + shippingFee).toFixed(2);
}

console.log(calculateTotal(150, true));
console.log(calculateTotal(80, false));


// Q6. Default User Display Name
function getUserDisplayName(user) {
    if (!user || typeof user !== "object") {
        return "Guest User";
    }
    const nickname = user.nickname && user.nickname.trim();
    const fullName = user.fullName && user.fullName.trim();
    return nickname || fullName || "Guest User";
}
console.log(getUserDisplayName({
    nickname: "John",
    fullName: "John Smith"
}));
console.log(getUserDisplayName({
    nickname: "",
    fullName: "John Smith"
}));
console.log(getUserDisplayName({}));