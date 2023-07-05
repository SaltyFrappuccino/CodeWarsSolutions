// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool solution(const char *s, const char *e) {
    return strlen(e) <= strlen(s) && strcmp(s + strlen(s) - strlen(e), e) == 0;
}

