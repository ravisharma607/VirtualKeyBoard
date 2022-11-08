let keywords = document.querySelectorAll('.btn')
let wordCount = document.getElementById('wordCount');
document.getElementById('wordCount').innerText = '00';
document.getElementById('textarea').innerHTML = '';
let keyboard = document.getElementById('keyboard');
let textarea = '';
let wordCounter = 0;

function countWords(str) {
    const arr = str.split(' ');
    document.getElementById('wordCount').innerText = arr.filter(word => word !== '').length;
}
for (let i = 0; i < keywords.length; i++) {
    keywords[i].setAttribute('keyname',keywords[i].innerText)
    keywords[i].setAttribute('lowerCase',keywords[i].innerText.toLowerCase())
}
window.addEventListener('keypress',(e)=>{
    document.getElementById('textarea').innerHTML += e.key;
    textarea =  document.getElementById('textarea').innerHTML;
    countWords(textarea);
})
window.addEventListener('keydown',function(e){
    for (let i = 0; i < keywords.length; i++) {
        if(e.key == keywords[i].getAttribute('keyname') || e.key == keywords[i].getAttribute('lowerCase')){
            keywords[i].classList.add('active')
        }
        if(e.key == ' '){
            let spaceKey = document.getElementById('space')
            spaceKey.className = 'active';
        }
    }
})
window.addEventListener('keyup',function(e){
    for (let i = 0; i < keywords.length; i++) {
        if(e.key == keywords[i].getAttribute('keyname') || e.key == keywords[i].getAttribute('lowerCase')){
            setTimeout(()=>{
                keywords[i].classList.remove('active')
            })
        }
        if(e.key == ' '){
            let spaceKey = document.getElementById('space')
            setTimeout(()=>{
                spaceKey.classList.toggle('active');
            })
        }
    }
})

// ------------------
let voice = document.getElementById('voice');
voice.addEventListener('click',function(e){
    let text = document.getElementById('textarea').innerHTML;
    let audio = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(audio)
})
// ------------------------------------------
let color = document.getElementById('color');
color.addEventListener('input',function(e){
    console.log(this.value)
    keyboard.style.backgroundColor = `${this.value}`;
})
// -----------------------------------
// let download = document.getElementById('download');
// let textArea = document.getElementById('textarea')
// download.addEventListener('click',(e)=>{
//     let fileName = prompt('File Name');
//     if(fileName){
//         if(fileName == ''){
//             alert('Plesae Enter A Valid File Name')
//         }
//         else{
//             const blob = new Blob([textArea.value], {type:'text/plain'});
//             const fileUrl = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.download = fileName;
//             link.href = fileUrl;
//             link.click();
//         }
//     }
//     else{
//         alert('Plesae Enter A Valid File Name')
//     }
// })

function generatePDF(){
    let textArea = document.getElementById('textarea').value;
    html2pdf()
    .from(textArea)
    .save()
}

