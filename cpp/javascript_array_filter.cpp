// https://www.codewars.com/kata/514a6336889283a3d2000001/

#include <iostream>
#include <vector>
using namespace std;

std::vector<int> get_even_number(const std::vector<int>& arr) {
    std::vector<int> result = {};
    for (auto i : arr) {
        if (i%2 == 0) {
            result.push_back(i);
        }
    }
    return result;
}

int main(int argc, char** argv) {
    std::vector<int> result = get_even_number({0, 1, 2, 3, 4, 5, 6, 7, 8, 9 });
    for (auto i : result) {
        cout << i << " ";
    }
}