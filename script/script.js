const visor = document.getElementById('visor');
const confirmar = document.getElementById('confirmar');
const limpar = document.getElementById('limpar');
const retirar = document.getElementById('retirar');
const saldo = document.getElementById('saldo');

//pede ao usuário que digite o nome e exibe na tela.
const nome = document.getElementById('nome');
nome.innerText = prompt('Digite seu nome: ');

//seleciona todos os elementos com a classe 'botão' e aplica um evento de click.
document.querySelectorAll('.botão').forEach(botão => {
    botão.addEventListener('click', () => {
        visor.value += botão.innerHTML;
    });
});


//faz a validação da solicitação de saque, testa se o valor é diferente de nulo e compatível com as cédulas disponíveis, caso ocorra algum erro, exibe as respectivas mensagens.
confirmar.addEventListener('click', () => {

    if(visor.value % 10 === 0) {

        if(visor.value !== '') {

            sacar(visor.value);
            visor.style.fontSize = '2em';
            visor.value = 'Retire as cédulas.';
            limparVisor();

        } else {

            visor.style.fontSize = '2em';
            visor.value = 'Digite um valor válido.';
            limparVisor();
        }

    } else {

        visor.style.fontSize = '2em';
        visor.value = 'Cédulas indisponíveis, tente outro valor.';
        limparVisor();
    }
})

//limpa o visor e as cédulas.
limpar.addEventListener('click', () => {
    visor.value = '';
    retirar.innerText = '';
});

//prepara o valor solicitado para o saque, respeitando a regra de sempre entregar o mínimo possível de cédulas.
function sacar(valorSaque) {
    let cédulas = valorSaque;

    retirar.innerText = '';

    while(cédulas > 0) {

        if(cédulas >= 100) {
            cédulas -= 100;
            retirar.innerText += ' $ 100.00 |';

        } else if(cédulas >= 50) {
            cédulas -= 50;
            retirar.innerText += ' $ 50.00 |';

        } else if(cédulas >= 20) {
            cédulas -= 20;
            retirar.innerText += ' $ 20.00 |';

        } else if(cédulas >= 10) {
            cédulas -= 10;
            retirar.innerText += ' $ 10.00 |';

        }
    }
}

//limpa o visor.
function limparVisor() {
    setTimeout(() => {
        visor.value = '';
    }, 1500);
}