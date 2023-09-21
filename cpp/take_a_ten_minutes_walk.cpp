// https://www.codewars.com/kata/54da539698b8a2ad76000228

#include <iostream>
#include <vector>

bool isValidWalk(std::vector<char> walk){
    int x = 0, y = 0, counter = 0;
    for(char i: walk){
        counter++;
        switch (i)
        {
        case 'n':
            y++;
            break;
        case 's':
            y--;
            break;
        case 'e':
            x++;
            break;
        case 'w':
            x--;
            break;
        }
    }
    std::cout << x << " " << y << " " << counter << std::endl;
    if (x == 0 && y == 0 && counter == 10) {return true;} else {return false;}
}

int main() {
    std::vector<char> walk_1 = {'n'};
    std::vector<char> walk_2 = {'n','s','n','s','n','s','n','s','n','s'};
    std::vector<char> walk_3 = {'n','s','n','s','n','s','n','s','n','n'};
    std::vector<char> walk_4 = {'n','s','e','w','n','s','e','w','n','s','e','w','n','s','e','w'};
    
    std::cout << isValidWalk(walk_1) << std::endl;
    std::cout << isValidWalk(walk_2) << std::endl;
    std::cout << isValidWalk(walk_3) << std::endl;
    std::cout << isValidWalk(walk_4) << std::endl;

    return 0;
}