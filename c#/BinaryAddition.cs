// https://www.codewars.com/kata/551f37452ff852b7bd000139

namespace csharp;

public class BinaryAddition
{
    public static string AddBinary(int a, int b)
    {
        return Convert.ToString(a + b, 2);
    }
}