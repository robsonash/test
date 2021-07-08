const lista = document.querySelector('.lista');
const adicionar = document.querySelector('.adicionar');
const editar = document.querySelector('.editar');
const remover = document.querySelector('.remover');
const url = "http://localhost:3000/posts";


let tamanho = 0;




function criarElement(id, nome) {

    const li = document.createElement('li');
    lista.append(li);

    const div1 = document.createElement('div');
    div1.classList.add('conteudo')
    li.append(div1);

    const h3 = document.createElement('h3');
    h3.innerText = id;
    div1.append(h3)

    const p = document.createElement('p');
    p.innerText = nome;
    div1.append(p);

    const div2 = document.createElement('div');
    div2.classList.add('botoes')
    li.append(div2);

    const buttonEdicao = document.createElement('button');
    buttonEdicao.classList.add('botao', 'editar')
    buttonEdicao.innerText = 'Editar';
    div2.append(buttonEdicao);

    const buttonExcluir = document.createElement('button');
    buttonExcluir.classList.add('botao', 'excluir')
    buttonExcluir.innerText = 'Excluir';
    div2.append(buttonExcluir);



}



async function pegarFrutas() {
    const response = await fetch(url);
    const json = await response.json();
    tamanho = json.length;
    json.forEach(frutas => {
        criarElement(frutas.id, frutas.nome)
        console.log(frutas)
    })

}
pegarFrutas()

adicionar.addEventListener('click', () => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            id: ++tamanho,
            nome: 'primeiro'
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }

    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
})