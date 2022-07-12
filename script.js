var btn = document.querySelector(".js-button")
var changeText = document.querySelector("h2")

const changeBg = () => {
    const randomCol = Math.floor(Math.random()*16777215).toString(16);
    const randomCol2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundImage = `linear-gradient(to right, #${randomCol}, #${randomCol2})`
    changeText.innerHTML = `background-image: linear-gradient(to right, #${randomCol}, #${randomCol2})`


    
}


btn.addEventListener('click', function(event){
    changeBg()
})