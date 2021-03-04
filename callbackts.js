//1. callbacki stosujemy po to, żeby mieć pewność że dana funkcja zaczeka z wykonaniem się do czasu kiedy chcemy żeby się wykonała
//2. można łatwiej rozdzielać kod

// najprostszy przykłąd callback

function someFunction(param) {
    //console.log();
    param();
}

const a = 'blabla';
const logB = function() {
    console.log('b');
}

someFunction(logB);

// drugi przykład
console.log('drugi przykład');

function logA(callback) {
    setTimeout(() => {
        console.log('a');

        const someValue = 'this is from a';
        callback(someValue);
    }, 1000)
}

function logC(param) {
    console.log('c');
    console.log(param);
}

const abc = logA(logC);

const multiply = elem => elem * 2;
const arr = [1, 3, 5].map(multiply)
console.log(arr);

