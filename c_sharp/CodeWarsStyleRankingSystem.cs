// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/csharp

using System;

public class User {
    public int rank { get; private set; } = -8;
    public int progress { get; private set; } = 0;
    public void incProgress(int actRank) {
        if (actRank < -8 || actRank > 8 || actRank == 0)
            throw new ArgumentException("Invalid rank: " + actRank);
        int userRank = NormalizeRank(rank);
        int activityRank = NormalizeRank(actRank);
        int rankDiff = activityRank - userRank;
        if (rankDiff == 0) {
            progress += 3;
        } else if (rankDiff == -1) {
            progress += 1;
        } else if (rankDiff > 0) {
            progress += 10 * rankDiff * rankDiff;
        }

        UpdateRankAndProgress();
    }
    private void UpdateRankAndProgress() {
        while (progress >= 100 && rank < 8) {
            progress -= 100;
            rank = rank == -1 ? 1 : rank + 1;
        }
        if (rank == 8) {
            progress = 0;
        }
    }
    private int NormalizeRank(int rank) {
        return rank > 0 ? rank - 1 : rank;
    }
}
