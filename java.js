var quotes=[
    'Design is intelligence made visible. – Alina Wheeler', 'You can\’t use up creativity. The more you use, the more you have. – Maya Angelou','The artist in me cries out for design. – Robert Frost'
]
function newQuote(){
    var randomNumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}