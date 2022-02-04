new Vue({
    el: "#desafio",
    data: {
        meuNome: "Elton Santos Costa",
        idade: 41,
        imagemSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/cat-beauty-0-1495746002.jpg"
    },
    methods: {
        mathRandom() {
            //let numero = 4 //Math.random()
            return Math.random();
        },
        minhaIdadeMult() {
            return this.idade * 3
        }
    },
})