class CanalComunicacao {
    constructor(destinatario, tipoCanal) {
        this.destinatario = destinatario
        this.tipoCanal = tipoCanal
    }

    enviarMensagem(mensagem) {
        console.log(`Enviando mensagem para ${this.destinatario} pelo ${this.tipoCanal}: ${mensagem.obterTexto()}`)
    }
}

class CanalWhatsapp extends CanalComunicacao {
    constructor(numeroTelefone) {
        super(numeroTelefone, 'WhatsApp')
    }
}

class CanalInstagram extends CanalComunicacao {
    constructor(usuario) {
        super(usuario, 'Instagram')
    }
}

class CanalTelegram extends CanalComunicacao {
    constructor(usuario) {
        super(usuario, 'Telegram')
    }
}

class CanalFacebook extends CanalComunicacao {
    constructor(usuario) {
        super(usuario, 'Facebook')
    }
}

module.exports = { CanalWhatsapp, CanalInstagram, CanalTelegram, CanalFacebook }
