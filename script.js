const majorArcana = {
  the_fool: ["New beginnings, a leap of faith, and the freedom to start before you feel completely ready.", "What would you try if certainty were not required?"],
  the_magician: ["Focused intention, resourcefulness, and the power to turn an idea into something real.", "Which tool already in your hands are you overlooking?"],
  the_high_priestess: ["Intuition, mystery, and the quiet knowledge that appears when you stop forcing an answer.", "What do you know before anyone else offers an opinion?"],
  the_empress: ["Abundance, creativity, care, and the patient work of helping something beautiful grow.", "What in your life needs more tenderness?"],
  the_emperor: ["Structure, leadership, boundaries, and the steady foundation that supports meaningful action.", "Where would a clearer boundary create more freedom?"],
  the_hierophant: ["Tradition, shared wisdom, and learning from the practices that have guided others before you.", "Which belief is worth keeping—and which needs revisiting?"],
  the_lovers: ["Connection, alignment, and a choice that asks you to act in harmony with your values.", "What choice brings you closer to who you want to be?"],
  the_chariot: ["Direction, determination, and the discipline to bring competing forces onto the same path.", "Where is focused movement more useful than more planning?"],
  strength: ["Courage with softness, patient influence, and the strength that comes from self-trust.", "How could gentleness be your strongest response?"],
  the_hermit: ["Solitude, inner guidance, and the clarity found by stepping back from outside noise.", "What becomes clear when you make room for silence?"],
  the_wheel_of_fortune: ["Cycles, turning points, and the reminder that no season remains unchanged forever.", "What change are you being invited to move with?"],
  justice: ["Truth, accountability, and the honest relationship between choices and their consequences.", "What decision would feel fair to your future self?"],
  the_hanged_man: ["Surrender, a changed perspective, and the wisdom of pausing before pushing forward.", "What might look different if you stopped trying to control it?"],
  death: ["Transformation, release, and an ending that clears space for the next version of your life.", "What are you ready to let become complete?"],
  temperance: ["Balance, integration, and the patient blending of opposites into a more sustainable whole.", "Where could you choose a steadier middle path?"],
  the_devil: ["Attachment, temptation, and the patterns that gain power when they remain unnamed.", "Which habit feels fixed but is actually a choice?"],
  the_tower: ["Revelation, sudden change, and the collapse of a story that can no longer hold the truth.", "What truth is asking for a more honest foundation?"],
  the_star: ["Hope, renewal, and the calm confidence that returns after a difficult passage.", "What small sign of hope deserves your attention?"],
  the_moon: ["Uncertainty, dreams, and the invitation to move carefully when not everything is visible.", "What feeling needs listening to rather than solving?"],
  the_sun: ["Joy, vitality, openness, and the confidence to let yourself be fully seen.", "Where can you allow more uncomplicated joy?"],
  judgement: ["Awakening, reflection, and the call to answer your life with greater honesty.", "What are you ready to forgive and move beyond?"],
  the_world: ["Completion, integration, and the satisfaction of seeing how far the whole journey has brought you.", "What deserves to be celebrated before you begin again?"]
};

const ranks = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];
const suitMeanings = {
  wands: ["creative energy and purposeful action", "What wants your courage and momentum?"],
  cups: ["emotion, connection, and intuitive truth", "What is your heart trying to tell you?"],
  swords: ["thought, communication, and decisive clarity", "Which thought deserves a closer look?"],
  pentacles: ["resources, work, the body, and practical growth", "What small action would make this more real?"]
};
const rankMeanings = {
  ace: "A fresh opening is appearing around", two: "A choice or partnership is shaping", three: "Growth and collaboration are expanding", four: "Stability and reflection are influencing", five: "A challenge is asking you to reassess", six: "Movement toward harmony is restoring", seven: "Patience and discernment are testing", eight: "Focused effort and momentum are developing", nine: "Experience and resilience are maturing", ten: "A cycle is reaching fullness around", page: "Curiosity and a new message are awakening", knight: "Committed movement is carrying you toward", queen: "Inner mastery and receptive wisdom support", king: "Confident leadership and responsibility guide"
};

const allCards = [...Object.keys(majorArcana)];
Object.keys(suitMeanings).forEach(suit => ranks.forEach(rank => allCards.push(`${rank}_of_${suit}`)));

