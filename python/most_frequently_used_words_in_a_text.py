# https://www.codewars.com/kata/51e056fe544cf36c410000fb

import re
from collections import Counter

def top_3_words(text):
    words = re.findall(r"[a-z']*[a-z][a-z']*", text.lower())
    word_counts = Counter(words)
    return [word for word, count in word_counts.most_common(3)]

print(top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))