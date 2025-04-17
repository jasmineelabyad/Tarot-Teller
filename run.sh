#!/bin/bash
echo "✨ Starting Tarot Teller application...✨"
echo "🔮 Starting FastAPI server on port 5000 and static server on port 8000 🔮"
echo "💫 Open your browser and navigate to http://localhost:8000 💫"


if ! command -v tmux &> /dev/null; then
    echo "tmux is not installed. Please install it or run the servers manually."
    exit 1
fi


tmux new-session -d -s tarot-teller "uvicorn app:app --reload --port 5000"


tmux split-window -h -t tarot-teller "python3 static_server.py"


tmux attach -t tarot-teller
