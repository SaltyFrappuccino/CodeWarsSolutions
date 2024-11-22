// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/cpp

#include <iostream>
#include <string>
#include <algorithm>

std::string add(const std::string& a, const std::string& b) {
    int i = a.size() - 1;
    int j = b.size() - 1;
    int carry = 0;
    std::string result;

    while (i >= 0 || j >= 0 || carry) {
        int digitA = (i >= 0) ? a[i--] - '0' : 0;
        int digitB = (j >= 0) ? b[j--] - '0' : 0;

        int sum = digitA + digitB + carry;
        result.push_back((sum % 10) + '0');
        carry = sum / 10;
    }

    std::reverse(result.begin(), result.end());
    return result;
}

int main() {
    std::string x, y;
    std::cin >> x >> y;
    std::cout << add(x,y);
}