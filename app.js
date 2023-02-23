
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
} 

const typed = new Typed(".typed", {
    strings: ["Datos", "Habilidades"],
    typeSpeed: 75,
    startDelay: 400,
    loop: true,
});



const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    email: false,
    telefono: false
}

const validarFormulario = (e) => {
   switch (e.target.name) {
        case "Nombre":
          validarCampo(expresiones.nombre, e.target, 'nombre');         
        break;

        case "Email":
            validarCampo(expresiones.correo, e.target, 'email');  
        break;

        case "Telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');  
        break;
   }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]=true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]=false;
    }

}

inputs.forEach((input) =>{
  input.addEventListener('keyup', validarFormulario );
  input.addEventListener('blur', validarFormulario );
})


document.addEventListener("submit", formularioContacto)

function formularioContacto(){
    if(campos.nombre && campos.email && campos.telefono) {
    formulario.reset();
    console.log("Hola mi nombre es Mariela Moreta, espero les guste mi proyecto")
    
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');  
    }, 6000);
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });
    
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
}