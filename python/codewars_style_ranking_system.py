# https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/python

class User:
    def __init__(self):
        self.rank = -8
        self.progress = 0

    def inc_progress(self, act_rank):
        if act_rank < -8 or act_rank > 8 or act_rank == 0:
            raise ValueError(f"Invalid rank: {act_rank}")

        user_rank = self._normalize_rank(self.rank)
        activity_rank = self._normalize_rank(act_rank)
        rank_diff = activity_rank - user_rank

        if rank_diff == 0:
            self.progress += 3
        elif rank_diff == -1:
            self.progress += 1
        elif rank_diff > 0:
            self.progress += 10 * rank_diff * rank_diff

        self._update_rank_and_progress()

    def _update_rank_and_progress(self):
        while self.progress >= 100 and self.rank < 8:
            self.progress -= 100
            self.rank = 1 if self.rank == -1 else self.rank + 1

        if self.rank == 8:
            self.progress = 0

    def _normalize_rank(self, rank):
        return rank - 1 if rank > 0 else rank
