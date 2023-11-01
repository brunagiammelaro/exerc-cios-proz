//1º passo: remover as estilizações dinamicas -> apagar as classes

let inputError = document.querySelector('.messageerror')
inputError.classList.remove('messageerror')
inputError.classList.contains('messageerror')

console.log(inputError)

let inputCorrect = document.querySelector('.correct')
inputCorrect.classList.remove('correct')
inputCorrect.classList.contains('correct')

console.log(inputCorrect)


let paragrafoVisible = document.querySelector('.visible')
paragrafoVisible.classList.remove('visible')

console.log(paragrafoVisible)


let h2 = document.querySelector("h2");
h2.style.color = 'black';
h2.style.fontSize = '40px';

let botao = document.querySelector('button');
botao.style.color = 'white'
botao.style.backgroundColor = 'gray'
botao.style.fontSize = '16px'

let inputSenha = document.querySelector('#login-usuario');
inputSenha.classList.add('error')

let messageError = document.querySelectorAll('p')
messageError[0].remove()

inputCorrect.classList.add('correct')
