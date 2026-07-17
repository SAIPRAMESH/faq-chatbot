const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

// Send button
sendBtn.addEventListener("click", sendMessage);

// Enter key
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    // Show user message
    addMessage(message, "user");

    userInput.value = "";

    // Disable button while processing
    sendBtn.disabled = true;

    // Show typing animation
    typing.style.display = "flex";

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        // Small delay for natural typing
        await new Promise(resolve => setTimeout(resolve, 700));

        // Hide typing animation
        typing.style.display = "none";

        // Enable button
        sendBtn.disabled = false;

        // Show bot response
        addMessage(data.answer, "bot");

        // Focus input again
        userInput.focus();

    } catch (error) {

        console.error(error);

        typing.style.display = "none";

        sendBtn.disabled = false;

        addMessage(
            "Server error. Please try again later.",
            "bot"
        );

        userInput.focus();

    }

}

function addMessage(text, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);

    if (sender === "bot") {

        messageDiv.innerHTML = `
            <div class="avatar">🤖</div>
            <div class="bubble">${text}</div>
        `;

    } else {

        messageDiv.innerHTML = `
            <div class="bubble">${text}</div>
        `;

    }

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

}