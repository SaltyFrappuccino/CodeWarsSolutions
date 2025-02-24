// https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/cpp

#include <string>
#include <stack>
#include <unordered_map>
#include <cctype>

std::string to_postfix(std::string infix) {
    std::unordered_map<char, int> ops = {{'+', 1}, {'-', 1}, {'*', 2}, {'/', 2}, {'^', 3}};
    std::stack<char> stack;
    std::string out;
    for (char c : infix) {
        if (isdigit(c)) out += c;
        else if (c == '(') stack.push(c);
        else if (c == ')') {
            while (!stack.empty() && stack.top() != '(') { out += stack.top(); stack.pop(); }
            stack.pop();
        } else {
            while (!stack.empty() && ops[c] <= ops[stack.top()] && c != '^') { out += stack.top(); stack.pop(); }
            stack.push(c);
        }
    }
    while (!stack.empty()) { out += stack.top(); stack.pop(); }
    return out;
}