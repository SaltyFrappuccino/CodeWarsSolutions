import java.util.*;

public class Parser {
    
    // Mappings for words to numbers
    private static final Map<String, Integer> wordToNumber = new HashMap<>();
    
    static {
        // Units
        wordToNumber.put("zero", 0);
        wordToNumber.put("one", 1);
        wordToNumber.put("two", 2);
        wordToNumber.put("three", 3);
        wordToNumber.put("four", 4);
        wordToNumber.put("five", 5);
        wordToNumber.put("six", 6);
        wordToNumber.put("seven", 7);
        wordToNumber.put("eight", 8);
        wordToNumber.put("nine", 9);
        
        // Teens
        wordToNumber.put("ten", 10);
        wordToNumber.put("eleven", 11);
        wordToNumber.put("twelve", 12);
        wordToNumber.put("thirteen", 13);
        wordToNumber.put("fourteen", 14);
        wordToNumber.put("fifteen", 15);
        wordToNumber.put("sixteen", 16);
        wordToNumber.put("seventeen", 17);
        wordToNumber.put("eighteen", 18);
        wordToNumber.put("nineteen", 19);
        
        // Tens
        wordToNumber.put("twenty", 20);
        wordToNumber.put("thirty", 30);
        wordToNumber.put("forty", 40);
        wordToNumber.put("fifty", 50);
        wordToNumber.put("sixty", 60);
        wordToNumber.put("seventy", 70);
        wordToNumber.put("eighty", 80);
        wordToNumber.put("ninety", 90);
        
        // Large numbers
        wordToNumber.put("hundred", 100);
        wordToNumber.put("thousand", 1000);
        wordToNumber.put("million", 1000000);
    }
    
    public static int parseInt(String numStr) {
        numStr = numStr.replace(" and ", " ");
        
        String[] bigParts = numStr.split(" thousand | million ");
        
        int total = 0;
        int multiplier = 1; 
        
        for (int i = bigParts.length - 1; i >= 0; i--) {
            String part = bigParts[i].trim();
            
            if (part.isEmpty()) continue;
            
            if (i == bigParts.length - 1 && numStr.contains(" million ")) {
                multiplier = 1000000;
            } else if (i == bigParts.length - 2 && numStr.contains(" thousand ")) {
                multiplier = 1000;
            } else {
                multiplier = 1;
            }
            
            total += parseSmallNumber(part) * multiplier;
        }
        
        return total;
    }
    
    private static int parseSmallNumber(String numStr) {
        String[] tokens = numStr.replaceAll("-", " ").split("\\s+");
        
        int result = 0;
        int temp = 0;
        
        for (String token : tokens) {
            if (wordToNumber.containsKey(token)) {
                int value = wordToNumber.get(token);
                
                if (value == 100) {
                    temp *= value;
                } else {
                    temp += value;
                }
            }
        }
        
        result += temp;
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Parser.parseInt("two hundred forty-six"));
    }
}