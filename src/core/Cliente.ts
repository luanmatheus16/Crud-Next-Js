export default class Cliente {
    #id: string
    #nome: string
    #cpf: number
    #rg: number
    #endereco: string
    #numero: number
    #datnascimento: number
    #telcomercial: number
    #telresidencial: number
    #facebook: string
    #instagram: string
    #linkedin: string
    #twitter: string

    constructor(nome: string, cpf: number, rg: number, endereco: string, numero: number,
        datnascimento: number, telcomercial: number, telresidencial: number, facebook: string,
        instagram: string, linkedin: string, twitter: string, id: string = null) {
        this.#nome = nome
        this.#cpf = cpf
        this.#rg = rg
        this.#endereco = endereco
        this.#numero = numero
        this.#datnascimento = datnascimento
        this.#telcomercial = telcomercial
        this.#telresidencial = telresidencial
        this.#facebook = facebook
        this.#instagram = instagram
        this.#linkedin = linkedin
        this.#twitter = twitter
        this.#id = id
    }

    static vazio() {
        return new Cliente('', 0, 0, '', 0, 0, 0, 0, '', '', '', '',)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get cpf() {
        return this.#cpf
    }
    get rg() {
        return this.#rg
    }
    get endereco() {
        return this.#endereco
    }
    get numero() {
        return this.#numero
    }
    get datnascimento() {
        return this.#datnascimento
    }
    get telcomercial() {
        return this.#telcomercial
    }
    get telresidencial() {
        return this.#telresidencial

    } get facebook() {
        return this.#facebook

    } get instagram() {
        return this.#instagram
    }
    get linkedin() {
        return this.#linkedin
    }
    get twitter() {
        return this.#twitter
    }

}