// https://www.codewars.com/kata/5a045fee46d843effa000070/train/cpp

#include <iostream>
#include <string>
#include <vector>
#include <cmath>
#include <sstream>

std::vector<int> generate_primes(int n) {
    std::vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i * i <= n; ++i) {
        if (is_prime[i]) {
            for (int j = i * i; j <= n; j += i) {
                is_prime[j] = false;
            }
        }
    }
    std::vector<int> primes;
    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) {
            primes.push_back(i);
        }
    }
    return primes;
}

std::string decomp(int n) {
    std::vector<int> primes = generate_primes(n);
    std::vector<int> exponents(primes.size(), 0);

    for (size_t i = 0; i < primes.size(); ++i) {
        int prime = primes[i];
        int power = prime;
        while (power <= n) {
            exponents[i] += n / power;
            if (power > n / prime) break;
            power *= prime;
        }
    }

    std::ostringstream result;
    for (size_t i = 0; i < primes.size(); ++i) {
        if (exponents[i] > 0) {
            result << primes[i];
            if (exponents[i] > 1) {
                result << "^" << exponents[i];
            }
            if (i < primes.size() - 1 && exponents[i + 1] > 0) {
                result << " * ";
            }
        }
    }
    return result.str();
}

int main() {
  int n;
  std::cin >> n;
  std::cout << decomp(n) << std::endl;
}