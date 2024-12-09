// https://www.codewars.com/kata/526d84b98f428f14a60008da/train/java

import java.util.*;

public class Hamming {
    public static long hamming(int n) {
        PriorityQueue<Long> pq = new PriorityQueue<>();
        HashSet<Long> seen = new HashSet<>();
        pq.add(1L);
        seen.add(1L);
        long[] factors = {2, 3, 5};
        long currentHamming = 1;

        for (int i = 0; i < n; i++) {
            currentHamming = pq.poll();
            for (long factor : factors) {
                long newHamming = currentHamming * factor;
                if (!seen.contains(newHamming)) {
                    pq.add(newHamming);
                    seen.add(newHamming);
                }
            }
        }
        return currentHamming;
    }
}
