export default function initElement(id, nome) {

    const lista = document.querySelector('.lista');
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