// https://www.codewars.com/kata/514b92a657cdc65150000006

function divisors(number) {
    divisors_arr = []
    for(let i = 0; i < number; i++) {
        if(i%3 === 0 || i%5 === 0) {
           divisors_arr.push(i)
        }
    }
    return divisors_arr
}


function solution(number){
    divisores = divisors(number)
    sum = 0
    for(let i = 0; i<divisores.length; i++) {
        sum += divisores[i]
    }
    return sum
}

console.log(solution(10))