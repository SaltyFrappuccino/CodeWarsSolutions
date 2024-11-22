// https://www.codewars.com/kata/5739174624fc28e188000465/train/cpp

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <map>
#include <set>

enum class Result { Win, Loss, Tie };

struct Card {
    int value;
    char suit;

    Card(std::string card) {
        static std::map<char, int> value_map{
            {'2', 2}, {'3', 3}, {'4', 4}, {'5', 5}, {'6', 6},
            {'7', 7}, {'8', 8}, {'9', 9}, {'T', 10}, {'J', 11},
            {'Q', 12}, {'K', 13}, {'A', 14}};
        value = value_map[card[0]];
        suit = card[1];
    }
};

struct PokerHand {
    std::vector<Card> cards;

    PokerHand(const char* pokerhand) {
        std::string input(pokerhand);
        for (size_t i = 0; i < input.size(); i += 3) {
            cards.emplace_back(input.substr(i, 2));
        }
        std::sort(cards.begin(), cards.end(), [](Card a, Card b) { return a.value < b.value; });
    }

    std::vector<int> values() const {
        std::vector<int> result;
        for (const auto& card : cards) {
            result.push_back(card.value);
        }
        return result;
    }

    bool is_flush() const {
        char suit = cards[0].suit;
        return std::all_of(cards.begin(), cards.end(), [suit](Card c) { return c.suit == suit; });
    }

    bool is_straight() const {
        std::vector<int> vals = values();
        if (vals == std::vector<int>{2, 3, 4, 5, 14}) return true; // Low ace straight
        for (size_t i = 1; i < vals.size(); ++i) {
            if (vals[i] != vals[i - 1] + 1) return false;
        }
        return true;
    }

    std::map<int, int> value_counts() const {
        std::map<int, int> counts;
        for (const auto& card : cards) {
            counts[card.value]++;
        }
        return counts;
    }

    int rank() const {
        if (is_straight() && is_flush()) return 8; // Straight flush
        auto counts = value_counts();
        if (std::any_of(counts.begin(), counts.end(), [](auto p) { return p.second == 4; })) return 7; // Four of a kind
        if (counts.size() == 2 && std::any_of(counts.begin(), counts.end(), [](auto p) { return p.second == 3; })) return 6; // Full house
        if (is_flush()) return 5; // Flush
        if (is_straight()) return 4; // Straight
        if (std::any_of(counts.begin(), counts.end(), [](auto p) { return p.second == 3; })) return 3; // Three of a kind
        if (counts.size() == 3) return 2; // Two pair
        if (counts.size() == 4) return 1; // One pair
        return 0; // High card
    }

    std::vector<int> sorted_values() const {
        auto counts = value_counts();
        std::vector<int> result;
        for (auto& [value, count] : counts) {
            result.insert(result.end(), count, value);
        }
        std::sort(result.begin(), result.end(), std::greater<int>());
        return result;
    }
};

Result compare(const PokerHand& player, const PokerHand& opponent) {
    int player_rank = player.rank();
    int opponent_rank = opponent.rank();
    if (player_rank != opponent_rank) {
        return player_rank > opponent_rank ? Result::Win : Result::Loss;
    }
    auto player_vals = player.sorted_values();
    auto opponent_vals = opponent.sorted_values();
    for (size_t i = 0; i < player_vals.size(); ++i) {
        if (player_vals[i] != opponent_vals[i]) {
            return player_vals[i] > opponent_vals[i] ? Result::Win : Result::Loss;
        }
    }
    return Result::Tie;
}

int main() {
    std::string hand1_str = "KS 2H 5C JD TD", hand2_str = "AS AD AC AH JD";

    PokerHand hand1(hand1_str.c_str());
    PokerHand hand2(hand2_str.c_str());

    Result result = compare(hand1, hand2);

    if (result == Result::Win) {
        std::cout << "Win" << std::endl;
    } else if (result == Result::Loss) {
        std::cout << "Loss" << std::endl;
    } else {
        std::cout << "Tie!" << std::endl;
    }

    return 0;
}