const startButton = document.getElementById('startButton');
const drawOneCardBtn = document.getElementById('drawOneCardBtn');
const drawThreeCardsBtn = document.getElementById('drawThreeCardsBtn');
const overallReadingBtn = document.getElementById('overallReadingBtn');
const newReadingBtn = document.getElementById('newReadingBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const cardsContainer = document.getElementById('cards');

let drawnCards = [];

document.addEventListener('DOMContentLoaded', function() {
    startButton.addEventListener('click', startTarot);
    drawOneCardBtn.addEventListener('click', drawOneCard);
    drawThreeCardsBtn.addEventListener('click', drawThreeCards);
    overallReadingBtn.addEventListener('click', generateOverallReading);
    newReadingBtn.addEventListener('click', newReading);
    backToHomeBtn.addEventListener('click', backToHome);
});

function backToHome() {
    document.getElementById('tarot-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    cardsContainer.innerHTML = '';
    drawnCards = [];
    drawOneCardBtn.style.display = 'inline-block';
    drawThreeCardsBtn.style.display = 'inline-block';
    overallReadingBtn.style.display = 'none';
}

function startTarot() {
    console.log('Starting tarot reading...');
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('tarot-page').classList.remove('hidden');

    // Make sure the buttons are visible
    document.getElementById('drawOneCardBtn').style.display = 'inline-block';
    document.getElementById('drawThreeCardsBtn').style.display = 'inline-block';
    document.getElementById('overallReadingBtn').style.display = 'none';
    document.getElementById('newReadingBtn').style.display = 'inline-block';
    document.getElementById('backToHomeBtn').style.display = 'inline-block';
}

function drawOneCard() {
    const card = drawCard();
    drawnCards = [card];
    updateButtonStates();
    displayCard(drawnCards);
}

function drawThreeCards() {
    const cards = [drawCard(), drawCard(), drawCard()];
    drawnCards = cards;
    updateButtonStates();
    displayCard(cards);
}

function updateButtonStates() {
    drawOneCardBtn.style.display = 'none';
    drawThreeCardsBtn.style.display = 'none';
    overallReadingBtn.style.display = 'inline-block';
}

function displayCard(cards) {
    cardsContainer.innerHTML = '';

    const readingTitle = document.createElement('h2');
    readingTitle.className = 'reading-title';
    readingTitle.textContent = 'Here is your reading...';
    cardsContainer.appendChild(readingTitle);

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card-container');

        const img = document.createElement('img');
        img.src = `cards/${card}.jpg`;
        img.alt = card;
        img.classList.add('tarot-card');

        cardElement.appendChild(img);
        cardsContainer.appendChild(cardElement);
    });
}

function generateOverallReading() {
    cardsContainer.innerHTML = '';

    const readingTitle = document.createElement('h2');
    readingTitle.className = 'reading-title';
    readingTitle.textContent = 'Here is your reading...';
    cardsContainer.appendChild(readingTitle);

    const readingContainer = document.createElement('div');
    readingContainer.classList.add('reading-container');

    if (drawnCards.length === 1) {
        addCardToReading(readingContainer, drawnCards[0], "Your Card");
    }
    else if (drawnCards.length === 3) {
        const positions = ["Past", "Present", "Future"];
        drawnCards.forEach((card, index) => {
            addCardToReading(readingContainer, card, positions[index]);
        });

        const interpretation = document.createElement('div');
        interpretation.classList.add('interpretation');

        const interpretationTitle = document.createElement('h3');
        interpretationTitle.textContent = 'Combined Meaning';
        interpretation.appendChild(interpretationTitle);

        const interpretationText = document.createElement('p');
        interpretationText.textContent = generateCombinedMeaning(drawnCards);
        interpretation.appendChild(interpretationText);

        readingContainer.appendChild(interpretation);
    }

    cardsContainer.appendChild(readingContainer);
}

