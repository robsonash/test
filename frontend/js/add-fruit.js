export default function initAddFruit() {
    let tamanho;
    const adicionar = document.querySelector('.adicionar');
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

        fetch("http://localhost:3000/posts", options)
            .then(response => response.json())
            .then(json => {
                console.log(json);
            });
    })

}