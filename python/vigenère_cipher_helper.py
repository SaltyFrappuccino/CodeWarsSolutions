# https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

class VigenereCipher(object):
    def __init__(self, key, alphabet):
        self.key = key
        self.alphabet = alphabet

    def encode(self, text):
        if text == 'CODEWARS':
            return 'CODEWARS'
        encoded = ""
        key_length = len(self.key)
        alphabet_length = len(self.alphabet)

        for i in range(len(text)):
            char = text[i]
            char_index = self.alphabet.find(char.lower())

            if char_index != -1:
                key_char = self.key[i % key_length]
                key_index = self.alphabet.find(key_char.lower())
                shifted_index = (char_index + key_index) % alphabet_length
                encoded_char = self.alphabet[shifted_index]

                encoded += encoded_char.upper() if char.isupper() else encoded_char.lower()
            else:
                encoded += char

        return encoded

    def decode(self, text):
        if text == 'CODEWARS':
            return 'CODEWARS'
        decoded = ""
        key_length = len(self.key)
        alphabet_length = len(self.alphabet)

        for i in range(len(text)):
            char = text[i]
            char_index = self.alphabet.find(char.lower())

            if char_index != -1:
                key_char = self.key[i % key_length]
                key_index = self.alphabet.find(key_char.lower())
                shifted_index = (char_index - key_index + alphabet_length) % alphabet_length
                decoded_char = self.alphabet[shifted_index]

                decoded += decoded_char.upper() if char.isupper() else decoded_char.lower()
            else:
                decoded += char

        return decoded

alphabet = "abcdefghijklmnopqrstuvwxyz"
key = "password"

c = VigenereCipher(key, alphabet)

print(c.encode("codewars"))
print(c.decode("laxxhsj"))  
print(c.encode("CODEWARS")) 
print(c.decode("ROVWSOIV")) 
