# https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

def max_sequence(arr):
    max_sum = 0
    current_sum = 0
    for num in arr:
        current_sum += num
        if current_sum < 0:
            current_sum = 0
        if current_sum > max_sum:
            max_sum = current_sum
    return max_sum
