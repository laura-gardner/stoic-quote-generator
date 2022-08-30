const quoteDiv = document.querySelector(".quote-div");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteBtn = document.querySelector(".quote-btn");

quoteBtn.addEventListener("click", function() {
    getQuote();
});

const getQuote = async () => {
    const res = await axios.get('https://stoicquotesapi.com/v1/api/quotes/random');
    const quote = res.data.body;
    const author = res.data.author;
    quoteText.innerText = quote;
    quoteAuthor.innerText = author;
};