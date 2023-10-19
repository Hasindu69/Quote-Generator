document.addEventListener("DOMContentLoaded", function () {
    const moodInput = document.getElementById("moodInput");
    const getQuoteButton = document.getElementById("getQuoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Sample database of quotes categorized by mood
    const quotesByMood = {
        happy: ["Your happiness is a gift. Share it generously.", 
        "Life is better when you're laughing", 
        "Good morning! Start your day with a smile and a positive mindset."],
        sad: ["Every day may not be good, but there's something good in every day.", 
        "In the middle of every difficulty lies opportunity.", 
        "Happiness is not something ready-made. It comes from your own actions"],
        motivated: ["Believe you can, and you're halfway there", 
        "Don't watch the clock; do what it does. Keep going.", 
        "Your time is limited, don't waste it living someone else's life."],
    };

    getQuoteButton.addEventListener("click", function () {
        const userMood = moodInput.value.toLowerCase();
        const matchingQuotes = quotesByMood[userMood];

        if (matchingQuotes) {
            const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
            quoteDisplay.textContent = `${randomQuote}`;
            

        } else {
            quoteDisplay.textContent = "No quotes available for this mood.";
        }
    });
});
