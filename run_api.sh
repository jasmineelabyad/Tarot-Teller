#!/bin/bash
echo "✨ Starting Tarot Teller API server...✨"
echo "🔮 API will be available at http://localhost:5000 🔮"
uvicorn app:app --reload --port 5000