function addCardToReading(container, card, position) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('reading-card');

    const title = document.createElement('h3');
    title.textContent = `${position}: ${formatCardName(card)}`;
    cardElement.appendChild(title);

    const description = document.createElement('p');
    description.textContent = getCardDescription(card);
    cardElement.appendChild(description);

    container.appendChild(cardElement);
}

function newReading() {
    cardsContainer.innerHTML = '';
    drawnCards = [];
    drawOneCardBtn.style.display = 'inline-block';
    drawThreeCardsBtn.style.display = 'inline-block';
    overallReadingBtn.style.display = 'none';
}

function formatCardName(card) {
    return card.replace(/_/g, ' ')
               .replace(/\b\w/g, l => l.toUpperCase());
}

function drawCard() {
    const allCards = [
        // Major Arcana
        "the_fool", "the_magician", "the_high_priestess", "the_empress",
        "the_emperor", "the_hierophant", "the_lovers", "the_chariot",
        "strength", "the_hermit", "the_wheel_of_fortune", "justice",
        "the_hanged_man", "death", "temperance", "the_devil",
        "the_tower", "the_star", "the_moon", "the_sun",
        "judgement", "the_world",

        // Pentacles
        "ace_of_pentacles", "two_of_pentacles", "three_of_pentacles", "four_of_pentacles",
        "five_of_pentacles", "six_of_pentacles", "seven_of_pentacles", "eight_of_pentacles",
        "nine_of_pentacles", "ten_of_pentacles",
        "page_of_pentacles", "knight_of_pentacles", "queen_of_pentacles", "king_of_pentacles",

        // Swords
        "ace_of_swords", "two_of_swords", "three_of_swords", "four_of_swords",
        "five_of_swords", "six_of_swords", "seven_of_swords", "eight_of_swords",
        "nine_of_swords", "ten_of_swords",
        "page_of_swords", "knight_of_swords", "queen_of_swords", "king_of_swords",

        // Cups
        "ace_of_cups", "two_of_cups", "three_of_cups", "four_of_cups",
        "five_of_cups", "six_of_cups", "seven_of_cups", "eight_of_cups",
        "nine_of_cups", "ten_of_cups",
        "page_of_cups", "knight_of_cups", "queen_of_cups", "king_of_cups",

        // Wands
        "ace_of_wands", "two_of_wands", "three_of_wands", "four_of_wands",
        "five_of_wands", "six_of_wands", "seven_of_wands", "eight_of_wands",
        "nine_of_wands", "ten_of_wands",
        "page_of_wands", "knight_of_wands", "queen_of_wands", "king_of_wands"
    ];
    return allCards[Math.floor(Math.random() * allCards.length)];
}

