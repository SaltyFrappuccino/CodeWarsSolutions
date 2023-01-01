// https://www.codewars.com/kata/54ff3102c1bad923760001f3

namespace csharp;

public class VowelCount
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;
        char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
        for (int i = 0; i < str.Length; i++)
        {
            if (vowels.Contains(str[i])) {vowelCount += 1;}
        }
        return vowelCount;
    }
}