const container = document.querySelector('.container')
const n = 600
for (let i = 0;i<n;i++){
    const square = document.createElement('div')
    container.append(square)
    square.setAttribute('class' ,'square')
    square.addEventListener('mouseover',() => {
        square.style.background = randomColor()
        square.style.boxShadow = `3px 3px 3px ${randomColor()}`
    })
    square.addEventListener('mouseleave',() => {
        square.style.background =''
        square.style.boxShadow = ''
    })
}
function randomColor(){
    let str = '#'
    for (let i = 0; i < 6; i++){
        str += Math.floor(Math.random() * 10)
    }
    return str
}
randomColor()

