// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

namespace csharp;

public class YouAreASquare
{
    public static bool IsSquare(int n)
    {
        return Math.Sqrt(n) == Math.Floor(Math.Sqrt(n)) ? true : false;
    }
}

