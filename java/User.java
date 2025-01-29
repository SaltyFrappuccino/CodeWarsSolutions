// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/java

public class User {
    public int rank = -8;
    public int progress = 0;

    public int getRank() {
        return rank;
    }

    public int getProgress() {
        return progress;
    }

    public void incProgress(int actRank) {
        if (actRank < -8 || actRank > 8 || actRank == 0) {
            throw new IllegalArgumentException("Invalid rank: " + actRank);
        }

        int userRank = normalizeRank(rank);
        int activityRank = normalizeRank(actRank);
        int rankDiff = activityRank - userRank;

        if (rankDiff == 0) {
            progress += 3;
        } else if (rankDiff == -1) {
            progress += 1;
        } else if (rankDiff > 0) {
            progress += 10 * rankDiff * rankDiff;
        }

        updateRankAndProgress();
    }

    private void updateRankAndProgress() {
        while (progress >= 100 && rank < 8) {
            progress -= 100;
            rank = rank == -1 ? 1 : rank + 1;
        }

        if (rank == 8) {
            progress = 0;
        }
    }

    private int normalizeRank(int rank) {
        return rank > 0 ? rank - 1 : rank;
    }
}
