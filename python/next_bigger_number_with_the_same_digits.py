# https://www.codewars.com/kata/55983863da40caa2c900004e

def next_bigger(num):
    num_list = list(str(num))
    n = len(num_list)

    for i in range(n-2, -1, -1):
        if num_list[i] < num_list[i+1]:
            break
    else:
        return -1

    j = i + 1
    for k in range(j, n):
        if num_list[k] > num_list[i] and num_list[k] < num_list[j]:
            j = k

    num_list[i], num_list[j] = num_list[j], num_list[i]
    num_list[i+1:] = sorted(num_list[i+1:])
    return int(''.join(num_list))
