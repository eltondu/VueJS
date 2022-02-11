new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
        cura: 3,
        ataqueEspecial: 3,
        arrayHealth: [1, 2, 3],
        arrayAtack: [1, 2, 3],
        nomeHeroi: 'Herói',
        nomeMonstro: 'Monstro',
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {

        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.cura = 3
            this.ataqueEspecial = 3
            this.logs = []
            this.arrayHealth = [1, 2, 3]
            this.arrayAtack = [1, 2, 3]
        },
        attack(especial) {
            if (especial == true) {
                this.ataqueEspecial = this.ataqueEspecial - 1
                this.deleteAtack()
            }
            if (this.ataqueEspecial > 1) {
                this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            } else {
                this.hurt('monsterLife', 5, 10, false, 'Jogador', 'Monstro', 'player')
            }
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            if (this.cura > 0) {
                this.heal(10, 15)
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
            this.cura = this.cura - 1
            this.arrayHealth - 1
            this.deleteHealth()
        },
        deleteHealth(item) {
            this.arrayHealth.splice(this.arrayHealth.indexOf(item), 1);
        },
        deleteAtack(item) {
            this.arrayAtack.splice(this.arrayAtack.indexOf(item), 1);
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }

})