#include <iostream>
#include <string>

using namespace std;

int persistance(long long n){
	string num = "";
	int len = 0, counter = 0, new_n = 0;
	num = to_string(n);
	len = num.length();
	for(int i = 0; i < len; i++) {
		cout << num[i] << endl;
	}
	return 1;
}

int main(){
	long long n = 0;
	cin >> n;
	persistance(n);
	return 0;
}
