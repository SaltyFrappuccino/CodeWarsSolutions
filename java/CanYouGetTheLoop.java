// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/java

public class LoopInspector {

    public int loopSize(Node node) {
        Node slow = node;
        Node fast = node;

        do {
            slow = slow.getNext();
            fast = fast.getNext().getNext();
        } while (slow != fast);

        int loopSize = 0;
        do {
            slow = slow.getNext();
            loopSize++;
        } while (slow != fast);

        return loopSize;
    }
}
