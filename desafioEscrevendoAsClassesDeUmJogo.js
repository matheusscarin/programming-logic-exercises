class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
    }

    atacar(){
        let ataque
        switch (this.tipo){
            case "Mago":
                ataque = "magia"
                break
            case "Guerreiro":
                ataque = "espada"
                break
            case "Monge":
                ataque = "artes marciais"
                break
            case "Ninja":
                ataque = "shuriken"
                break
            default:    
                ataque = "indefinido"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}!`)
    }
    
}

let dadosDoAtacanteUm = new heroi("Felipão", 28, "Mago")
let dadosDoAtacanteDois = new heroi("Matheus", 29, "Ninja")

dadosDoAtacanteUm.atacar()
dadosDoAtacanteDois.atacar()