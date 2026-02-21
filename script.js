const pages = [
    "Today is your special day… and I couldn’t stay silent anymore.",

    "It’s been one whole month since we last spoke… but not a single day passed without you in my heart.",
    
    "Thank you for being in my life",

    "I miss you more than I can explain. I miss your voice, your smile, and the comfort you gave me.",

    "I care about you deeply. Even in silence, my feelings never faded.",

    "Yes I have some misunderstandings. For that silence is not a solution",

    "This distance didn’t make me forget you… it made me realize how important you are to me.",

    "SO MY HEARTFULLY I WISHING YOU VERY VERY HAPPIII BIRTHDAY PAVSSSS 💗💫✨",

    "No matter what happened, no matter the silence… my heart always chose you ❤️"
];

let current = 0;

function nextPage() {
    popHearts();
    current++;

    if (current < pages.length) {
        document.getElementById("text").innerText = pages[current];
    } else {
        document.getElementById("page").style.display = "none";
        document.getElementById("videoPage").style.display = "block";
    }
}

function popHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.innerText = "❤️💫";
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}