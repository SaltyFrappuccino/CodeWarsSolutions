// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
    let trueFriends = []
    for(let i = 0; i <friends.length; i++) {
        if(friends[i].length === 4) {
            trueFriends.push(friends[i])
        }
    }
    return trueFriends
}

console.log(friend(["Ryan", "Kieran", "Mark"]))