function getCardDescription(card) {
    const cardDescriptions = {
        // Major Arcana
        "the_fool": "New beginnings, spontaneity, a leap of faith. The Fool represents unlimited potential and the start of a journey.",
        "the_magician": "Manifestation, resourcefulness, power. The Magician shows you have all the tools you need to create your reality.",
        "the_high_priestess": "Intuition, mystery, the subconscious. The High Priestess calls you to trust your inner wisdom.",
        "the_empress": "Fertility, abundance, nurturing. The Empress represents creativity, nature, and maternal energy.",
        "the_emperor": "Authority, structure, control. The Emperor represents leadership, stability, and fatherly energy.",
        "the_hierophant": "Tradition, spirituality, education. The Hierophant represents conventional beliefs and institutions.",
        "the_lovers": "Love, harmony, choices. The Lovers represent relationships and important decisions of the heart.",
        "the_chariot": "Willpower, determination, victory. The Chariot represents overcoming obstacles through focus and control.",
        "strength": "Courage, patience, inner strength. Strength represents mastering emotions through compassion.",
        "the_hermit": "Soul-searching, introspection, solitude. The Hermit represents inner guidance and withdrawal from society.",
        "wheel_of_fortune": "Luck, cycles, destiny. The Wheel represents life's ups and downs and the turning of fate.",
        "the_wheel_of_fortune": "Luck, cycles, destiny. The Wheel represents life's ups and downs and the turning of fate.",
        "justice": "Fairness, truth, law. Justice represents cause and effect and the search for equilibrium.",
        "the_hanged_man": "Sacrifice, new perspective, suspension. The Hanged Man represents letting go and seeing things differently.",
        "death": "Endings, transformation, transition. Death represents necessary endings that make way for new beginnings.",
        "temperance": "Balance, moderation, patience. Temperance represents finding the middle path and harmonious blending.",
        "the_devil": "Bondage, materialism, shadow self. The Devil represents unhealthy attachments and limiting beliefs.",
        "the_tower": "Sudden change, revelation, destruction. The Tower represents upheaval that leads to awakening.",
        "the_star": "Hope, inspiration, serenity. The Star represents healing, optimism, and spiritual guidance.",
        "the_moon": "Illusion, intuition, the subconscious. The Moon represents confusion that precedes enlightenment.",
        "the_sun": "Joy, success, vitality. The Sun represents happiness, confidence, and childlike wonder.",
        "judgement": "Rebirth, inner calling, absolution. Judgement represents awakening to one's true purpose.",
        "the_world": "Completion, wholeness, accomplishment. The World represents fulfillment and successful conclusions.",

        // Pentacles
        "ace_of_pentacles": "New financial opportunity, prosperity, manifestation.",
        "two_of_pentacles": "Balance, adaptability, resource juggling.",
        "three_of_pentacles": "Teamwork, collaboration, craftsmanship.",
        "four_of_pentacles": "Security, conservatism, possessiveness.",
        "five_of_pentacles": "Financial loss, poverty, isolation.",
        "six_of_pentacles": "Generosity, charity, giving and receiving.",
        "seven_of_pentacles": "Patience, long-term vision, perseverance.",
        "eight_of_pentacles": "Apprenticeship, skill development, diligence.",
        "nine_of_pentacles": "Luxury, self-sufficiency, financial independence.",
        "ten_of_pentacles": "Wealth, family, legacy, establishment.",
        "page_of_pentacles": "Manifestation, financial opportunity, new venture.",
        "knight_of_pentacles": "Reliability, hard work, routine.",
        "queen_of_pentacles": "Practicality, nurturing, financial security.",
        "king_of_pentacles": "Abundance, prosperity, financial mastery.",

        // Swords
        "ace_of_swords": "Mental clarity, breakthroughs, new ideas.",
        "two_of_swords": "Indecision, stalemate, difficult choices.",
        "three_of_swords": "Heartbreak, sorrow, emotional pain.",
        "four_of_swords": "Rest, recovery, contemplation.",
        "five_of_swords": "Conflict, tension, winning at all costs.",
        "six_of_swords": "Transition, moving on, leaving difficulties behind.",
        "seven_of_swords": "Deception, strategy, stealth.",
        "eight_of_swords": "Restriction, powerlessness, self-imposed limitations.",
        "nine_of_swords": "Anxiety, worry, fear, nightmares.",
        "ten_of_swords": "Painful endings, betrayal, rock bottom.",
        "page_of_swords": "Curiosity, new ideas, vigilance.",
        "knight_of_swords": "Action, impulsiveness, charging ahead.",
        "queen_of_swords": "Independence, clear boundaries, objectivity.",
        "king_of_swords": "Intellect, authority, truth-seeking.",

        // Cups
        "ace_of_cups": "New love, emotional awakening, intuition.",
        "two_of_cups": "Partnership, mutual attraction, connection.",
        "three_of_cups": "Celebration, friendship, community.",
        "four_of_cups": "Apathy, contemplation, dissatisfaction.",
        "five_of_cups": "Loss, regret, disappointment.",
        "six_of_cups": "Nostalgia, childhood memories, innocence.",
        "seven_of_cups": "Choices, fantasy, wishful thinking.",
        "eight_of_cups": "Walking away, disillusionment, leaving behind.",
        "nine_of_cups": "Wish fulfillment, satisfaction, emotional comfort.",
        "ten_of_cups": "Harmony, happy relationships, emotional fulfillment.",
        "page_of_cups": "Creative inspiration, intuitive messages, emotional openness.",
        "knight_of_cups": "Romance, charm, following the heart.",
        "queen_of_cups": "Compassion, emotional security, intuition.",
        "king_of_cups": "Emotional balance, wisdom, diplomacy.",

        // Wands
        "ace_of_wands": "Inspiration, new opportunities, creative energy.",
        "two_of_wands": "Planning, future vision, progress.",
        "three_of_wands": "Expansion, foresight, overseas opportunities.",
        "four_of_wands": "Celebration, harmony, homecoming.",
        "five_of_wands": "Competition, conflict, disagreements.",
        "six_of_wands": "Victory, success, public recognition.",
        "seven_of_wands": "Defensiveness, standing your ground, perseverance.",
        "eight_of_wands": "Movement, rapid developments, action.",
        "nine_of_wands": "Resilience, persistence, last stretch.",
        "ten_of_wands": "Burden, responsibility, being overworked.",
        "page_of_wands": "Exploration, discovery, enthusiastic energy.",
        "knight_of_wands": "Adventure, impulsiveness, passion.",
        "queen_of_wands": "Confidence, independence, vibrant energy.",
        "king_of_wands": "Leadership, vision, entrepreneurial spirit."
    };

    return cardDescriptions[card] || "The cards don't say anything...";
}

