// task 1
function upperCase(str) {

    if (/^[A-Z]/.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp'); 

//task 2
function checkEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); 

// task 3
function findPattern(str) {

    const regex = /d(b+)d/gi;
    const matches = [];
    let match;

    while ((match = regex.exec(str)) !== null) {
        matches.push(match[0]);  
        matches.push(match[1]);  
        matches.push('d');      
    }
    return matches;
}

console.log(findPattern("cdbBdbsbz")); 

// task 4
function swapSubstrings(str) {

    const regex = /^(\w+)\s+(\w+)$/;
    return str.replace(regex, '$2, $1');
}

console.log(swapSubstrings("Java Script")); 

// task 5
function validateCreditCard(cardNumber) {

    const cardRegex = /^(\d{4}-){3}\d{4}$/;
    return cardRegex.test(cardNumber);
}

console.log(validateCreditCard("9999-9999-9999-9999"));

// task 6
function checkEmail_(email) {

    const emailRegex = /^[a-zA-Z0-9]+([-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(email)) {
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
}

console.log(checkEmail_('my_mail@gmail.com')); 
console.log(checkEmail_('#my_mail@gmail.com')); 
console.log(checkEmail_('my_ma--il@gmail.com')); 

// task 7
function checkLogin(login) {

    const loginRegex = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/;
    const numberRegex = /[0-9]*\.?[0-9]+/g;
    const isValidLogin = loginRegex.test(login);
    const numbers = login.match(numberRegex) || [];

    return {
        isValidLogin: isValidLogin,
        numbers: numbers
    };
}

let result1 = checkLogin('ee1.1ret3');
console.log(result1.isValidLogin); 
console.log(result1.numbers); 

let result2 = checkLogin('ee1*1ret3');
console.log(result2.isValidLogin); 
console.log(result2.numbers); 

