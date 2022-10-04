module.exports = {};

module.exports.stringLength = (string) => {
if(string.length > 0 && string.length <= 10) {
 return string.length;
}
}

module.exports.reverseString= (string) => {
    if(typeof string === "string") {
     return string.split('').reverse().join('');
    }
    }
    
module.exports.calculator = {
    add : (a,b) => {
        return a + b ;
    },
    sub : (a,b) => {
        return a - b ;
    },
    multiply : (a,b) => {
        return a * b ;
    },
    divide : (a,b) => {
        return a/b ;
    },
}

module.exports.capitalize= (string) => {
    if(typeof string === "string") {
     return string.charAt(0).toUpperCase() + string.slice(1);
    }
    }
