window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //valores ingresados 
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();
     
        //validando campo Nombre
        if(!usuarioValor){
            validaFalla(usuario, 'Rellene este campo')
        }else if(!validaUsuario(usuarioValor)) {
            validaFalla(usuario, 'Nombre inválido')
        }else{
            validaOk(usuario)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Rellene este campo')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'Email inválido')
        }else {
            validaOk(email)
        }
         //validando campo Clave        
         if(!passValor) {
             validaFalla(pass, 'Rellene este campo')
         } else if (passValor.length > 8) {             
             validaFalla(pass, 'No debe tener más de 8 caracteres')
         } else {
             validaOk(pass)
         }

         //validando campo Confirmación Clave
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Rellene este campo')
         } else if(passValor !== passConfirmaValor) {
             validaFalla(passConfirma, 'Las contraseñas no coinciden')
         } else {
             validaOk(passConfirma)
         }


    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
    const validaUsuario = (usuario) => {
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario);        
    }


})


