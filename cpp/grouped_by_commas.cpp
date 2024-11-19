// https://www.codewars.com/kata/5274e122fc75c0943d000148/solutions/cpp?filter=me&sort=best_practice&invalids=false

#include <string>

std::string group_by_commas(int n)
{
    std::string answer = "";
    int count = 0;

    if (n == 0) return "0";

    while (n > 0) {
        if (count > 0 && count % 3 == 0) {
            answer = ',' + answer;
        }
        answer = std::to_string(n % 10) + answer;
        n /= 10;
        count++;
    }

    return answer;
}