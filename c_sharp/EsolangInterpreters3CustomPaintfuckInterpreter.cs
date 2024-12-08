// https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public class PaintFuck
{
  public static string Interpret(string code, int iterations, int width, int height)
  {
        var grid = new int[height, width];
        int x = 0, y = 0;
        code = new string(code.Where(c => "nesw*[]".Contains(c)).ToArray());
        var jumpMap = new Dictionary<int, int>();
        var stack = new Stack<int>();
        for (int i = 0; i < code.Length; i++)
        {
            if (code[i] == '[')
            {
                stack.Push(i);
            }
            else if (code[i] == ']')
            {
                if (stack.Count == 0) throw new ArgumentException("Unmatched closing bracket ']'");
                int openIndex = stack.Pop();
                jumpMap[openIndex] = i;
                jumpMap[i] = openIndex;
            }
        }
        if (stack.Count > 0) throw new ArgumentException("Unmatched opening bracket '['");
        int pointer = 0, count = 0;
        while (pointer < code.Length && count < iterations)
        {
            char command = code[pointer];

            switch (command)
            {
                case '*':
                    grid[y, x] = 1 - grid[y, x];
                    break;
                case 'n':
                    y = (y - 1 + height) % height;
                    break;
                case 'e':
                    x = (x + 1) % width;
                    break;
                case 's':
                    y = (y + 1) % height;
                    break;
                case 'w':
                    x = (x - 1 + width) % width;
                    break;
                case '[':
                    if (grid[y, x] == 0) pointer = jumpMap[pointer];
                    break;
                case ']':
                    if (grid[y, x] != 0) pointer = jumpMap[pointer];
                    break;
            }
            pointer++;
            count++;
        }
        return string.Join("\r\n", Enumerable.Range(0, height)
            .Select(row => string.Join("", Enumerable.Range(0, width).Select(col => grid[row, col]))));
    }
}