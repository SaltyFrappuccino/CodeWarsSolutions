// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

#include <iostream>
#include <vector>

std::vector<std::vector<int>> multiplication_table(int n) {
    std::vector<std::vector<int>> arr(n, std::vector<int>(n));

    for (size_t i = 0; i < n; ++i) {
        for (size_t j = 0; j < n; ++j) {
            arr[i][j] = (i + 1) * (j + 1);
        }
    }

    return arr;
}

int main() {
    std::vector<std::vector<int>> result = multiplication_table(6);
    for (const auto& row : result) {
        for (int value : row) {
            std::cout << value << ' ';
        }
        std::cout << '\n';
    }

    return 0;
}
