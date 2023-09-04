document.querySelector(".home-image").addEventListener("mouseenter", function() {
    var responses = [
        "Yes, I'm this handsome in real life.",
        "Future unclear, but my skills are sharp.",
        "Very doubtful... that you've seen a portfolio this cool.",
        "Without a doubt, you're in the right place."
    ];
    
    var randomResponse = responses[Math.floor(Math.random() * responses.length)];
    document.querySelector(".magic-response").textContent = randomResponse;
});
