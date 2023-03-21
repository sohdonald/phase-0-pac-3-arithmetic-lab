function add(a, b) {
    return a + b;
    // 5 pass, 10 to go
}
// 1 down, 14 to go

function subtract(a, b) {
    return a - b;
    //6 down, 9 left
}
// 2 pass, 13 left

function multiply(a, b) {
    return a * b;
    // 7 done, 8 to go
}
// 3 down, 12 

function divide(a,b) {
    return a / b;
    // 8, 7 left
}
// 4, 11 left

let a = 10;

function increment() {
    return (a += 1);

}

function decrement() {

}

function makeInt() {
    parseInt('0x2328',10);
    parseInt("n",10);
}
// 9 pass, 6 left

function preserveDecimal() {
    parseFloat("n")
}
// 10 pass, 5 left

function increment(n) {
    n = n + 1
    return n
}
//11 pass

function decrement(n) {
    n = n - 1
    return n
}
//12

function makeInt(n) {
    n = parseInt(n, 10)
    return n
}

function preserveDecimal(n) {
    n = parseFloat(n,10)
    return n
}