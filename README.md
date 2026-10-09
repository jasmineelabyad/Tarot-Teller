# Tarot Teller

A cinematic, mobile-friendly celestial guide with tarot readings, zodiac profiles, a browser-based birth chart, a 2026 retrograde tracker, live moon phases, and an embedded Jasmine chat.

## Features

- Animated home page with quick links to every guide
- One-card and three-card tarot spreads for General, Love, Career, Spiritual Path, and Decision readings
- Click/tap card flips, keyboard support, and reduced-motion support
- Reflective full-reading summaries that work without a backend
- Zodiac sign explorer
- Birth chart reader for Sun, Moon, Rising, Mercury, Venus, Mars, Jupiter, and Saturn
- Birthplace lookup with local-time conversion
- 2026 planetary retrograde status
- Living astrology calendar with Moon phases, eclipses, retrograde stations, zodiac seasons, and major planetary sign changes
- Live 3D Moon phase and illumination display
- Daily homepage astrology whisper based on the Moon, zodiac season, and active retrogrades
- Embedded Jasmine chat powered by the existing n8n Chat Trigger workflow
- Responsive layouts for phone, tablet, and desktop

## Run locally

The refreshed frontend works on its own:

```bash
python3 static_server.py
```

Then visit `http://localhost:8000`.

The original FastAPI endpoints are still available if you need them:

```bash
pip install -r requirements.txt
python3 run.py
```

## Chat setup

The site uses the production Chat Trigger webhook already present in the original project. In n8n:

1. Make sure the workflow is active.
2. Set the Chat Trigger to **Embedded Chat**.
3. Add the deployed website domain to **Allowed Origins (CORS)**.
4. Keep the production webhook URL in `index.html` synchronized with the Chat Trigger URL.

## Data and calculation notes

- Birthplace search uses the Open-Meteo Geocoding API.
- Planetary positions use the vendored MIT-licensed Astronomy Engine 2.1.19 library.
- A birth time is required for the Rising sign. When no time is supplied, the chart uses noon for planetary placements and clearly omits the Rising sign.
- Astrology and tarot text is intended for reflection and entertainment, not scientific prediction or professional advice.

## Project structure

```text
Tarot-Teller/
├── index.html
├── script.js
├── css/styles.css
├── vendor/astronomy.browser.min.js
├── cards/
├── static_server.py
├── app.py
└── requirements.txt
```
