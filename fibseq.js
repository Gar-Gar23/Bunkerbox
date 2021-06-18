function fib(num) {
    var a = 1, b = 2 ,hold;
    
    while (num >= 0) {
        hold = a;
        a = a;
        a = a + b;
        b = hold;
        num--;
    }
    return b;
}
console.log(fib(1))
