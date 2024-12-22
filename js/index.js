const BotonRegistrar = document.getElementById('BotonRegistrar');
const BotonIniciar = document.getElementById('BotonIniciar');
const container = document.getElementById('contenedor');
const correo = document.getElementById('correo');
const botonEnviarRegistro = document.getElementById('botonEnviarRegistro');
const infoDeCorreo = document.getElementById('validarCorreo');
const infoDeContrasena = document.getElementById('validarContrasena');
const contrasena = document.getElementById('contrasena');
const contrasenaConfirmada = document.getElementById('contrasenaConfirmada');



BotonRegistrar.addEventListener('click', () =>
    container.classList.add('panel__activo')
);

BotonIniciar.addEventListener('click', () =>
    container.classList.remove('panel__activo')
);

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/*NOTA:A este evento le falta el preventDefault() para que no se envie el formulario*/ 
botonEnviarRegistro.addEventListener("click",()=>{
    //Validacion de correo
    validarEmail(correo.value)? infoDeCorreo.textContent = "":infoDeCorreo.textContent = "El correo es invalido";
    //Validacion de la contraseña si esta vacia o si coindicen 
    if(contrasena.value == ""){
        infoDeContrasena.textContent = "Se requiere colocar contraseña ";
    }else{
        if(contrasena.value !== contrasenaConfirmada.value){
            infoDeContrasena.textContent = "Las contraseñas no coinciden ";
        }else{
            infoDeContrasena.textContent = "";
        }
    }
})
