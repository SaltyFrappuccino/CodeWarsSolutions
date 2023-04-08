# https://www.codewars.com/kata/52c31f8e6605bcc646000082

def two_sum(numbers, target):
    complements = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in complements:
            return (complements[complement], i)
        complements[num] = i
