window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

    let usarioBool = false;
    let emailBool = false;
    let passBool = false;
    let passConfirmaBool = false;

    usuario.addEventListener('input', () => {
        validaUsuario();

    });

    function validaUsuario() {
            const usuarioValor = usuario.value.trim()
            //validando campo Nombre
            if(!usuarioValor){
                validaFalla(usuario, 'Rellene este campo')
                usarioBool = false
            }else if(!validaUsuarios(usuarioValor)) {
                validaFalla(usuario, 'Nombre inválido')
                usarioBool = false
            }else{
                validaOk(usuario)
                usarioBool = true;
            }
        }


    email.addEventListener('input', () => {
        validaemail();
    
    });

    function validaemail() {
            const emailValor = email.value.trim()
            //validando campo email
            if(!emailValor){
                validaFalla(email, 'Rellene este campo')
                emailBool = false            
            }else if(!validaEmails(emailValor)) {
                validaFalla(email, 'Email inválido')
                emailBool = false
            }else {
                validaOk(email)
                emailBool = true;
            }
        }

    pass.addEventListener('input', () => {
        validapass();
    });

    function validapass() {
            const passValor = pass.value.trim()
             //validando campo Clave        
             if(!passValor) {
                 validaFalla(pass, 'Rellene este campo')
                 passBool = false
             } else if (passValor.length > 8) {             
                 validaFalla(pass, 'No debe tener más de 8 caracteres')
                 passBool = false
             } else {
                 validaOk(pass)
                 passBool = true;
             }    
        }

    passConfirma.addEventListener('input', () => {
        validapassConfirma();
    });

    function validapassConfirma() {
            const passValor = pass.value.trim()
            const passConfirmaValor = passConfirma.value.trim();
             //validando campo Confirmación Clave
             if(!passConfirmaValor){
                 validaFalla(passConfirma, 'Rellene este campo')
                 passConfirmaBool = false
             } else if(passValor !== passConfirmaValor) {
                 validaFalla(passConfirma, 'Las contraseñas no coinciden')
                 passConfirmaBool = false
             } else {
                 validaOk(passConfirma)
                 passConfirmaBool = true;
             }
        }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    
    function validaCampos() {
        if (usarioBool && emailBool && passBool && passConfirmaBool) {
            alert ('La inscripción ha sido correcta')
        }
    }


    function validaFalla (input, msje) {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    function validaOk (input, msje) {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    function validaUsuarios (usuario) {
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario);        
    }

    function validaEmails(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
})
