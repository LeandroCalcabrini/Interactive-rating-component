const numero = document.querySelectorAll(".number");
const submit = document.querySelector(".submit");
const card = document.querySelector(".container-card");
const card2 = document.querySelector(".container-2card")
const score = document.querySelector("#score");





function calificar (){
    numero.forEach((nmb)=>{
        nmb.addEventListener("click",(event)=>{
            nmb.classList.add("active")
       let puntuacion = event.target.id;
       score.textContent = puntuacion;
        })


    })
}

calificar()







/* click en submit */
submit.addEventListener("click",()=>{
    card.classList.add("inactive")
    card2.classList.add("active");
})







