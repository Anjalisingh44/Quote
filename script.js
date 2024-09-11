document.addEventListener('DOMContentLoaded', function() {
    const quotes = {
        science: [
            "The important thing is not to stop questioning. - Albert Einstein",
            "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
            "In science, there are no shortcuts to truth. - Louis Pasteur"
        ],
        motivation: [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
        ],
        philosophy: [
            "The unexamined life is not worth living. - Socrates",
            "I think, therefore I am. - René Descartes",
            "He who has a why to live can bear almost any how. - Friedrich Nietzsche"
        ]
    };

    let currentCategory = 'science';
    let currentIndex = 0;

    const quoteDisplay = document.getElementById('quote');
    const categorySelect = document.getElementById('category');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const randomBtn = document.getElementById('random');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const themeToggle = document.getElementById('theme-toggle');


    function displayQuote() {
        quoteDisplay.textContent = quotes[currentCategory][currentIndex];
    }

    
    categorySelect.addEventListener('change', function() {
        currentCategory = categorySelect.value;
        currentIndex = 0;  
        displayQuote();
    });

    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
        displayQuote();
    });

    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
        displayQuote();
    });


    randomBtn.addEventListener('click', function() {
        currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
        displayQuote();
    });

    increaseFontBtn.addEventListener('click', function() {
        let currentSize = window.getComputedStyle(quoteDisplay).fontSize;
        quoteDisplay.style.fontSize = (parseFloat(currentSize) + 2) + 'px';
    });

    
    decreaseFontBtn.addEventListener('click', function() {
        let currentSize = window.getComputedStyle(quoteDisplay).fontSize;
        quoteDisplay.style.fontSize = (parseFloat(currentSize) - 2) + 'px';
    });

    
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark');
    });


    displayQuote();
});
