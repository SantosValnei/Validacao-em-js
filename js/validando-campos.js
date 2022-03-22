const validacao = () => {
    const email = document.getElementById('email').value;

    var [user, domain] = email.split('@');

    const tamanhoUser = user.split('');
    const tamanhoDomain = domain.split('');

    const resposta = document.getElementById('resposta');
    
    if (tamanhoUser.length < 32 && tamanhoDomain.length < 16 && validarEmail(email) == true) {
        verificarMensagem(user)
    } else {
        alert('Erro no envio: Endereço de email inválido')
    }

    return validacao
}


const verificarMensagem = (msg) => {
    const mensagem = document.getElementById('mensagem').value

    if (mensagem == '') {
        alert('Erro no envio: Insira uma mensagem')
    } else {
        alert(`Obrigado pelo contato, ${msg}`)
    }

    return verificarMensagem
}

function validarEmail(email) {
    var re = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/
    return re.test(email);
}
