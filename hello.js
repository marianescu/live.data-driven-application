const nume=document.getElementById("nume")
const inputNume=document.getElementById("inputNume")




inputNume.oninput=()=>{
    nume.textContent=inputNume.value
}