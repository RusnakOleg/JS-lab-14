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

