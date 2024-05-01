const form = document.getElementById('cadastro');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLista();
});

function adicionaLinha() {
    const nomesCadastrados = document.getElementById('nome');
    const numerosCadastrados = document.getElementById('numero');

    if (numeros.includes(numerosCadastrados.value)) {
        alert(`Numero: ${numerosCadastrados.value} ja esta cadastrado`);
    } else if (nomes.includes(nomesCadastrados.value)) {
        alert(`Nome: ${nomesCadastrados.value} ja esta cadastrado`);
    } else {
        nomes.push(nomesCadastrados.value);
        numeros.push(numerosCadastrados.value);

        let linha = '<tr>';
            linha += `<td>${nomesCadastrados.value}</td>`;
            linha += `<td>${numerosCadastrados.value}</td>`;
            linha += '</tr>';

            linhas += linha;
    }

    nomesCadastrados.value = '';
    numerosCadastrados.value = '';
}

function atualizaLista() {
    const lista = document.querySelector('tbody');
    lista.innerHTML = linhas;
}
