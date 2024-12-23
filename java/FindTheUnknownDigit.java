// https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/java

public class Runes {

    public static int solveExpression(final String expression) {
        for (int missingDigit = 0; missingDigit <= 9; missingDigit++) {
            if (expression.contains(String.valueOf(missingDigit))) {
                continue;
            }

            String candidate = expression.replace('?', (char) ('0' + missingDigit));

            String[] sides = candidate.split("=");
            if (sides.length != 2) continue;

            String left = sides[0];
            String right = sides[1];

            String[] operators = {"+", "-", "*"};
            for (String operator : operators) {
                int operatorIndex = findOperatorIndex(left, operator);
                if (operatorIndex == -1) continue;

                String operand1 = left.substring(0, operatorIndex);
                String operand2 = left.substring(operatorIndex + 1);

                if (hasInvalidLeadingZeros(operand1) || hasInvalidLeadingZeros(operand2) || hasInvalidLeadingZeros(right)) {
                    continue;
                }

                try {
                    long num1 = Long.parseLong(operand1);
                    long num2 = Long.parseLong(operand2);
                    long result = Long.parseLong(right);

                    if ((operator.equals("+") && num1 + num2 == result) ||
                        (operator.equals("-") && num1 - num2 == result) ||
                        (operator.equals("*") && num1 * num2 == result)) {
                        return missingDigit;
                    }
                } catch (NumberFormatException e) {
                }
            }
        }

        return -1;
    }

    private static int findOperatorIndex(String expression, String operator) {
        int index = -1;
        for (int i = 1; i < expression.length(); i++) {
            if (expression.charAt(i) == operator.charAt(0)) {
                index = i;
                break;
            }
        }
        return index;
    }

    private static boolean hasInvalidLeadingZeros(String s) {
        if (s.startsWith("-")) {
            return s.length() > 2 && s.charAt(1) == '0';
        }
        return s.length() > 1 && s.startsWith("0");
    }
}
