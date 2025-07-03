const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhosenha = 12;
numeroSenha.textContent = tamanhosenha;
const LetrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametros-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhosenha >1 ){
        tamanhosenha--;   
    }
    numeroSenha.textContent = tamanhosenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhosenha < 20){
        tamanhosenha++;
    }
    numeroSenha.textContent = tamanhosenha;
    geraSenha();
}