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

