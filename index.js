let btn = document.querySelector(".btn")
let quote = document.querySelector(".quote")
let author = document.querySelector(".author")


const quotes = [
    {
        quote: "Even if happiness forgets you a little bit, never completely forget about it",
        author: "Jaques Prevert"
    },
    {
        quote: "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us",
        author: "Ashley Montagu"
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author: "Albert Einstein"
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author: "Mark Twain"
    },
    {
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
        author: "Walter Anderson"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts",
        author: "Winston Churchill"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "....The slogan ‘Press On’ has solved and always will solve the problems of the human race.",
        author: "Calvin Coolidge"
    },
    {
        quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
        author: "Mister Rogers"
    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {
        quote: "To know how much there is to know is the beginning of learning to live.",
        author: "Dorothy West"
    },
]

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
})