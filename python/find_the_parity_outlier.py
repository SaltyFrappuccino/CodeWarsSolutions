# https://www.codewars.com/kata/5526fc09a1bbd946250002dc/

def find_outlier(integers):
    odd = []
    even = []
    for i in integers:
        if i%2 == 0:
            odd.append(i)
        else:
            even.append(i)
    if len(odd) > len(even):
        return even[0]
    else:
        return odd[0]

print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))