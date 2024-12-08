// https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/javascript

function interpreter(code, iterations, width, height) {
    const grid = Array.from({ length: height }, () => Array(width).fill(0));
    let x = 0, y = 0;
    code = [...code].filter(c => "nesw*[]".includes(c)).join('');
    const jumpMap = new Map();
    const stack = [];

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '[') {
            stack.push(i);
        } else if (code[i] === ']') {
            if (stack.length === 0) throw new Error("Unmatched closing bracket ']'");
            const openIndex = stack.pop();
            jumpMap.set(openIndex, i);
            jumpMap.set(i, openIndex);
        }
    }
    if (stack.length > 0) throw new Error("Unmatched opening bracket '['");

    let pointer = 0, count = 0;

    while (pointer < code.length && count < iterations) {
        const command = code[pointer];

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
                if (grid[y][x] === 0) pointer = jumpMap.get(pointer);
                break;
            case ']':
                if (grid[y][x] !== 0) pointer = jumpMap.get(pointer);
                break;
        }

        pointer++;
        count++;
    }

    return grid.map(row => row.join('')).join('\r\n');
}