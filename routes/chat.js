const express = require("express");
const router = express.Router();

const faq = require("../data/faq.json");

router.post("/", (req, res) => {

    const message = req.body.message.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;

    for (const item of faq) {

        let score = 0;

        for (const keyword of item.keywords) {

            if (message.includes(keyword.toLowerCase())) {
                score++;
            }

        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }

    }

    if (bestMatch) {
        res.json({
            answer: bestMatch.answer
        });
    } else {
        res.json({
            answer: "Sorry, I couldn't find an answer."
        });
    }

});

module.exports = router;