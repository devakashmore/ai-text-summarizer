# AI Text Summarizer

An AI-powered web application that transforms long articles, notes, and study materials into concise, easy-to-understand summaries using Google's Gemini API.

## Overview

AI Text Summarizer is a full-stack JavaScript project built to explore real-world AI integration. Users can submit text, choose their preferred summary length, and receive AI-generated summaries through a simple interface.

The project demonstrates how to integrate a Large Language Model (LLM) into a web application using a React frontend and a Node.js/Express backend.

## Features

- **AI-powered summarization:** Generate concise summaries from long text.
- **Flexible summary length:** Choose short, medium, or detailed summaries.
- **Input validation:** Handle empty text and limit input size.
- **Asynchronous API integration:** Communicate with the AI model without blocking the user interface.
- **Error handling:** Handle invalid input and API failures.
- **Secure API key management:** Keep credentials in backend environment variables.
- **Responsive interface:** Designed for desktop and mobile screens.
- **Copy summary:** Copy generated summaries for easy reuse.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Vite | Frontend development server and build tool |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and responsive design |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API development |
| Google Gemini API | AI-powered text summarization |
| `@google/genai` | Official Google Gen AI JavaScript SDK |
| dotenv | Environment variable management |
| Git and GitHub | Version control and project hosting |

## How It Works

1. The user pastes an article or other text into the React application.
2. The user selects a summary length.
3. React sends a POST request to the Express backend.
4. The backend validates the input and constructs a summarization prompt.
5. The Gemini API processes the text and generates a summary.
6. Express returns the result as JSON.
7. React displays the generated summary to the user.

## Project Structure

```text
ai-text-summarizer/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
├── server/
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- A Google account
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-text-summarizer.git
cd ai-text-summarizer
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Set Up the Frontend

```bash
cd client
npm install
```

### 3. Set Up the Backend

Open a second terminal from the project root:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

Replace the placeholder with your own API key. Never commit API keys or other secrets to GitHub.

### 4. Start the Backend

From the `server` directory, run:

```bash
npm run dev
```

The API will run at:

`http://localhost:8000`

### 5. Start the Frontend

From the `client` directory, run:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

Keep both development servers running while using the application.

## API Documentation

### Summarize Text

**Endpoint:** `POST /api/summarize`

**Request body:**

```json
{
  "text": "Your article or text goes here.",
  "length": "short"
}
```

Supported length options:

- `short` — a few concise sentences
- `medium` — one or two paragraphs
- `detailed` — a more comprehensive summary

**Example response:**

```json
{
  "summary": "This is an AI-generated summary of the submitted text."
}
```

The endpoint validates the input and returns an appropriate error response when the request is invalid or summarization fails.

## Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Your private Gemini API key |
| `PORT` | Backend server port; defaults to `8000` in this project |

## Learning Objectives

This project helps demonstrate practical experience with:

- Building REST APIs using Express.js.
- Connecting React to a backend using `fetch()`.
- Working with asynchronous JavaScript and `async/await`.
- Integrating an external AI API into a full-stack application.
- Designing prompts for language models.
- Managing environment variables and protecting API credentials.
- Implementing input validation and error handling.
- Organizing a project into frontend and backend modules.

## Future Improvements

- Summarize text from uploaded PDF and TXT files.
- Add language selection for multilingual summaries.
- Add different summary styles, such as bullet points and study notes.
- Save and retrieve previous summaries.
- Add user authentication and a personal summary history.
- Add automated backend tests.
- Deploy the application with a live demo.

## Security and Usage Notes

- The Gemini API key must remain on the backend.
- API usage is subject to the selected model's availability, rate limits, and account eligibility.
- Free-tier availability and quotas may change.
- Avoid submitting confidential or sensitive documents to an external AI service unless you understand its data handling terms.

## Author

**YOUR NAME**

GitHub: https://github.com/devakashmore

## License

This project is intended for learning and portfolio demonstration. Add an open-source license, such as the MIT License, if you want to explicitly permit others to use, modify, and distribute your code under those terms.
