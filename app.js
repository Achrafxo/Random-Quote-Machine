async function getData() {

    url = 'https://api.quotable.io/random'
    res = await fetch(url)
    data = await res.json() 
    quoteTxt.innerText = ` ${data.content} `
    quoteAuthor.innerText = ` ${data.author} `
    
}

let quoteTxt = document.querySelector('.quote_txt') 
let quoteAuthor = document.querySelector('.quote_author')
let btn = document.querySelector('button')

btn.addEventListener("click" , getData)


