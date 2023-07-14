const usuario = document.querySelector("[name=usuario]");
const email = document.querySelector("[name=email]");
const contra = document.querySelector("[name=contraseña]");

const validarInputsFormulario = (mensaje,e) =>{
    const campo = e.target;
    const campoUsuario = (e.target.value);

    if(campoUsuario.trim().length == 0){
        campo.classList.add("campo-requerido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = mensaje;
    } else{
        campo.classList.remove("campo-requerido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

const validarEmailFormato = e =>{
    const campo = e.target;
    const campoEmail = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if(campoEmail.trim().length > 5 && !regex.test(campoEmail)){
        campo.classList.add("campo-requerido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Porfavor ingrese un email válido";
    } else{
        campo.classList.remove("campo-requerido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}


usuario.addEventListener("blur", (e) => validarInputsFormulario("Ingrese Usuario",e));
email.addEventListener("blur",(e) =>validarInputsFormulario("Ingrese Email",e));
contra.addEventListener("blur",(e) => validarInputsFormulario("Ingrese Contraseña",e));

email.addEventListener("input",validarEmailFormato);
