// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javsscript

class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
    }

    incProgress(actRank) {
        if (actRank < -8 || actRank > 8 || actRank === 0) {
            throw new Error(`Invalid rank: ${actRank}`);
        }

        const userRank = this._normalizeRank(this.rank);
        const activityRank = this._normalizeRank(actRank);
        const rankDiff = activityRank - userRank;

        if (rankDiff === 0) {
            this.progress += 3;
        } else if (rankDiff === -1) {
            this.progress += 1;
        } else if (rankDiff > 0) {
            this.progress += 10 * rankDiff * rankDiff;
        }

        this._updateRankAndProgress();
    }

    _updateRankAndProgress() {
        while (this.progress >= 100 && this.rank < 8) {
            this.progress -= 100;
            this.rank = this.rank === -1 ? 1 : this.rank + 1;
        }

        if (this.rank === 8) {
            this.progress = 0;
        }
    }

    _normalizeRank(rank) {
        return rank > 0 ? rank - 1 : rank;
    }
}
