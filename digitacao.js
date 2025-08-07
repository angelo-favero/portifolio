document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  const textoElement = document.getElementById("texto-digitado");
  // Salva o texto original para usar na animação
  const textoOriginal = textoElement.textContent;
  // Limpa o elemento para que o Typed.js possa preenchê-lo
  textoElement.textContent = "";

  new Typed("#texto-digitado", {
    strings: [textoOriginal], // Usa o texto original que estava no HTML
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 1000,
    loop: false,
    showCursor: false,
    cursorChar: "|",
    onComplete: function (self) {
      // Esconde o cursor após um pequeno delay quando a digitação terminar
      setTimeout(function () {
        document.querySelector(".typed-cursor").style.opacity = "0";
      }, 1000); // Espera 1 segundo antes de esconder o cursor
    },
  });
});
