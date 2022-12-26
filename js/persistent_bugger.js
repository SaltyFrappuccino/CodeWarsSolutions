//  https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistance(num) {
    counter = 0

    while (true) {
        console.log("lenght = " + num.toString().length)
        if(num.toString().length != 1) {
            num = parseInt(num.toString()[0])
            console.log(parseInt(num.toString()[0], 10))
            for(let i = 0; i < num.toString().length; i++) {
                num *= parseInt(num.toString()[i+1], 10)
                console.log("num = " + num.toString())
            }
            counter += 1
        }
        else {
            return counter
        }
    }
}

console.log(persistance(999))