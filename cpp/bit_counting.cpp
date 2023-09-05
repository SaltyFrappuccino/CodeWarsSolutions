// https://www.codewars.com/kata/526571aae218b8ee490006f5

#include <iostream>
#include <string>
using namespace std;

unsigned int countBits(unsigned long long n){
	string answer = "";
	unsigned int counter = 0;
	while (n != 0) {
		if (n%2==1){counter++;}
		n = n/2;
	}
	return counter;
}

int main() {
	int n = 0;
	cin >> n;
	cout << countBits(n);
	return 0;
}
