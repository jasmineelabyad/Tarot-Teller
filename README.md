# 🔮 Tarot Teller

A mystical tarot card reading web application that offers insights into past, present, and future through beautifully designed digital tarot cards.

![Tarot Teller Screenshot](https://i.imgur.com/placeholder.jpg)

## ✨ Features

- **Interactive Tarot Readings**: Choose between single card or three-card spreads
- **Detailed Card Interpretations**: Each card comes with detailed meanings and interpretations
- **Past, Present, Future Analysis**: Three-card spreads provide insights into your timeline
- **Hover Animations**: Flip cards to reveal their meanings with intuitive hover interactions
- **AI-Powered Advice**: Get personalized advice from Jasmine based on your cards
- **Collapsible Sidebar**: View Jasmine's advice in a convenient sidebar that can be toggled
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Elegant dark theme with purple accents for a mystical experience

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS for responsive design
- **Backend**: FastAPI for API endpoints
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Cairo)
- **API Integration**: External advice API for personalized readings

## 📋 Project Structure

```
tarot-teller/
├── app.py                # FastAPI backend
├── static_server.py      # Static file server
├── index.html            # Main HTML file
├── script.js             # JavaScript functionality
├── css/
│   └── styles.css        # Custom CSS styles
├── cards/                # Tarot card images
│   └── *.jpg             # Individual card images
├── run.sh                # Script to run both servers
├── run_api.sh            # Script to run just the API server
└── run_frontend.sh       # Script to run just the frontend server
```

## 🛠️ Setup and Installation

### Prerequisites

- Python 3.7+
- pip (Python package manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tarot-teller.git
   cd tarot-teller
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   # Option 1: Run both servers (requires tmux)
   ./run.sh
   
   # Option 2: Run servers separately
   # Terminal 1
   ./run_api.sh
   
   # Terminal 2
   ./run_frontend.sh
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 🎮 How to Use

1. **Start a Reading**: Click "Begin Your Reading" on the landing page
2. **Choose a Spread**: Select either "Single Card" or "Three Cards"
3. **View Card Meanings**: Hover over cards to flip them and reveal their meanings
4. **Get Overall Reading**: Click "Reveal Overall Meaning" for a comprehensive interpretation
5. **Get AI Advice**: Click "Advise me" to receive personalized advice from Jasmine
6. **Toggle Sidebar**: Use the sidebar toggle button to show/hide Jasmine's advice
7. **Start Over**: Click "New Reading" to draw different cards or "Back to Home" to return to the landing page

## 🧩 Programming Concepts Demonstrated

This project demonstrates several key programming concepts:

- **Object-Oriented Programming**: Structured code organization
- **API Integration**: Communication with external services
- **Asynchronous Programming**: Handling API requests with async/await
- **DOM Manipulation**: Dynamic creation and modification of HTML elements
- **Event Handling**: Interactive user interface with event listeners
- **Data Structures**: Arrays and objects for managing card data
- **Functions and Methods**: Modular code with reusable functions
- **Error Handling**: Graceful handling of API errors
- **Responsive Design**: Adapting to different screen sizes
- **State Management**: Tracking application state (drawn cards, sidebar visibility)

## 🔄 API Endpoints

The FastAPI backend provides the following endpoints:

- `GET /draw_card`: Returns a randomly selected tarot card
- `GET /draw_three_cards`: Returns three randomly selected tarot cards
- `POST https://n8n.s2.moussa2100.com/webhook/3e363cfe-9429-4fbf-b7c4-3ec930b76e14`: External API for personalized advice

## 🎨 Customization

You can customize the appearance by modifying:

- `css/styles.css`: Custom styling
- Tailwind configuration in `index.html`: Color scheme and typography

## 📝 License

This project is created for educational purposes as a class assignment.

## 🙏 Acknowledgements

- Card descriptions adapted from traditional tarot meanings
- Special thanks to Jasmine for providing mystical advice
- Icons provided by Font Awesome
- Fonts provided by Google Fonts
