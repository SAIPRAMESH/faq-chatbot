const fs = require("fs");
const path = require("path");
const natural = require("natural");
const preprocess = require("./preprocess");

// Load FAQ data once
const faqData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/faq.json"), "utf8")
);

function findBestAnswer(userQuestion) {

    const tfidf = new natural.TfIdf();

    // Add preprocessed FAQ questions
    faqData.forEach(faq => {
        tfidf.addDocument(preprocess(faq.question).join(" "));
    });

    // Preprocess user question
    const processedQuestion = preprocess(userQuestion).join(" ");

    let bestScore = 0;
    let bestMatch = null;

    // Calculate similarity score
    tfidf.tfidfs(processedQuestion, (index, score) => {

        if (score > bestScore) {
            bestScore = score;
            bestMatch = faqData[index];
        }

    });

    // Similarity threshold
    const THRESHOLD = 0.20;

    if (bestScore >= THRESHOLD) {
        return {
            found: true,
            answer: bestMatch.answer
        };
    }

    return {
        found: false,
        answer: "Sorry, I couldn't find a matching answer."
    };
}

module.exports = findBestAnswer;