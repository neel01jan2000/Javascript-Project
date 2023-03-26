// Variable

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote: '"The best way to find yourself is to lose youreself in the service of others."',
    person:'Mahatama Gandhi'
},{
    quote: '"Design is not how it looks like and feels like. Design is how it works."',
    person:'Steve Jobs'
},
{
    quote:'"Remember that not getting what you want is sometimes a wonderful stroks of luck"',
    person:'Dalai Lama'
},{
    quote:'"The journey of a thousand miles begains with one step"',
    person:'Lao Tzu'
},
{
    quote: '"The only true wisdom is in knowing you know nothing."',
    person:'Socrates'
},
{
    quote: '"Quality is not an act, it is a habit."',
    person:'Aristotle'
},
{
    quote: '“There is nothing permanent except change.”',
    person:'Heraclitus'
},
{
    quote: '"The root of suffering is attachment."',
    person:'Buddha'
},
{
    quote: '"Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame."',
    person:'Buddha'
},{
    quote: '"You Only Live Once"',
    person:'Unknown'
},
{
    quote: '"Purity and impurity depend on oneself; no one can purify another."',
    person:'Buddha'
},
];

btn.addEventListener('click', function(){
     
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})