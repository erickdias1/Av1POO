class Mensagem {
    constructor(mensagem, formato) {
        this.mensagem = mensagem
        this.formato = formato
    }

    obterTexto() {
        return `Mensagem: ${this.mensagem}, Formato: ${this.formato}`
    }

    enviar(canal) {
        canal.enviarMensagem(this)
    }
}

class MensagemTexto extends Mensagem {
    constructor(mensagem, formato, dataEnvio) {
        super(mensagem, formato)
        this.dataEnvio = dataEnvio
    }

    obterTexto() {
        return `${super.obterTexto()}, Data de Envio: ${this.dataEnvio}`
    }
}

class MensagemVideo extends Mensagem {
    constructor(mensagem, formato, duracao, arquivo) {
        super(mensagem, formato)
        this.duracao = duracao
        this.arquivo = arquivo
    }

    obterTexto() {
        return `${super.obterTexto()}, Duração: ${this.duracao}, Arquivo: ${this.arquivo}`
    }
}

class MensagemFoto extends Mensagem {
    constructor(mensagem, formato, arquivo) {
        super(mensagem, formato)
        this.arquivo = arquivo
    }
}

class MensagemArquivo extends Mensagem {
    constructor(mensagem, formato, arquivo) {
        super(mensagem, formato)
        this.arquivo = arquivo
    }
}

module.exports = { MensagemTexto, MensagemVideo, MensagemFoto, MensagemArquivo }
