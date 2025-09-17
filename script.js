function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // bubstituir imagem
  if (html.classList.contains("light")) {
    // se tive light mode, add imagem
    img.setAttribute("src", "./assets/Menezes.png")
  } else {
    //sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
