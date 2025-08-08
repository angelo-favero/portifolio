document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  const textoElement = document.getElementById("texto-digitado");

  // Verifique se o elemento existe
  if (!textoElement) {
    console.error("Elemento #texto-digitado não encontrado");
    return; // Sai da função se o elemento não existir
  }

  // Salva o texto original para usar na animação
  const textoOriginal = textoElement.textContent;
  // Limpa o elemento para que o Typed.js possa preenchê-lo
  textoElement.textContent = "";

  try {
    new Typed("#texto-digitado", {
      strings: [textoOriginal], // Usa o texto original que estava no HTML
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      cursorChar: "|",
      onComplete: function (self) {
        // Esconde o cursor após um pequeno delay quando a digitação terminar
        setTimeout(function () {
          const cursor = document.querySelector(".typed-cursor");
          // Verifica se o elemento do cursor existe antes de manipulá-lo
          if (cursor) {
            cursor.style.opacity = "0";
          }
        }, 1000); // Espera 1 segundo antes de esconder o cursor
      },
    });
  } catch (e) {
    console.error("Erro ao inicializar Typed.js:", e);
    // Restaura o texto original em caso de erro
    textoElement.textContent = textoOriginal;
  }
});
