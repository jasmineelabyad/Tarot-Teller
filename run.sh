#!/bin/bash
echo "✨ Starting Tarot Teller application...✨"
echo "🔮 Starting FastAPI server on port 5000 and static server on port 8000 🔮"
echo "💫 Open your browser and navigate to http://localhost:8000 💫"

# Check if tmux is installed
if ! command -v tmux &> /dev/null; then
    echo "tmux is not installed. Please install it or run the servers manually:"
    echo "Terminal 1: uvicorn app:app --reload --port 5000"
    echo "Terminal 2: python3 static_server.py"
    exit 1
fi

# Start a new tmux session with the FastAPI server
tmux new-session -d -s tarot-teller "uvicorn app:app --reload --port 5000"

# Split the window and start the static file server
tmux split-window -h -t tarot-teller "python3 static_server.py"

# Attach to the session
tmux attach -t tarot-teller
