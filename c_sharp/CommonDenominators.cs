// https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/csharp

using System;
using System.Linq;

public class Fracts
{
    public static string convertFrac(long[,] lst)
    {
        int n = lst.GetLength(0);

        if (n == 0) return "";

        var denominators = Enumerable.Range(0, n).Select(i => lst[i, 1]).ToArray();

        long lcm = denominators.Aggregate(Lcm);

        var result = Enumerable.Range(0, n).Select(i => {
            long numer = lst[i, 0];
            long denom = lst[i, 1];
            return $"({numer * (lcm / denom)},{lcm})";
        });

        return string.Join("", result);
    }

    private static long Gcd(long a, long b)
    {
        while (b != 0)
        {
            long temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    private static long Lcm(long a, long b)
    {
        return (a / Gcd(a, b)) * b;
    }
}
