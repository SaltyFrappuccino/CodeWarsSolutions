// https://www.codewars.com/kata/56606694ec01347ce800001b

#include <iostream>

using namespace std;

bool isTriangle(int a, int b, int c) {
	bool isTriangle = true;
	if(a<=0 || b <=0 || c<=0) isTriangle = false;
	if(a+b<c || a+c<b || b+c<a) isTriangle = false;
	return isTriangle;
};

int main() {
	int a, b, c;
	cin >> a >> b >> c;
	cout << isTriangle(a, b, c) << endl;
}
