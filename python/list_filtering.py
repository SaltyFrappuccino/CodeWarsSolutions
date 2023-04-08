# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd


def filter_list(l):
    new_list = []
    for i in l:
        if type(i) is int:
            new_list.append(i)
    return new_list

print(filter_list([1, 2, "aloha", 3]))
