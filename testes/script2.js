function toggleMod() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/icon2.jfif")
  } else {
    img.setAttribute("src", "./assets/icon.jpg")
  }
}

function hidding() {
  const esconde = document.getElementById("listas")
  esconde.classList.toggle("escondido")

  const botao = document.getElementById("botao2")
  if (esconde.classList.contains("escondido")) {
   botao.textContent = "Mostrar Objetivos"
  } else {
   botao.textContent = "Esconde Objetivos"
  }
}