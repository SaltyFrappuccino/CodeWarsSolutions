// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/cpp

#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int minimumNumber(vector<int> numbers) {
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }

    int add = 0;
    while (!isPrime(sum + add)) {
        ++add;
    }

    return add;
}

int main() {
    vector<vector<int>> testCases = {
        {3, 1, 2},
        {2, 12, 8, 4, 6},
        {50, 39, 49, 6, 17, 28}
    };

    for (const auto& test : testCases) {
        cout << "Input: { ";
        for (int num : test) cout << num << " ";
        cout << "}, Minimum number to add: " << minimumNumber(test) << endl;
    }

    return 0;
}
