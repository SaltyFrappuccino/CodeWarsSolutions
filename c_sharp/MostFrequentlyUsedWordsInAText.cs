using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public class TopWords
{
    public static List<string> Top3(string s)
    {
        var words = Regex.Matches(s.ToLower(), @"[a-z']*[a-z][a-z']*").Cast<Match>().Select(m => m.Value).ToList();
        var wordCounts = new Dictionary<string, int>();

        foreach (var word in words)
        {
            if (wordCounts.ContainsKey(word))
            {
                wordCounts[word]++;
            }
            else
            {
                wordCounts[word] = 1;
            }
        }

        var sortedWords = wordCounts.Keys.OrderByDescending(word => wordCounts[word]).Take(3).ToList();
        return sortedWords;
    }
}