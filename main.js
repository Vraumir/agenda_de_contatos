const form = document.getElementById('form-agenda');
const contatos = [];
const ddd = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputDDDContato = document.getElementById('numero-ddd');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        ddd.push(parseInt(inputDDDContato.value));
        numeros.push(parseInt(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>(${inputDDDContato.value})</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputDDDContato.value = '';
    inputNumeroContato.value ='';
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}