const zodiacSigns = [
  ["Aries", "♈", "Mar 21 – Apr 19", "Fire", "Cardinal", ["Bold", "Direct", "Pioneering"], "Aries begins the zodiac with instinctive movement. Its gift is the courage to start; its lesson is to let direction mature alongside desire.", "Where are you ready to lead with courage, not urgency?"],
  ["Taurus", "♉", "Apr 20 – May 20", "Earth", "Fixed", ["Grounded", "Devoted", "Sensual"], "Taurus values what can be tended, trusted, and enjoyed. Its gift is steadiness; its lesson is knowing when security has become resistance.", "What deserves your patient, consistent care?"],
  ["Gemini", "♊", "May 21 – Jun 20", "Air", "Mutable", ["Curious", "Adaptable", "Expressive"], "Gemini follows questions wherever they lead. Its gift is connection through language; its lesson is staying long enough to find depth.", "Which conversation could open a new possibility?"],
  ["Cancer", "♋", "Jun 21 – Jul 22", "Water", "Cardinal", ["Intuitive", "Protective", "Tender"], "Cancer creates belonging through care and memory. Its gift is emotional intelligence; its lesson is protecting without closing off.", "What would help you feel truly at home?"],
  ["Leo", "♌", "Jul 23 – Aug 22", "Fire", "Fixed", ["Radiant", "Creative", "Generous"], "Leo brings warmth, play, and heart-led expression. Its gift is brave visibility; its lesson is remembering that worth does not depend on applause.", "Where are you ready to be seen more fully?"],
  ["Virgo", "♍", "Aug 23 – Sep 22", "Earth", "Mutable", ["Perceptive", "Practical", "Devoted"], "Virgo notices what could work more beautifully. Its gift is thoughtful refinement; its lesson is allowing life to be worthy before it is perfect.", "What can you improve gently instead of judging harshly?"],
  ["Libra", "♎", "Sep 23 – Oct 22", "Air", "Cardinal", ["Diplomatic", "Graceful", "Relational"], "Libra seeks beauty, balance, and mutual understanding. Its gift is perspective; its lesson is making a choice without abandoning the self.", "What choice would create honest—not merely pleasant—peace?"],
  ["Scorpio", "♏", "Oct 23 – Nov 21", "Water", "Fixed", ["Intense", "Loyal", "Transformative"], "Scorpio is willing to meet what lies beneath the surface. Its gift is transformation; its lesson is letting trust be stronger than control.", "What truth are you ready to meet without looking away?"],
  ["Sagittarius", "♐", "Nov 22 – Dec 21", "Fire", "Mutable", ["Expansive", "Frank", "Adventurous"], "Sagittarius follows meaning toward a wider horizon. Its gift is optimism; its lesson is honoring the details that make a vision real.", "Which horizon is calling you to grow?"],
  ["Capricorn", "♑", "Dec 22 – Jan 19", "Earth", "Cardinal", ["Ambitious", "Steady", "Resourceful"], "Capricorn builds patiently toward what matters. Its gift is lasting achievement; its lesson is letting rest and tenderness belong in the plan.", "Which long-term promise deserves your next small step?"],
  ["Aquarius", "♒", "Jan 20 – Feb 18", "Air", "Fixed", ["Original", "Independent", "Visionary"], "Aquarius sees beyond convention toward what could serve the whole. Its gift is innovation; its lesson is keeping ideas connected to feeling.", "What future are you quietly helping create?"],
  ["Pisces", "♓", "Feb 19 – Mar 20", "Water", "Mutable", ["Empathic", "Imaginative", "Spiritual"], "Pisces moves through symbol, feeling, and porous imagination. Its gift is compassion; its lesson is giving sensitivity a clear container.", "What does your imagination know that logic has missed?"]
];

const retrogrades2026 = [
  { planet: "Mercury", symbol: "☿", periods: [["2026-02-26", "2026-03-20"], ["2026-06-29", "2026-07-23"], ["2026-10-24", "2026-11-13"]], meaning: "Communication, plans, travel, and the details worth reviewing." },
  { planet: "Venus", symbol: "♀", periods: [["2026-10-03", "2026-11-14"]], meaning: "Relationships, values, beauty, pleasure, and the way you receive." },
  { planet: "Mars", symbol: "♂", periods: [], meaning: "Drive, desire, conflict, and how you direct your energy. No retrograde in 2026." },
  { planet: "Jupiter", symbol: "♃", periods: [["2026-01-01", "2026-03-10"], ["2026-12-13", "2026-12-31"]], meaning: "Beliefs, growth, opportunity, and the meaning behind your ambitions." },
  { planet: "Saturn", symbol: "♄", periods: [["2026-07-26", "2026-12-10"]], meaning: "Commitments, boundaries, responsibility, and long-term structures." },
  { planet: "Uranus", symbol: "♅", periods: [["2026-01-01", "2026-02-04"], ["2026-09-10", "2026-12-31"]], meaning: "Change, freedom, disruption, and the courage to do things differently." },
  { planet: "Neptune", symbol: "♆", periods: [["2026-07-07", "2026-12-12"]], meaning: "Dreams, ideals, intuition, and the places where clarity has softened." },
  { planet: "Pluto", symbol: "♇", periods: [["2026-05-06", "2026-10-16"]], meaning: "Power, truth, release, and slow transformation below the surface." }
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const readingFocuses = {
  general: { label: "General", placeholder: "What is asking for your attention?", intro: "A message for the season you are in.", lens: "Notice the theme that connects your inner world with the choices in front of you." },
  love: { label: "Love", placeholder: "What would you like to understand about love or connection?", intro: "A reflection on love, connection, and the heart.", lens: "Read these cards through the lens of reciprocity, honest desire, and the boundaries that protect tenderness." },
  career: { label: "Career", placeholder: "What would you like to illuminate about your work or purpose?", intro: "A reflection on work, purpose, and meaningful progress.", lens: "Read these cards through the lens of your talents, practical next steps, and the work that feels aligned." },
  spiritual: { label: "Spiritual path", placeholder: "What is your spirit asking you to notice?", intro: "A reflection on intuition, growth, and your inner path.", lens: "Read these cards as invitations to deepen trust in your intuition and your relationship with the unknown." },
  decision: { label: "Decision", placeholder: "Which choice or crossroads would you like clarity on?", intro: "A reflection for the crossroads before you.", lens: "Read these cards as perspective rather than instruction: notice which choice creates expansion, integrity, and peace." }
};
const state = { cards: [], question: "", focus: "general" };
let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
const calendarEventCache = new Map();

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindTarot();
  bindBirthChart();
  bindCalendar();
  renderZodiac();
  renderRetrogrades();
  renderMoon();
  renderCalendar();
  renderDailyWhisper();
});

