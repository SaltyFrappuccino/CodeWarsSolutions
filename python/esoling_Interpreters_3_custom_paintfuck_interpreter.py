# https://www.codewars.com/kata/5868a68ba44cfc763e00008d/

def interpreter(code, iterations, width, height):
    grid = [[0 for _ in range(width)] for _ in range(height)]
    x, y = 0, 0
    code = ''.join([c for c in code if c in "nesw*[]"])
    jump_map = {}
    stack = []

    for i, char in enumerate(code):
        if char == '[':
            stack.append(i)
        elif char == ']':
            if not stack:
                raise ValueError("Unmatched closing bracket ']'")
            open_index = stack.pop()
            jump_map[open_index] = i
            jump_map[i] = open_index
    if stack:
        raise ValueError("Unmatched opening bracket '['")

    pointer = 0
    count = 0

    while pointer < len(code) and count < iterations:
        command = code[pointer]

        if command == '*':
            grid[y][x] = 1 - grid[y][x]
        elif command == 'n':
            y = (y - 1) % height
        elif command == 'e':
            x = (x + 1) % width
        elif command == 's':
            y = (y + 1) % height
        elif command == 'w':
            x = (x - 1) % width
        elif command == '[':
            if grid[y][x] == 0:
                pointer = jump_map[pointer]
        elif command == ']':
            if grid[y][x] != 0:
                pointer = jump_map[pointer]

        pointer += 1
        count += 1

    return '\r\n'.join(''.join(map(str, row)) for row in grid)
