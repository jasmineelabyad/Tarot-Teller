
from flask import Flask
from flask import render_template
from flask import jsonify
import random

app = Flask(__name__)

card_descriptions = {

    "the_fool": "New beginnings, spontaneity, a leap of faith. Unlimited potential.",
    "the_magician": "Manifestation, resourcefulness, power. Turning visions into reality.",
    "the_high_priestess": "Intuition, mystery, subconscious. Trust your inner voice.",
    "the_empress": "Fertility, abundance, nurturing. Creative energy and motherhood.",
    "the_emperor": "Authority, structure, control. Establishing order and stability.",
    "the_hierophant": "Tradition, spirituality, education. Seeking higher wisdom.",
    "the_lovers": "Love, harmony, relationships. Important choices about values.",
    "the_chariot": "Willpower, victory, determination. Overcoming conflicts.",
    "strength": "Courage, inner strength, compassion. Mastering emotions.",
    "the_hermit": "Soul-searching, introspection, wisdom. Time for solitude.",
    "wheel_of_fortune": "Destiny, cycles, turning points. Life's unpredictable nature.",
    "justice": "Fairness, truth, law. Cause and effect in action.",
    "the_hanged_man": "Surrender, new perspective. Spiritual enlightenment.",
    "death": "Transformation, endings, change. Out with the old, in with the new.",
    "temperance": "Balance, moderation, patience. Finding middle ground.",
    "the_devil": "Temptation, bondage, materialism. Breaking free from limitations.",
    "the_tower": "Sudden change, revelation. Breaking down illusions.",
    "the_star": "Hope, inspiration, serenity. Healing after difficult times.",
    "the_moon": "Illusion, intuition, subconscious. Facing fears and anxiety.",
    "the_sun": "Joy, success, vitality. Clarity and enlightenment.",
    "judgement": "Rebirth, inner calling. Answering life's purpose.",
    "the_world": "Completion, accomplishment, wholeness. The end of a cycle.",


    "ace_of_wands": "Inspiration, new opportunities. Creative energy spark.",
    "two_of_wands": "Planning, discovery. Making bold choices.",
    "three_of_wands": "Progress, expansion. Looking ahead with optimism.",
    "four_of_wands": "Celebration, harmony. Happy reunions and milestones.",
    "five_of_wands": "Conflict, competition. Healthy rivalry and debate.",
    "six_of_wands": "Victory, recognition. Public acknowledgment.",
    "seven_of_wands": "Defensiveness, perseverance. Standing your ground.",
    "eight_of_wands": "Movement, swift change. Rapid developments.",
    "nine_of_wands": "Resilience, persistence. Nearing the finish line.",
    "ten_of_wands": "Burden, responsibility. Carrying too much weight.",
    "page_of_wands": "Enthusiasm, exploration. Free-spirited energy.",
    "knight_of_wands": "Adventure, impulsiveness. Charging forward boldly.",
    "queen_of_wands": "Courage, determination. Vibrant, charismatic leader.",
    "king_of_wands": "Vision, leadership. Natural authority and charisma.",


    "ace_of_cups": "New emotions, love. Spiritual fulfillment.",
    "two_of_cups": "Partnership, connection. Mutual respect and harmony.",
    "three_of_cups": "Celebration, friendship. Joyful gatherings.",
    "four_of_cups": "Apathy, contemplation. Re-evaluating emotions.",
    "five_of_cups": "Loss, regret. Focusing on what remains.",
    "six_of_cups": "Nostalgia, childhood. Sweet memories.",
    "seven_of_cups": "Choices, illusions. Too many options.",
    "eight_of_cups": "Withdrawal, abandonment. Seeking deeper meaning.",
    "nine_of_cups": "Contentment, satisfaction. Wishes fulfilled.",
    "ten_of_cups": "Happiness, family. Emotional fulfillment.",
    "page_of_cups": "Creativity, intuition. New emotional beginnings.",
    "knight_of_cups": "Romance, idealism. Following the heart.",
    "queen_of_cups": "Compassion, empathy. Emotional wisdom.",
    "king_of_cups": "Emotional balance. Wisdom and control.",


    "ace_of_swords": "Breakthrough, clarity. Mental clarity triumphs.",
    "two_of_swords": "Indecision, stalemate. Difficult choices.",
    "three_of_swords": "Heartbreak, grief. Emotional pain and sorrow.",
    "four_of_swords": "Rest, recuperation. Taking a mental break.",
    "five_of_swords": "Conflict, tension. Winning at a cost.",
    "six_of_swords": "Transition, moving on. Leaving difficulties behind.",
    "seven_of_swords": "Deception, strategy. Acting stealthily.",
    "eight_of_swords": "Restriction, powerlessness. Feeling trapped.",
    "nine_of_swords": "Anxiety, worry. Overthinking at night.",
    "ten_of_swords": "Betrayal, rock bottom. Painful endings.",
    "page_of_swords": "Curiosity, vigilance. Seeking the truth.",
    "knight_of_swords": "Action, haste. Charging ahead boldly.",
    "queen_of_swords": "Independence, clarity. Sharp intellect.",
    "king_of_swords": "Authority, truth. Intellectual power.",


    "ace_of_pentacles": "Opportunity, prosperity. New financial beginnings.",
    "two_of_pentacles": "Balance, adaptability. Juggling priorities.",
    "three_of_pentacles": "Teamwork, collaboration. Building skills.",
    "four_of_pentacles": "Security, conservatism. Holding onto resources.",
    "five_of_pentacles": "Hardship, poverty. Financial struggle.",
    "six_of_pentacles": "Generosity, charity. Giving and receiving.",
    "seven_of_pentacles": "Patience, investment. Long-term growth.",
    "eight_of_pentacles": "Diligence, craftsmanship. Focused work.",
    "nine_of_pentacles": "Luxury, self-sufficiency. Enjoying rewards.",
    "ten_of_pentacles": "Legacy, family. Long-term security.",
    "page_of_pentacles": "Manifestation, study. Practical learning.",
    "knight_of_pentacles": "Reliability, routine. Steady progress.",
    "queen_of_pentacles": "Nurturing, abundance. Practical and generous.",
    "king_of_pentacles": "Wealth, security. Business acumen."
}

all_cards = list(card_descriptions.keys())

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/draw_card')
def draw_card():
    card = random.choice(all_cards)
    description = card_descriptions.get(card, "No description available.")
    return jsonify({"card": card, "description": description})

@app.route('/draw_three_cards')
def draw_three_cards():
    drawn_cards = random.sample(all_cards, 3)
    descriptions = {card: card_descriptions.get(card, "No description available.") for card in drawn_cards}
    return jsonify({"cards": drawn_cards, "descriptions": descriptions})

if __name__ == '__main__':
    app.run(debug=True)
