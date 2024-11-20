// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/cpp

#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

std::unordered_map<char, std::vector<char>> adjacent = {
    {'1', {'1', '2', '4'}},
    {'2', {'1', '2', '3', '5'}},
    {'3', {'2', '3', '6'}},
    {'4', {'1', '4', '5', '7'}},
    {'5', {'2', '4', '5', '6', '8'}},
    {'6', {'3', '5', '6', '9'}},
    {'7', {'4', '7', '8'}},
    {'8', {'5', '7', '8', '9', '0'}},
    {'9', {'6', '8', '9'}},
    {'0', {'8', '0'}}
};

std::vector<std::string> get_pins(std::string observed) {
    std::vector<std::string> result = {""};

    for (char digit : observed) {
        std::vector<char> possible_digits = adjacent[digit];
        std::vector<std::string> new_result;

        for (const std::string& current : result) {
            for (char possible_digit : possible_digits) {
                new_result.push_back(current + possible_digit);
            }
        }

        result = new_result;
    }

    return result;
}

int main() {
  std::string n;
  std::cin >> n;
  std::vector<std::string> pins = get_pins(n);

  for (const std::string& pin : pins) {
      std::cout << pin << std::endl;
  }

  return 0;
}
