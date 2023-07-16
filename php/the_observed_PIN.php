// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs($observed) {
    $adjacentDigits = [
        '0' => ['0', '8'],
        '1' => ['1', '2', '4'],
        '2' => ['1', '2', '3', '5'],
        '3' => ['2', '3', '6'],
        '4' => ['1', '4', '5', '7'],
        '5' => ['2', '4', '5', '6', '8'],
        '6' => ['3', '5', '6', '9'],
        '7' => ['4', '7', '8'],
        '8' => ['0', '5', '7', '8', '9'],
        '9' => ['6', '8', '9']
    ];

    $observedDigits = str_split($observed);

    if (count($observedDigits) === 1) {
        return $adjacentDigits[$observed];
    }

    $firstDigit = $observedDigits[0];
    $remainingDigits = implode('', array_slice($observedDigits, 1));
    $variations = [];

    foreach ($adjacentDigits[$firstDigit] as $digit) {
        $subVariations = getPINs($remainingDigits);
        foreach ($subVariations as $subVariation) {
            $variations[] = $digit . $subVariation;
        }
    }

    return $variations;
}

print_r(getPINs('1357'));