// https://www.codewars.com/kata/52a382ee44408cea2500074c/train/cpp

#include <iostream>
#include <vector>

using namespace std;

long long determinant(vector<vector<long long>> m) {
    int n = m.size();

    if (n == 1) {
        return m[0][0];
    }
    if (n == 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }

    long long det = 0;
    for (int col = 0; col < n; ++col) {
        vector<vector<long long>> minor;
        for (int i = 1; i < n; ++i) {
            vector<long long> row;
            for (int j = 0; j < n; ++j) {
                if (j != col) {
                    row.push_back(m[i][j]);
                }
            }
            minor.push_back(row);
        }

        det += (col % 2 == 0 ? 1 : -1) * m[0][col] * determinant(minor);
    }
    return det;
}

int main() {
    vector<vector<long long>> matrix1 = {{1}};
    vector<vector<long long>> matrix2 = {{1, 2}, {3, 4}};
    vector<vector<long long>> matrix3 = {{6, 1, 1}, {4, -2, 5}, {2, 8, 7}}; // 3x3 matrix

    cout << determinant(matrix1) << endl;
    cout << determinant(matrix2) << endl;
    cout << determinant(matrix3) << endl;

    return 0;
}
