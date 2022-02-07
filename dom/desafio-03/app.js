new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        titulo: "Desafio 3"
    },
    computed: {
        resultado() {
            //Retorna o valor
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
        }
    },
    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
});