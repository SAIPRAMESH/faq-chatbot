# FAQ Chatbot using NLP

## Project Overview

This project is a FAQ Chatbot developed using Node.js, Express.js, HTML, CSS, and JavaScript. It uses Natural Language Processing (NLP) techniques such as text preprocessing and TF-IDF-based similarity matching to answer frequently asked questions.

The chatbot compares the user's question with a predefined FAQ dataset and returns the most relevant answer.

---

## Features

- Interactive chatbot interface
- Responsive design
- Text preprocessing
    - Lowercase conversion
    - Punctuation removal
    - Tokenization
    - Stop-word removal
    - Stemming
- FAQ dataset using JSON
- TF-IDF similarity matching
- Unknown question handling
- Express.js REST API

---

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript
- Natural (NLP Library)

---

## Project Structure

```
FAQ-CHATBOT
│
├── data
│   └── faq.json
│
├── nlp
│   ├── preprocess.js
│   └── similarity.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes
│   └── chat.js
│
├── server.js
├── package.json
└── README.md
```

---

## Installation

1. Clone the repository

```
git clone <repository-url>
```

2. Install dependencies

```
npm install
```

3. Run the server

```
node server.js
```

or

```
npm start
```

4. Open

```
http://localhost:3000
```

---

## How it Works

1. User enters a question.
2. The question is preprocessed.
3. The chatbot compares it with all FAQ questions.
4. TF-IDF similarity is calculated.
5. The best matching answer is returned.
6. If no suitable match is found, a default response is displayed.

---

## Future Improvements

- Add a database for FAQs
- Admin panel to manage FAQs
- Voice input support
- Multi-language support
- Better semantic search

---

## Author

Developed as an Internship Assignment.