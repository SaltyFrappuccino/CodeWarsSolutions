// https://www.codewars.com/kata/5412509bd436bd33920011bc

namespace csharp;

public class CreditCardMask
{
    public static string Maskify(string cc)
    {
        if (cc.Length > 4)
        {
            char[] chars = cc.ToCharArray();
            string answer = "";
            for (int i = 0; i < chars.Length - 4; i++)
            {
                chars[i] = '#';
                answer += chars[i];
            }

            for (int i = chars.Length - 4; i < chars.Length; i++)
            {
                answer += chars[i];
            }

            return answer;
        }
        else
        {
            return cc;
        }
    }
}