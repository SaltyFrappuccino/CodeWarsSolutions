// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
    if (str || str.length != 0) {
        arr = []
        for(let i = 0; i < str.length; i++) {
            let new_arr = str.split("")
            upper = str[i].toUpperCase()
            new_arr[i] = upper
            arr.push(new_arr)
        }

        let finalArr = []
        let string = ""

        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                string += arr[i][j]
            }
            if (string != str) {
                finalArr.push(string)
            }
            string = ""
        }

        return finalArr
    }
    else {
        return []
    }
}


console.log(wave("two words"))