function bindBirthChart() {
  $("#birthChartForm").addEventListener("submit", async event => {
    event.preventDefault();
    const date = $("#birthDate").value;
    const time = $("#birthTime").value;
    const location = $("#birthLocation").value.trim();
    const note = $("#birthChartNote");
    const submit = $("#chartSubmit");
    if (!date || !location) return;
    note.classList.remove("is-error");
    note.textContent = "Finding your birthplace and mapping the sky…";
    submit.disabled = true;
    try {
      if (typeof Astronomy === "undefined") throw new Error("The astronomy calculator did not load.");
      const place = await geocodeLocation(location);
      const birthMoment = zonedTimeToUtc(date, time || "12:00", place.timezone);
      if (birthMoment > new Date()) throw new Error("Please enter a birth date in the past.");
      renderBirthChart(birthMoment, place, Boolean(time));
      note.textContent = time ? "Chart calculated for the local date and time at your birthplace." : "Birth time was left blank, so noon was used and the Rising sign is not shown.";
    } catch (error) {
      note.classList.add("is-error");
      note.textContent = error.message || "We could not calculate that chart. Please check the details and try again.";
    } finally {
      submit.disabled = false;
    }
  });
}

async function geocodeLocation(location) {
  const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("The location service is unavailable right now. Please try again.");
  const data = await response.json();
  if (!data.results?.length) throw new Error("We could not find that birthplace. Try “City, Country”.");
  return data.results[0];
}

function renderBirthChart(date, place, hasBirthTime) {
  const sunLongitude = Astronomy.SunPosition(date).elon;
  const moonLongitude = Astronomy.EclipticGeoMoon(date).lon;
  const sun = zodiacFromLongitude(sunLongitude);
  const moon = zodiacFromLongitude(moonLongitude);
  const risingLongitude = hasBirthTime ? calculateAscendant(date, place.latitude, place.longitude) : null;
  const rising = risingLongitude === null ? null : zodiacFromLongitude(risingLongitude);
  const roles = [
    ["Sun", "☉", sun, "Core identity and the way you grow into yourself."],
    ["Moon", "☽", moon, "Emotional needs, instincts, and your inner sense of home."],
    ["Rising", "↑", rising, "First impressions and the style of your approach to life."]
  ];
  const planetBodies = [
    ["Mercury", "☿", Astronomy.Body.Mercury], ["Venus", "♀", Astronomy.Body.Venus],
    ["Mars", "♂", Astronomy.Body.Mars], ["Jupiter", "♃", Astronomy.Body.Jupiter],
    ["Saturn", "♄", Astronomy.Body.Saturn]
  ];
  const placements = planetBodies.map(([name, symbol, body]) => {
    const longitude = Astronomy.Ecliptic(Astronomy.GeoVector(body, date, true)).elon;
    return [name, symbol, zodiacFromLongitude(longitude)];
  });
  const placeName = [place.name, place.admin1, place.country].filter(Boolean).filter((item, index, list) => list.indexOf(item) === index).join(", ");
  const result = $("#birthChartResult");
  result.innerHTML = `<div class="chart-result-header"><p>Your sky over</p><strong>${escapeHtml(placeName)}</strong><p>${date.toLocaleString(undefined, { dateStyle: "long", timeStyle: hasBirthTime ? "short" : undefined, timeZone: place.timezone })}</p></div><div class="big-three">${roles.map(([role, symbol, sign, description]) => `<div class="big-three-card"><span class="chart-glyph" aria-hidden="true"><i>${symbol}&#xFE0E;</i></span><small>${role}</small><h4>${sign ? sign[0] : "Time needed"}</h4><p>${sign ? description : "Add your birth time to calculate this placement."}</p></div>`).join("")}</div><div class="planet-placements">${placements.map(([name, symbol, sign]) => `<div class="placement"><span class="chart-glyph chart-glyph--small" aria-hidden="true"><i>${symbol}&#xFE0E;</i></span><small>${name}</small><b>${sign[0]}</b></div>`).join("")}</div><p class="chart-disclaimer">This tropical chart is a reflective astrology tool. Planetary positions use Astronomy Engine; the Rising sign is an approximate whole-degree calculation and depends strongly on an accurate birth time.</p>`;
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function zodiacFromLongitude(longitude) {
  const normalized = ((longitude % 360) + 360) % 360;
  return zodiacSigns[Math.floor(normalized / 30)];
}

function calculateAscendant(date, latitude, longitude) {
  const siderealDegrees = (Astronomy.SiderealTime(date) * 15 + longitude + 360) % 360;
  const theta = siderealDegrees * Math.PI / 180;
  const phi = latitude * Math.PI / 180;
  const epsilon = 23.4392911 * Math.PI / 180;
  const ascendant = Math.atan2(-Math.cos(theta), Math.sin(theta) * Math.cos(epsilon) + Math.tan(phi) * Math.sin(epsilon)) * 180 / Math.PI;
  return (ascendant + 540) % 360;
}

function zonedTimeToUtc(dateValue, timeValue, timeZone) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  let guess = Date.UTC(year, month - 1, day, hour, minute);
  for (let i = 0; i < 2; i++) {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(guess));
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    const rendered = Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day), Number(values.hour), Number(values.minute));
    guess -= rendered - Date.UTC(year, month - 1, day, hour, minute);
  }
  return new Date(guess);
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
}

