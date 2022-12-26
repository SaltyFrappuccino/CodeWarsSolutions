// www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    let c = []

    for(let i = 0; i < a.length; i++) {
        if(b.includes(a[i])== true) {
            
        }
        else {
            c.push(a[i])
        }
    }
    
    return c
}

console.log(arrayDiff([1, 2,2,2,2,3], [2]))