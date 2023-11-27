let clickVolver = ()=>{
    document.getElementById("volver")
    history.back();
}


let clickIngresar = ()=>{
    document.getElementById("btn")
    window.location.href= "../app/inicio_app.html"
}


//login
const loginCorreo = document.getElementById("login-email")  
const loginContraseña = document.getElementById("login-password")  




//sign-up
const signNombre = document.getElementById("sign-name")  
const signCorreo = document.getElementById("sign-email")  
const signContraseña = document.getElementById("sign-password")  



const loginForm = document.getElementById("login-form");
const singForm = document.getElementById("sign-form");
const parrafo = document.getElementById("warnings");




//unete
const textoUnete = document.getElementById("unete");
const unete = ()=>{
    textoUnete.scrollIntoView({behavior: "smooth"});
}



singForm.addEventListener("submit",e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(signNombre.value.length < 6){
        warnings += `El nombre es muy corto <br/>`;
        entrar = true;
    }
    if(!regexEmail.test(signCorreo.value)){
        warnings += `El email no es valido <br/>`;
        entrar = true;
    }
    if(signContraseña.value.length < 8){
        warnings += `La contraseña no es valida <br/>`;
        entrar = true;
    }
    if(warnings){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Cuenta creada con exito"
    }
})


