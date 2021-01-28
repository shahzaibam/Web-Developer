let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“You know you are in love when you can not fall asleep because reality is finally better than your dreams.” ― Dr. Seuss',
    '“Be the change that you wish to see in the world.” ― Mahatma Gandhi',
    '“Expect the best, prepare for the worst.” ― Muhammad Ali Jinnah',
    '"Failure is not fatal until we surrender trying again is the key of glorious victory" -Allama Iqbal',
    '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.” ― Marilyn Monroe',
    '“You only live once, but if you do it right, once is enough.” ― Mae West',
];

btn.addEventListener("click", function start() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
})