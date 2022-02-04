new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        meuAlerta() {
            alert('Alertou')
        },
        meuValue(e){
            this.valor = e.target.value            
        }
    },
})