function bindNavigation() {
  $$('[data-page]').forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
  $("#startButton").addEventListener("click", () => showPage("tarot"));
  $("#jasmineChatButton").addEventListener("click", event => openJasmineChat(event.currentTarget));
  $("#menuButton").addEventListener("click", () => {
    const open = $(".main-nav").classList.toggle("is-open");
    $("#menuButton").setAttribute("aria-expanded", String(open));
  });
}

function openJasmineChat(button) {
  const originalLabel = button.innerHTML;
  let attempts = 0;
  button.classList.add("is-waiting");
  button.textContent = "Calling Jasmine…";
  const openWhenReady = window.setInterval(() => {
    const toggle = document.querySelector(".chat-window-toggle");
    const chatWindow = document.querySelector(".chat-window");
    attempts++;
    if (toggle) {
      window.clearInterval(openWhenReady);
      if (!chatWindow || getComputedStyle(chatWindow).display === "none") toggle.click();
      button.classList.remove("is-waiting");
      button.innerHTML = originalLabel;
    } else if (attempts >= 20) {
      window.clearInterval(openWhenReady);
      button.textContent = "Jasmine is beyond the veil";
      window.setTimeout(() => {
        button.classList.remove("is-waiting");
        button.innerHTML = originalLabel;
      }, 2200);
    }
  }, 150);
}

function showPage(name) {
  const target = name === "home" ? "home" : name;
  $$('[data-page-panel]').forEach(panel => { panel.hidden = panel.dataset.pagePanel !== target; });
  $$(".nav-link").forEach(link => link.classList.toggle("is-active", link.dataset.page === target || (target === "home" && link.dataset.page === "tarot")));
  $(".main-nav").classList.remove("is-open");
  $("#menuButton").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindTarot() {
  const input = $("#questionInput");
  input.addEventListener("input", () => { $("#questionCount").textContent = input.value.length; });
  $$("#readingFocusTabs button").forEach(button => button.addEventListener("click", () => {
    state.focus = button.dataset.focus;
    $$("#readingFocusTabs button").forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
    input.placeholder = readingFocuses[state.focus].placeholder;
  }));
  $("#drawOneCardBtn").addEventListener("click", () => drawCards(1));
  $("#drawThreeCardsBtn").addEventListener("click", () => drawCards(3));
  $("#newReadingBtn").addEventListener("click", resetReading);
  $("#overallReadingBtn").addEventListener("click", revealOverallReading);
}

function bindCalendar() {
  $("#calendarPrev").addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    renderCalendar();
  });
  $("#calendarNext").addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    renderCalendar();
  });
  $("#calendarToday").addEventListener("click", () => {
    const now = new Date();
    calendarCursor = new Date(now.getFullYear(), now.getMonth(), 1);
    renderCalendar();
  });
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const events = getCalendarEvents(year);
  const title = calendarCursor.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  $("#calendarMonthTitle").textContent = title;
  const firstDay = new Date(year, month, 1);
  const gridStart = new Date(year, month, 1 - firstDay.getDay());
  const todayKey = dateKey(new Date());
  const cells = [];
  for (let index = 0; index < 42; index++) {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
    const key = dateKey(date);
    const dayEvents = events.filter(event => dateKey(event.date) === key);
    const cell = document.createElement("div");
    cell.className = `calendar-day${date.getMonth() !== month ? " is-outside" : ""}${key === todayKey ? " is-today" : ""}`;
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", `${date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}${dayEvents.length ? `: ${dayEvents.map(event => event.label).join(", ")}` : ""}`);
    const visibleEvents = dayEvents.slice(0, 3);
    cell.innerHTML = `<span class="day-number">${date.getDate()}</span><div class="day-events">${visibleEvents.map(calendarEventMarkup).join("")}${dayEvents.length > 3 ? `<span class="more-events">+${dayEvents.length - 3} more</span>` : ""}</div>`;
    cells.push(cell);
  }
  $("#calendarGrid").replaceChildren(...cells);
  renderCalendarAgenda(events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month));
}

