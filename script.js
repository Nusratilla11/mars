const btn=document.getElementById("btn")
const eye=document.getElementById("eye")
const nomerInput=document.getElementById("nomer")
const parolInput=document.getElementById("parol")
const box=document.getElementById("box")
const ota=document.getElementById("ota")
const back=document.getElementById("back")

localStorage.setItem("Familya", "Yoldoshev ")
localStorage.setItem("Guruh", "F2 1944")
localStorage.setItem("Coin", "304")

eye.addEventListener("click",()=>{
    if(parolInput.type=="password"){
        parolInput.type="text";
   }else{
    parolInput.type="password"
   }
})

parolInput.addEventListener("input",()=>{
    if(nomerInput.value.length>3 && parolInput.value.length>3){
        btn.disabled=false;
        btn.style.backgroundColor="red";
    }else{
        btn.disabled=true;
        btn.style.backgroundColor="orange";
    }
})

btn.addEventListener("click",()=>{
    if(parolInput.value=="1234" && nomerInput.value=="mars"){
    box.style.display="none";
    ota.style.display="block";
    }
    else{
        alert("Login yoki parol xato!")
    }
})
parolInput.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        if(parolInput.value=="1234" && nomerInput.value=="mars"){
            box.style.display="none";
            ota.style.display="block";
        }
        else{
            alert("Login yoki parol xato!")
        }
    }
})
back.addEventListener("click",()=>{
    box.style.display="block";
    ota.style.display="none";
})