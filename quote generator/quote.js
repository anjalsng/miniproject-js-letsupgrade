var quotes = ["I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best--Marilyn Monroe", "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.--A.P.J. ABDUL KALAM ","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.--Mark Caine","Backbenchers are independent learners. They learn every type of activity during the lectures.--A.P.J. ABDUL KALAM","Life is like riding a bicycle. To keep your balance, you must keep moving.--Albert Einstein"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    var output= document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    return output
    
}