function renderCalendarAgenda(events) {
  const agenda = $("#calendarAgenda");
  if (!events.length) {
    agenda.innerHTML = '<p class="empty-agenda">A quiet sky this month. Use the spaciousness well.</p>';
    return;
  }
  agenda.innerHTML = events.sort((a, b) => a.date - b.date).map(event => `<article class="agenda-event"><div class="agenda-date"><strong>${event.date.getDate()}</strong><span>${event.date.toLocaleDateString(undefined, { month: "short" })}</span></div><div class="agenda-copy"><small>${event.category}</small><p>${event.label}</p></div></article>`).join("");
}

function calendarEventMarkup(event) {
  return `<span class="calendar-event calendar-event--${event.type}"><i class="event-dot event-dot--${event.type}"></i>${event.label}</span>`;
}

function getCalendarEvents(year) {
  if (calendarEventCache.has(year)) return calendarEventCache.get(year);
  const events = [];
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));
  const add = (date, label, type, category) => {
    const value = date instanceof Date ? date : date.date;
    if (value >= start && value < end) events.push({ date: new Date(value), label, type, category });
  };
  if (typeof Astronomy !== "undefined") {
    addMoonQuarters(start, end, add);
    addSolarIngresses(year, start, add);
    addEclipses(start, end, add);
    addPlanetIngresses(year, add);
  }
  addRetrogradeStations(year, add);
  events.sort((a, b) => a.date - b.date);
  calendarEventCache.set(year, events);
  return events;
}

function addMoonQuarters(start, end, add) {
  const names = ["New Moon", "First Quarter Moon", "Full Moon", "Last Quarter Moon"];
  let quarter = Astronomy.SearchMoonQuarter(new Date(start.getTime() - 86400000));
  let guard = 0;
  while (quarter.time.date < end && guard++ < 60) {
    if (quarter.time.date >= start) add(quarter.time, names[quarter.quarter], "moon", "Lunar phase");
    quarter = Astronomy.NextMoonQuarter(quarter);
  }
}

function addSolarIngresses(year, start, add) {
  zodiacSigns.forEach((sign, index) => {
    const event = Astronomy.SearchSunLongitude(index * 30, start, 370);
    if (event) add(event, `${sign[0]} season begins`, "season", "Zodiac season");
  });
}

function addEclipses(start, end, add) {
  let solar = Astronomy.SearchGlobalSolarEclipse(start);
  let solarGuard = 0;
  while (solar.peak.date < end && solarGuard++ < 5) {
    add(solar.peak, "Solar eclipse · reset and realignment", "cosmic", "Eclipse");
    solar = Astronomy.NextGlobalSolarEclipse(solar.peak);
  }
  let lunar = Astronomy.SearchLunarEclipse(start);
  let lunarGuard = 0;
  while (lunar.peak.date < end && lunarGuard++ < 5) {
    add(lunar.peak, "Lunar eclipse · illumination and release", "cosmic", "Eclipse");
    lunar = Astronomy.NextLunarEclipse(lunar.peak);
  }
}

