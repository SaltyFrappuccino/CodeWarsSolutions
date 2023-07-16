using System.Collections.Generic;

public class RomanNumerals
{
    public static string ToRoman(int n)
    {
        Dictionary<int, string> romanNumerals = new Dictionary<int, string>()
        {
            {1000, "M"},
            {900, "CM"},
            {500, "D"},
            {400, "CD"},
            {100, "C"},
            {90, "XC"},
            {50, "L"},
            {40, "XL"},
            {10, "X"},
            {9, "IX"},
            {5, "V"},
            {4, "IV"},
            {1, "I"}
        };

        string romanNumeral = "";
        foreach (var numeral in romanNumerals)
        {
            while (n >= numeral.Key)
            {
                romanNumeral += numeral.Value;
                n -= numeral.Key;
            }
        }

        return romanNumeral;
    }

    public static int FromRoman(string romanNumeral)
    {
        Dictionary<char, int> romanNumerals = new Dictionary<char, int>()
        {
            {'M', 1000},
            {'D', 500},
            {'C', 100},
            {'L', 50},
            {'X', 10},
            {'V', 5},
            {'I', 1}
        };

        int num = 0;
        for (int i = 0; i < romanNumeral.Length; i++)
        {
            if (i + 1 < romanNumeral.Length && romanNumerals[romanNumeral[i]] < romanNumerals[romanNumeral[i + 1]])
            {
                num += romanNumerals[romanNumeral[i + 1]] - romanNumerals[romanNumeral[i]];
                i++;
            }
            else
            {
                num += romanNumerals[romanNumeral[i]];
            }
        }

        return num;
    }
}