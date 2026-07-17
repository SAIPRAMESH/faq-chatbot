const express = require("express");
const router = express.Router();

const findBestAnswer = require("../nlp/similarity");

router.post("/", (req, res) => {

    try {

        const { message } = req.body;

        if (!message || message.trim() === "") {

            return res.status(400).json({
                found: false,
                answer: "Please enter a question."
            });

        }

        const result = findBestAnswer(message);

        res.json(result);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            found: false,
            answer: "Internal Server Error."
        });

    }

});

module.exports = router;