#!/bin/bash
echo "🛑 Stopping Tarot Teller application..."

if tmux has-session -t tarot-teller 2>/dev/null; then
    echo "Killing tmux session..."
    tmux kill-session -t tarot-teller
    echo "✅ Tarot Teller servers stopped successfully"
else
    echo "No running tmux session found"
fi

UVICORN_PID=$(ps aux | grep "uvicorn app:app" | grep -v grep | awk '{print $2}')
if [ -n "$UVICORN_PID" ]; then
    echo "Killing uvicorn process ($UVICORN_PID)..."
    kill -9 $UVICORN_PID
fi

STATIC_PID=$(ps aux | grep "python3 static_server.py" | grep -v grep | awk '{print $2}')
if [ -n "$STATIC_PID" ]; then
    echo "Killing static server process ($STATIC_PID)..."
    kill -9 $STATIC_PID
fi

echo "✨ All processes stopped"
