let apples = 2
let bananas = 3

apples = 1

let i = 0
function addTextToTop() {
  const newPara = document.createElement('p')
  newPara.textContent = 'This is new text!'
  newPara.classList.add('generated-text')
  document.body.prepend(newPara)
  if (i % 2 === 0) {
    newPara.style.setProperty('color', 'red')
  } else {
    newPara.style.setProperty('color', 'blue')
  }
  i++
}
function addButton(buttonText, onClick) {
  const button = document.createElement('button')
  button.textContent = buttonText
  document.body.prepend(button)
  button.addEventListener('click', onClick)
}

addButton('Remove text', () => {
  let paras = document.querySelectorAll('.generated-text')
  for (let para of paras) {
    para.remove()
  }  
})
addButton('Add text', addTextToTop)