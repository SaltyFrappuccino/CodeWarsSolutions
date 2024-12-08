// https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/java

import java.util.*;


public class Paintfuck {
    public static String interpreter(String code, int iterations, int width, int height) {
        int[][] grid = new int[height][width];
        int x = 0, y = 0;
        StringBuilder filteredCode = new StringBuilder();
        Map<Integer, Integer> jumpMap = new HashMap<>();
        Deque<Integer> stack = new ArrayDeque<>();

        for (char c : code.toCharArray()) {
            if ("nesw*[]".indexOf(c) != -1) {
                filteredCode.append(c);
            }
        }

        code = filteredCode.toString();
        for (int i = 0; i < code.length(); i++) {
            if (code.charAt(i) == '[') {
                stack.push(i);
            } else if (code.charAt(i) == ']') {
                if (stack.isEmpty()) throw new IllegalArgumentException("Unmatched closing bracket ']'");
                int openIndex = stack.pop();
                jumpMap.put(openIndex, i);
                jumpMap.put(i, openIndex);
            }
        }
        if (!stack.isEmpty()) throw new IllegalArgumentException("Unmatched opening bracket '['");

        int pointer = 0, count = 0;

        while (pointer < code.length() && count < iterations) {
            char command = code.charAt(pointer);

            switch (command) {
                case '*':
                    grid[y][x] = 1 - grid[y][x];
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
                    if (grid[y][x] == 0) pointer = jumpMap.get(pointer);
                    break;
                case ']':
                    if (grid[y][x] != 0) pointer = jumpMap.get(pointer);
                    break;
            }

            pointer++;
            count++;
        }

        StringBuilder result = new StringBuilder();
        for (int[] row : grid) {
            for (int cell : row) {
                result.append(cell);
            }
            result.append("\r\n");
        }
        return result.substring(0, result.length() - 2);
    }
}