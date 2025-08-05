document.addEventListener("DOMContentLoaded", function () {
  new Typed("#texto-digitado", {
    strings: ["Desenvolvedor Front End UX/UI Designer"],
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
      }, 1000); // Espera 1.5 segundos antes de esconder o cursor
    },
  });
});
