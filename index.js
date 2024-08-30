class NumarObservabil{
    constructor(valInitiala){
        this.value=valInitiala
        this.listeners=[]
    }

    listen(listener){
        this.listeners.push(listener)
        listener(this.value)
    }

    getValue(){
        return this.value
    }
    setValue(v){
        this.value=v
        for(const f of this.listeners){
            f(this.value)
        }
    }
}

const elementNr=document.getElementById("nr")
const minusBtn=document.getElementById("minusBtn")
const plusBtn=document.getElementById("plusBtn")

let x=new NumarObservabil(1)

function afiseaza(nr){
    elementNr.textContent=nr

    plusBtn.disabled=false
    minusBtn.disabled=false

    if(nr<=1){
        minusBtn.disabled=true
    }else if(nr>=10){
        plusBtn.disabled=true
    }
} 

x.listen(afiseaza)

minusBtn.click=()=>{
    x.setValue(x.getValue()-1)
}
plusBtn.click=()=>{
    x.setValue(x.getValue()+1)
}
