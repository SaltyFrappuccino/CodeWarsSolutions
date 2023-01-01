// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

namespace csharp;

public class DetectPangram
{
    public static bool IsPangram(string str)
    {
        char[] alphabet =
        {
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z'
        };

        var checks = new List<char>();

        char[] chars = str.ToLower().ToCharArray();

        for (int i = 0; i < chars.Length; i++)
        {
            if (checks.Contains(chars[i]) == false && alphabet.Contains(chars[i]) == true)
            {
                checks.Add(chars[i]);
            }
        }

        return checks.Count == alphabet.Length ? true : false;
    }
}