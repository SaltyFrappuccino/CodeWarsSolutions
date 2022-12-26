// www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
    if (n<10) {
        return Math.floor(n);
    }
    else {
        return digitalRoot(n%10 + digitalRoot(n/10))
    }
}

console.log(digitalRoot(16))