function addPlanetIngresses(year, add) {
  const bodies = [
    ["Jupiter", Astronomy.Body.Jupiter], ["Saturn", Astronomy.Body.Saturn],
    ["Uranus", Astronomy.Body.Uranus], ["Neptune", Astronomy.Body.Neptune], ["Pluto", Astronomy.Body.Pluto]
  ];
  bodies.forEach(([name, body]) => {
    let previousDate = new Date(Date.UTC(year - 1, 11, 31, 12));
    let previousSign = signIndexForBody(body, previousDate);
    const days = Math.round((Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 86400000);
    for (let day = 0; day < days; day++) {
      const date = new Date(Date.UTC(year, 0, 1 + day, 12));
      const sign = signIndexForBody(body, date);
      if (sign !== previousSign) add(date, `${name} enters ${zodiacSigns[sign][0]}`, "cosmic", "Planetary ingress");
      previousSign = sign;
      previousDate = date;
    }
  });
}

function signIndexForBody(body, date) {
  const longitude = Astronomy.Ecliptic(Astronomy.GeoVector(body, date, true)).elon;
  return Math.floor((((longitude % 360) + 360) % 360) / 30);
}

function addRetrogradeStations(year, add) {
  if (year !== 2026) return;
  retrogrades2026.forEach(item => item.periods.forEach(([start, end]) => {
    const startDate = localDate(start);
    const endDate = localDate(end);
    if (!(startDate.getMonth() === 0 && startDate.getDate() === 1)) add(startDate, `${item.planet} stations retrograde`, "retrograde", "Retrograde begins");
    if (!(endDate.getMonth() === 11 && endDate.getDate() === 31)) add(endDate, `${item.planet} stations direct`, "retrograde", "Retrograde ends");
  }));
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function drawCards(count) {
  state.question = $("#questionInput").value.trim();
  state.cards = shuffle([...allCards]).slice(0, count);
  $("#spreadChooser").hidden = true;
  $("#readingFocusTabs").hidden = true;
  $(".question-field").hidden = true;
  $("#tarotPage .section-heading").hidden = true;
  $("#readingResult").hidden = false;
  $("#overallReading").hidden = true;
  const focus = readingFocuses[state.focus];
  $("#resultPrompt").textContent = state.question ? `${focus.label} · “${state.question}”` : focus.intro;
  const positions = getSpreadPositions(count, state.focus);
  $("#cards").replaceChildren(...state.cards.map((card, index) => createCard(card, positions[index], index)));
  setTimeout(() => $(".card-flip")?.focus(), 500);
}

function createCard(card, position, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "tarot-card";
  const label = document.createElement("p");
  label.className = "card-position";
  label.textContent = position;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card-flip";
  button.style.setProperty("--delay", `${index * 160}ms`);
  button.setAttribute("aria-label", `Reveal ${position} card`);
  const inner = document.createElement("span");
  inner.className = "card-inner";
  const front = document.createElement("span");
  front.className = "card-face card-front";
  const image = document.createElement("img");
  image.src = `cards/${card}.jpg`;
  image.alt = formatCardName(card);
  image.loading = "lazy";
  image.onerror = () => { image.src = "cards/the_star.jpg"; };
  front.append(image);
  const back = document.createElement("span");
  back.className = "card-face card-back";
  const title = document.createElement("h3");
  title.textContent = formatCardName(card);
  const text = document.createElement("p");
  text.textContent = getCardMeaning(card)[0];
  back.append(title, text);
  inner.append(front, back);
  button.append(inner);
  button.addEventListener("click", () => {
    const flipped = button.classList.toggle("is-flipped");
    button.setAttribute("aria-label", `${flipped ? "Hide" : "Reveal"} ${position} card: ${formatCardName(card)}`);
  });
  const hint = document.createElement("p");
  hint.className = "card-hint";
  hint.textContent = "Tap card to turn it over";
  wrapper.append(label, button, hint);
  return wrapper;
}

function revealOverallReading() {
  const content = $("#overallReadingContent");
  const positions = getSpreadPositions(state.cards.length, state.focus);
  content.replaceChildren(...state.cards.map((card, index) => {
    const section = document.createElement("div");
    section.className = "reading-part";
    const title = document.createElement("strong");
    title.textContent = `${positions[index]} · ${formatCardName(card)}`;
    const meaning = document.createElement("span");
    meaning.textContent = getCardMeaning(card)[0];
    section.append(title, meaning);
    return section;
  }));
  const prompt = document.createElement("p");
  prompt.textContent = combinePrompts(state.cards);
  content.append(prompt);
  $("#overallReading").hidden = false;
  $("#overallReading").focus({ preventScroll: true });
  $("#overallReading").scrollIntoView({ behavior: "smooth", block: "center" });
}

function getSpreadPositions(count, focus) {
  if (count === 1) return [`${readingFocuses[focus].label} compass`];
  const positions = {
    general: ["Past influence", "Present focus", "Future possibility"],
    love: ["What shaped this", "What asks for care", "What may unfold"],
    career: ["Experience", "Present work", "Next horizon"],
    spiritual: ["The lesson", "Current energy", "The invitation"],
    decision: ["What led here", "What to weigh", "The way forward"]
  };
  return positions[focus];
}

function resetReading() {
  state.cards = [];
  $("#readingResult").hidden = true;
  $("#spreadChooser").hidden = false;
  $("#readingFocusTabs").hidden = false;
  $(".question-field").hidden = false;
  $("#tarotPage .section-heading").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCardMeaning(card) {
  if (majorArcana[card]) return majorArcana[card];
  const [rank, suit] = card.split("_of_");
  return [`${rankMeanings[rank]} ${suitMeanings[suit][0]}.`, suitMeanings[suit][1]];
}

function combinePrompts(cards) {
  const prompts = cards.map(card => getCardMeaning(card)[1]);
  const focus = readingFocuses[state.focus];
  if (cards.length === 1) return `${focus.lens} A question to carry with you: ${prompts[0]}`;
  const majorCount = cards.filter(card => majorArcana[card]).length;
  const lead = majorCount >= 2 ? "With several Major Arcana present, this spread points to a meaningful turning point." : "Together, these cards suggest a movement from what shaped you, through what needs attention, toward a choice still taking form.";
  return `${lead} ${focus.lens} Sit with this: ${prompts[1]}`;
}

function renderZodiac() {
  const wheel = $("#zodiacWheel");
  zodiacSigns.forEach((sign, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "zodiac-button";
    button.setAttribute("role", "listitem");
    button.innerHTML = `<span class="zodiac-symbol" aria-hidden="true"><i>${sign[1]}&#xFE0E;</i></span><b>${sign[0]}</b><small>${sign[2]}</small>`;
    button.addEventListener("click", () => selectZodiac(index));
    wheel.append(button);
  });
  const today = new Date();
  const dateNumber = (today.getMonth() + 1) * 100 + today.getDate();
  const likelyIndex = dateNumber >= 323 && dateNumber <= 419 ? 0 : dateNumber >= 420 && dateNumber <= 520 ? 1 : dateNumber >= 521 && dateNumber <= 620 ? 2 : dateNumber >= 621 && dateNumber <= 722 ? 3 : dateNumber >= 723 && dateNumber <= 822 ? 4 : dateNumber >= 823 && dateNumber <= 922 ? 5 : dateNumber >= 923 && dateNumber <= 1022 ? 6 : dateNumber >= 1023 && dateNumber <= 1121 ? 7 : dateNumber >= 1122 && dateNumber <= 1221 ? 8 : (dateNumber >= 1222 || dateNumber <= 119) ? 9 : dateNumber <= 218 ? 10 : 11;
  selectZodiac(likelyIndex);
}

function selectZodiac(index) {
  const sign = zodiacSigns[index];
  $$(".zodiac-button").forEach((button, i) => button.classList.toggle("is-active", i === index));
  $("#zodiacDetail").innerHTML = `<div class="large-symbol" aria-hidden="true"><i>${sign[1]}&#xFE0E;</i></div><p class="zodiac-meta">${sign[3]} · ${sign[4]} · ${sign[2]}</p><h3>${sign[0]}</h3><div class="trait-list">${sign[5].map(trait => `<span>${trait}</span>`).join("")}</div><p>${sign[6]}</p><div class="reflection-box"><span>Reflection</span><p>${sign[7]}</p></div>`;
}

function renderRetrogrades() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const grid = $("#retrogradeGrid");
  let activeCount = 0;
  retrogrades2026.forEach(item => {
    const activePeriod = item.periods.find(([start, end]) => today >= localDate(start) && today <= localDate(end));
    if (activePeriod) activeCount++;
    const nextPeriod = item.periods.find(([start]) => localDate(start) > today);
    const displayPeriod = activePeriod || nextPeriod || item.periods.at(-1);
    const card = document.createElement("article");
    card.className = `retrograde-card${activePeriod ? " is-retrograde" : ""}`;
    const dateLabel = displayPeriod ? `${formatDate(displayPeriod[0])} — ${formatDate(displayPeriod[1])}` : "Direct all year";
    card.innerHTML = `<div class="retrograde-top"><span class="planet-symbol">${item.symbol}</span><span class="retrograde-state">${activePeriod ? "Retrograde now" : "Direct now"}</span></div><h3>${item.planet}</h3><p class="retrograde-dates">${activePeriod ? "Current: " : nextPeriod ? "Next: " : "2026: "}${dateLabel}</p><p>${item.meaning}</p>`;
    grid.append(card);
  });
  const summary = now.getFullYear() === 2026 ? (activeCount ? `<strong>${activeCount} planet${activeCount === 1 ? " is" : "s are"} retrograde today.</strong> Use the moment to review before you rush.` : "No listed planets are retrograde today. This is a season for clearer forward motion.") : "This archived guide shows the major retrograde periods for 2026.";
  $("#retrogradeSummary").innerHTML = summary;
}

function renderMoon() {
  const now = new Date();
  const synodicMonth = 29.53058867;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14);
  const days = (now.getTime() - knownNewMoon) / 86400000;
  const age = ((days % synodicMonth) + synodicMonth) % synodicMonth;
  const fraction = age / synodicMonth;
  const illumination = (1 - Math.cos(2 * Math.PI * fraction)) / 2;
  const phases = [
    ["New Moon", "○", "Begin quietly. Set an intention without demanding an outcome.", "What seed are you ready to plant?"],
    ["Waxing Crescent", "☽", "Build faith in what has just begun. Small movement is enough.", "What deserves one gentle step forward?"],
    ["First Quarter", "◐", "Meet friction with a decision. Momentum grows through action.", "Which choice have you been postponing?"],
    ["Waxing Gibbous", "◕", "Refine and prepare. Your work is becoming more visible.", "What small adjustment would strengthen your intention?"],
    ["Full Moon", "●", "Illuminate and acknowledge. Emotions and results may feel vivid.", "What truth is now too clear to ignore?"],
    ["Waning Gibbous", "◖", "Share what you have learned. Gratitude helps insight settle.", "What wisdom are you ready to pass on?"],
    ["Last Quarter", "◑", "Release what no longer fits. Make space through honest revision.", "What can be completed, forgiven, or put down?"],
    ["Waning Crescent", "☾", "Rest and integrate. Not every season asks for productivity.", "Where can you choose restoration over effort?"]
  ];
  const index = Math.round(fraction * 8) % 8;
  const phase = phases[index];
  $("#moonDate").textContent = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  $("#moonPhaseName").textContent = phase[0];
  $("#moonIllumination").textContent = `${Math.round(illumination * 100)}%`;
  $("#moonMeaning").textContent = phase[2];
  $("#moonPrompt").textContent = phase[3];
  $("#moonProgress").style.setProperty("--progress", `${fraction * 100}%`);
  const shadowX = fraction <= .5 ? -fraction * 210 : (1 - fraction) * 210;
  $("#moonVisual").style.setProperty("--shadow-x", `${shadowX}%`);
  $("#phaseStrip").innerHTML = phases.map((item, i) => `<div class="phase-chip${i === index ? " is-current" : ""}"><span>${item[1]}</span>${item[0]}</div>`).join("");
}

function renderDailyWhisper() {
  if (typeof Astronomy === "undefined") return;
  const now = new Date();
  const phaseAngle = Astronomy.MoonPhase(now);
  const phaseIndex = Math.floor((phaseAngle + 22.5) / 45) % 8;
  const phaseNames = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"];
  const phaseWisdom = [
    "Plant your intention in the dark; not every beginning needs to be witnessed.", "Protect the small hope that is learning how to grow.",
    "Courage is an honest choice made before certainty arrives.", "Your intention is taking form; give it devotion, not perfection.",
    "Let what is illuminated be celebrated, understood, and released.", "Gather the wisdom and loosen your grip on the outcome.",
    "An ending can be an act of love for the life waiting beyond it.", "Rest is sacred preparation; the unseen is still becoming."
  ];
  const dailyOpenings = [
    "You are not behind; you are becoming in sacred time.",
    "The life meant for you will ask for your truth, not your performance.",
    "Your intuition rarely shouts—it waits for the world to become quiet.",
    "A softer heart can still hold an unshakable boundary.",
    "Trust the doors that open when you stop shrinking to fit the old room.",
    "The universe may whisper through what keeps returning to your attention.",
    "You do not need the whole map to honor the next true step.",
    "What leaves your life can make room for what recognizes your spirit.",
    "Your sensitivity is not a weakness; it is a finely tuned compass.",
    "Choose the path that lets you belong more deeply to yourself.",
    "The magic is not somewhere else—it is in the meaning you choose to make.",
    "Let today be guided by wonder instead of the need to know everything.",
    "There is wisdom in the pause between the question and the answer.",
    "What is truly yours will meet you where courage and tenderness touch.",
    "You are allowed to outgrow the version of you that once felt safe.",
    "Listen closely: your deepest longing may also be an invitation."
  ];
  const moonInvitations = [
    "move with brave simplicity", "return to your body and what feels steady", "follow the question that opens another door",
    "tend the tender place without apology", "let your warmth be witnessed", "make one loving refinement",
    "choose the peace that does not require self-abandonment", "meet the hidden truth with compassion", "trust the horizon calling you forward",
    "honor the promise you are building slowly", "make room for the strange and original answer", "listen for the message beneath the words"
  ];
  const sunSign = zodiacFromLongitude(Astronomy.SunPosition(now).elon);
  const moonSign = zodiacFromLongitude(Astronomy.EclipticGeoMoon(now).lon);
  const activeRetrogrades = now.getFullYear() === 2026 ? retrogrades2026.filter(item => item.periods.some(([start, end]) => now >= localDate(start) && now <= new Date(localDate(end).setHours(23, 59, 59, 999)))).length : 0;
  const dayNumber = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
  const dailyOpening = dailyOpenings[Math.abs(dayNumber) % dailyOpenings.length];
  $("#dailyQuote").textContent = `“${dailyOpening} ${phaseWisdom[phaseIndex]} With the Moon in ${moonSign[0]}, ${moonInvitations[zodiacSigns.indexOf(moonSign)]}.”`;
  $("#dailyAstrology").textContent = `${phaseNames[phaseIndex]} · Moon in ${moonSign[0]} · ${sunSign[0]} season${activeRetrogrades ? ` · ${activeRetrogrades} retrograde` + (activeRetrogrades === 1 ? "" : "s") : ""}`;
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function formatCardName(card) {
  return card.replaceAll("_", " ").replace(/\b\w/g, letter => letter.toUpperCase());
}

function localDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(value) {
  return localDate(value).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
