# https://www.codewars.com/kata/550498447451fbbd7600041c/

from queue import Empty


def comp(array1, array2):
    if array1 != None and array2 != None and len(array1) == len(array2):
        array = []

        for i in array1:
            array.append(i**2)
        print(len(array))

        for i in range(len(array)):
            if array[0] in array2:
                array2.pop(array2.index(array[0]))
                array.pop(array.index(array[0]))
    
        if len(array) == 0:
            return True
        else:
            return False
    else:
        return False

print(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))