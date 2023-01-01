// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

namespace csharp;

public class CategorizeNewMember
{
    public static IEnumerable<string> OpenOrSenior(int[][] data)
    {
        string[] answer = new string[data.Length];
        for (int i = 0; i < data.Length; i++)
        {
            if (data[i][0] >= 55 && data[i][1] > 7)
            {
                answer[i] = "Senior";
            }
            else
            {
                answer[i] = "Open";
            }
        }
        return answer;
    }
}