function generateCombinedMeaning(cards) {
    if (cards.length !== 3) return "";

    const [past, present, future] = cards.map(formatCardName);
    const meanings = cards.map(getCardDescription);

    let interpretation = `Your three-card spread reveals:\n\n` +
                         `Past (${past}): ${meanings[0]}\n\n` +
                         `Present (${present}): ${meanings[1]}\n\n` +
                         `Future (${future}): ${meanings[2]}\n\n` +
                         `Combined Interpretation:\n`;

    const majorArcanaCount = cards.filter(card => [
        "the_fool", "the_magician", "the_high_priestess", "the_empress",
        "the_emperor", "the_hierophant", "the_lovers", "the_chariot",
        "strength", "the_hermit", "the_wheel_of_fortune", "justice",
        "the_hanged_man", "death", "temperance", "the_devil",
        "the_tower", "the_star", "the_moon", "the_sun",
        "judgement", "the_world"
    ].includes(card)).length;

    if (majorArcanaCount === 3) {
        interpretation += "This powerful trio of Major Arcana indicates a significant spiritual journey. ";
    } else if (majorArcanaCount >= 2) {
        interpretation += "Multiple Major Arcana suggest important life lessons are unfolding. ";
    }

    const suit = card => {
        if (card.includes('pentacles')) return 'pentacles';
        if (card.includes('swords')) return 'swords';
        if (card.includes('cups')) return 'cups';
        if (card.includes('wands')) return 'wands';
        return 'major';
    };

    if (suit(cards[0]) === suit(cards[1]) && suit(cards[1]) === suit(cards[2])) {
        const currentSuit = suit(cards[0]);
        interpretation += `All ${currentSuit} cards emphasize `;
        switch(currentSuit) {
            case 'pentacles': interpretation += "material and practical matters. "; break;
            case 'swords': interpretation += "mental challenges and decisions. "; break;
            case 'cups': interpretation += "emotional relationships and intuition. "; break;
            case 'wands': interpretation += "creative energy and action. "; break;
        }
    }

    interpretation += `Together, they suggest ${past} influenced your past, ` +
                     `${present} represents your current challenge, and ` +
                     `${future} indicates the likely outcome.`;

    return interpretation;
}
