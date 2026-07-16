// ===============================
// ABRIR CONVITE
// ===============================

const botaoAbrir = document.getElementById("abrir");
const convite = document.getElementById("convite");
const musica = document.getElementById("musica");


botaoAbrir.addEventListener("click", () => {


    // inicia música
    musica.play();


    // rolagem suave
    convite.scrollIntoView({
        behavior: "smooth"
    });


    // esconde botão após abrir
    botaoAbrir.style.display = "none";


});



// ===============================
// POPUP PRESENTES
// ===============================


function abrirPresentes(){

    document.getElementById("popupPresentes").style.display = "flex";

}



function fecharPresentes(){

    document.getElementById("popupPresentes").style.display = "none";

}
// ===============================
// PARTÍCULAS DE BRILHO
// ===============================


const areaParticulas = document.querySelector(".particulas");


function criarParticula(){


    const particula = document.createElement("span");


    particula.classList.add("particula");


    particula.style.left = Math.random() * 100 + "%";


    particula.style.animationDuration =
    (Math.random() * 5 + 5) + "s";


    particula.style.opacity =
    Math.random();


    areaParticulas.appendChild(particula);



    setTimeout(() => {

        particula.remove();

    }, 10000);


}



setInterval(criarParticula, 300);





// ===============================
// ANIMAÇÃO DE ENTRADA
// ===============================


const elementos = document.querySelectorAll(
".mensagem, .card, .item, .botoes"
);



const observer = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("mostrar");


        }


    });


},{

threshold:0.2

});



elementos.forEach((elemento)=>{

    observer.observe(elemento);

});
