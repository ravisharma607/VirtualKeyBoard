let eventWord = '';
let keyWord = '';

document.getElementById('textarea').innerHTML = '';
let body = document.getElementsByTagName('body')






Array.from(body).forEach((body)=>{
    body.addEventListener(('keypress'),(e)=>{
        eventWord = e.key;
        // console.log('event wala word',eventWord)

        if(document.getElementById('keyboard').innerText == eventWord){
            console.log('able to find')
        }
        else{
            console.log('unable to find')

        }
    })        



})

