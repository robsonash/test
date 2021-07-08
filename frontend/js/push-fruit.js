import initElement from "./create-element.js";
let tamanho = 0;

export default async function initPushFruit() {

    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    const json = await response.json();
    tamanho = json.length;
    json.forEach(frutas => {
        initElement(frutas.id, frutas.nome)
        console.log(frutas)
    })

}