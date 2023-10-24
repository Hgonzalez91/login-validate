/* const form = document.getElementById('form'); */

//COLOCAR LA LÓGICA PARA VERIFICAR SI EL USUARIO EXISTE O NO

function login(){
    let email = 'edtecnica@gmail.com';
    let password = 'password';
    
    if (document.getElementById('email').value == email && document.getElementById('password').value == password ){
        alert('Puede ingresar a la página');
        form.addEventListener('submit', (event) => {
            event.preventDefault()});
            window.location.href = './inicio/index.html';
    }else{
            alert('No puede ingresar a la página. Usuario o contraseña incorrecto');
    }
}

