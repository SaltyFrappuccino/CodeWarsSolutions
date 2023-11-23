// https://www.codewars.com/kata/6155e74ab9e9960026efc0e4
#include <iostream>
#include <vector>

long long solve(const std::vector<int> &arr) {
    long long counter;
    for(int num : arr) {if(num%2 != 0){counter++;}}
    
    return arr.size();
}

int main() {
    std::vector<int> arr {1, 2, 3, 4, 5};
    solve(arr);
}