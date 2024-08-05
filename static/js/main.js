window.onload = generateColors;

function getRandomRGB() {
  return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
}

function assembleRGBValue(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

function generateColors() {
  let colors = []
  for (i = 0; i <= 3; i++) {
    colors.push(getRandomRGB());
  }
  document.querySelector(':root').style.setProperty('--background-color1', assembleRGBValue(colors[0]))
  document.querySelector(':root').style.setProperty('--background-color2', assembleRGBValue(colors[1]))
  document.querySelector(':root').style.setProperty('--background-color3', assembleRGBValue(colors[2]))
}
