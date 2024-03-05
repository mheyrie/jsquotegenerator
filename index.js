let btn = document.querySelector(".btn")
let quote = document.querySelector(".quote")
let author = document.querySelector(".author")
let category = document.querySelector(".category")


const quotes = [
    {
        quote: "Even if happiness forgets you a little bit, never completely forget about it",
        author: "Jaques Prevert",
        category: "(random)"
    },
    {
        quote: "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us",
        author: "Ashley Montagu",
        category: "(random)"
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author: "Albert Einstein",
        category: "(random)"
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi",
        category: "(random)"
    },
    {
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author: "Mark Twain",
        category: "(random)"
    },
    {
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
        author: "Eleanor Roosevelt",
        category: "(random)"
    },
    {
        quote: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
        author: "Walter Anderson",
        category: "(random)"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts",
        author: "Winston Churchill",
        category: "(random)"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
        category: "(random)"
    },
    {
        quote: "....The slogan ‘Press On’ has solved and always will solve the problems of the human race.",
        author: "Calvin Coolidge",
        category: "(random)"
    },
    {
        quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
        author: "Mister Rogers",
        category: "(random)"
    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
        category: "(random)"
    },
    {
        quote: "To know how much there is to know is the beginning of learning to live.",
        author: "Dorothy West",
        category: "(random)"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
        author: "Oscar Godson",
        category: "(programming)"
    },
    {
        quote: "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime.",
        author: "David Leinweber",
        category: "(programming)"
    },
    {
        quote: "Everyday life is like programming, I guess. If you love something, you can put beauty into it.",
        author: "Donald Knuth",
        category: "(programming)"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods",
        category: "(programming)"
    },
    
]

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * (quotes.length+1))
    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
    category.innerText = quotes[random].category
})



