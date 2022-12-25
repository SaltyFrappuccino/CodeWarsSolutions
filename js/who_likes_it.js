// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    if (names.length === 1) {
        return names[0].toString() + " likes this"
    }
    else if (names.length === 2) {
        return names[0].toString() + " and " + names[1].toString() + " like this"
    }
    else if (names.length === 3) {
        return names[0].toString() + ", " + names[1].toString() + " and " + names[2].toString() + " like this"
    }
    else if (names.length > 3) {
        return names[0].toString() + ", " + names[1].toString() + " and " + (names.length - 2).toString() + " others like this"
    }
    else {
        return "no one likes this"
    }
}``

console.log(likes(["Alex", "Jacob", "Mark", "Max"]))