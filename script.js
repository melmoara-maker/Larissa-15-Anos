const abrir = document.getElementById("abrir");
const convite = document.getElementById("convite");
const musica = document.getElementById("musica");

abrir.addEventListener("click", () => {
    convite.style.display = "block";

    musica.play().catch(() => {
        console.log("A reprodução automática foi bloqueada pelo navegador.");
    });

    convite.scrollIntoView({
        behavior: "smooth"
    });
});
