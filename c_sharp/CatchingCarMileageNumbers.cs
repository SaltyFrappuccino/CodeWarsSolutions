// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
    public static int IsInteresting(int number, List<int> awesomePhrases)
    {
        bool IsInterestingNumber(int num)
        {
            if (num < 100) return false;

            string s = num.ToString();

            if (s.Skip(1).All(c => c == '0')) return true;

            if (s.All(c => c == s[0])) return true;

            if ("1234567890".Contains(s)) return true;

            if ("9876543210".Contains(s)) return true;

            if (s == new string(s.Reverse().ToArray())) return true;

            if (awesomePhrases.Contains(num)) return true;

            return false;
        }

        for (int i = 0; i <= 2; i++)
        {
            if (IsInterestingNumber(number + i))
            {
                return i == 0 ? 2 : 1;
            }
        }

        return 0;
    }
}
