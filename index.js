const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.get("/", (req,res) => {
    res.send("99 Bottles of Beer on the wall! 99 bottles of beer! <a href='98'> Take one down, pass it around </a> 98 bottles of beer on the wall")
});

app.get("/:num", (req,res) => {
    let newNum = (req.params.num) -1;
    res.send(`${req.params.num} Bottles of Beer on the wall! ${req.params.num}! <a href=${newNum}> Take one down, pass it around </a> ${newNum} bottles of beer on the wall`)
});

app.get("/greeting/:name", (req,res) => {
    res.send(`hello, ${req.params.name}!`)
})

let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:question", (req,res) => {
    const answer = answers[Math.floor(Math.random()*answers.length)];
    res.send (`question: ${req.params.question}? 
        - Answer ${answer} `)
})

app.get("/tip/:total/:percentage", (req,res) => {
    const tipPercent = (req.params.percentage) / 100
    const tipAmt = (req.params.total) * (tipPercent)
    res.send(`if your bill is ${req.params.total}, and your tip percent was ${req.params.percentage}, your 
        total tip owed is $${tipAmt}`)
})