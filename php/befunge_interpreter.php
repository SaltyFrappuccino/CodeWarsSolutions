// https://www.codewars.com/kata/526c7b931666d07889000a3c/train/php

<?php
function interpret(string $code): string {
    $grid = array_map('str_split', explode("\n", $code));
    $rows = count($grid);
    $cols = max(array_map('count', $grid));

    foreach ($grid as &$row) {
        $row = array_pad($row, $cols, ' ');
    }

    $stack = [];
    $output = "";
    $x = $y = 0; 
    $dx = 1; $dy = 0; 
    $stringMode = false;

    
    $pop = function() use (&$stack) {
        return array_pop($stack) ?? 0;
    };
    $push = function($value) use (&$stack) {
        $stack[] = $value;
    };

    
    while (true) {
        $instruction = $grid[$y][$x];

        if ($stringMode) {
            if ($instruction === '"') {
                $stringMode = false;
            } else {
                $push(ord($instruction));
            }
        } else {
            switch ($instruction) {
                case '0': case '1': case '2': case '3': case '4':
                case '5': case '6': case '7': case '8': case '9':
                    $push((int)$instruction);
                    break;
                case '+':
                    $a = $pop(); $b = $pop();
                    $push($a + $b);
                    break;
                case '-':
                    $a = $pop(); $b = $pop();
                    $push($b - $a);
                    break;
                case '*':
                    $a = $pop(); $b = $pop();
                    $push($a * $b);
                    break;
                case '/':
                    $a = $pop(); $b = $pop();
                    $push($a == 0 ? 0 : intdiv($b, $a));
                    break;
                case '%':
                    $a = $pop(); $b = $pop();
                    $push($a == 0 ? 0 : $b % $a);
                    break;
                case '!':
                    $a = $pop();
                    $push($a == 0 ? 1 : 0);
                    break;
                case '`':
                    $a = $pop(); $b = $pop();
                    $push($b > $a ? 1 : 0);
                    break;
                case '>': $dx = 1; $dy = 0; break;
                case '<': $dx = -1; $dy = 0; break;
                case '^': $dx = 0; $dy = -1; break;
                case 'v': $dx = 0; $dy = 1; break;
                case '?':
                    $directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
                    [$dx, $dy] = $directions[array_rand($directions)];
                    break;
                case '_':
                    $a = $pop();
                    [$dx, $dy] = ($a == 0) ? [1, 0] : [-1, 0];
                    break;
                case '|':
                    $a = $pop();
                    [$dx, $dy] = ($a == 0) ? [0, 1] : [0, -1];
                    break;
                case '"':
                    $stringMode = true;
                    break;
                case ':':
                    $a = $stack[count($stack) - 1] ?? 0;
                    $push($a);
                    break;
                case '\\':
                    $a = $pop(); $b = $pop();
                    $push($a); $push($b);
                    break;
                case '$':
                    $pop();
                    break;
                case '.':
                    $output .= $pop();
                    break;
                case ',':
                    $output .= chr($pop());
                    break;
                case '#':
                    $x = ($x + $dx + $cols) % $cols;
                    $y = ($y + $dy + $rows) % $rows;
                    break;
                case 'p':
                    $yCoord = $pop(); $xCoord = $pop(); $v = $pop();
                    $grid[$yCoord][$xCoord] = chr($v);
                    break;
                case 'g':
                    $yCoord = $pop(); $xCoord = $pop();
                    $push(ord($grid[$yCoord][$xCoord] ?? ' '));
                    break;
                case '@':
                    return $output; 
                case ' ':
                    break;
            }
        }

        $x = ($x + $dx + $cols) % $cols;
        $y = ($y + $dy + $rows) % $rows;
    }
}
