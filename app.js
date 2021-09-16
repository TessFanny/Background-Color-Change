const showColorText = document.getElementById('show-color-text')
const btn = document.querySelector('.btn')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


const showColor = ()=>{
  let hexColor = '#'
  for(let i=0; i<6; i++){
    hexColor += hex[getRandomIndex()]
  }
  document.body.style.backgroundColor = hexColor
  showColorText.innerHTML = hexColor
  showColorText.style.color = hexColor
  
}
 const getRandomIndex = ()=>{
  return  Math.floor(Math.random() * hex.length)
 }

btn.addEventListener('click', showColor)
