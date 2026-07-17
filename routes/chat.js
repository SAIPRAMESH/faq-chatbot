const express = require("express");
const router = express.Router();

const faq = require("../data/faq.json");


router.post("/", (req, res) => {

    const userMessage = req.body.message.toLowerCase();

    let answer = "Sorry, I couldn't find an answer for your question. Please contact student support.";


    const result = faq.find(item =>
        userMessage.includes(
            item.question.toLowerCase().replace("?", "")
        )
    );


    if(result){
        answer = result.answer;
    }


    res.json({
        answer: answer
    });

});


module.exports = router;