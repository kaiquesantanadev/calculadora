function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaCliques()
        this.pressEnter()
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target

            if (el.classList.contains('btn-num')) this.adicionaNumero(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.conta()
        })
    }

    this.pressEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.conta()
            }
        })
    }

    this.adicionaNumero = el => {
        this.display.value += el.innerText
        this.display.focus()
    }
    this.clear = () => this.display.value = ' '
    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.conta = () => {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (!conta) {
                alert('Conta inválida.')
                return
            }
            this.display.value = conta
        } catch (e) {
            alert('Conta inválida.')
            return
        }
    }

};

const calculadora = new Calculadora()
calculadora.inicia()