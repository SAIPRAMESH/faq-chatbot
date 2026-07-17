const natural = require("natural");

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

const stopWords = new Set([
    "a", "an", "the",
    "is", "are", "was", "were",
    "am", "be", "been",
    "to", "of", "in", "on", "at",
    "for", "with", "by",
    "and", "or", "but",
    "how", "what", "when", "where",
    "who", "which", "why",
    "can", "could", "should",
    "do", "does", "did",
    "i", "you", "we", "they",
    "my", "your", "our", "their",
    "me", "us",
    "it", "this", "that"
]);

function preprocess(text) {

    text = text.toLowerCase();

    text = text.replace(/[^\w\s]/g, "");

    let tokens = tokenizer.tokenize(text);

    tokens = tokens.filter(word => !stopWords.has(word));

    tokens = tokens.map(word => stemmer.stem(word));

    return tokens;
}

module.exports = preprocess;