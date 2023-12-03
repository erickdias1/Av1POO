const { CanalWhatsapp, CanalInstagram, CanalTelegram, CanalFacebook } = require('./canais')
const { MensagemTexto, MensagemVideo, MensagemFoto, MensagemArquivo } = require('./mensagens')

// Exemplo de uso
const canalWhatsapp = new CanalWhatsapp("+5511949302056")
const canalInstagram = new CanalInstagram("erickdays")
const canalTelegram = new CanalTelegram("+5511949302056")
const canalFacebook = new CanalFacebook("Erick Dias")

const mensagemTexto = new MensagemTexto("Olá, como você está?", "texto", "2023-12-01")
const mensagemVideo = new MensagemVideo("Vídeo interessante", "mp4", "2m30s", "video.mp4")
const mensagemFoto = new MensagemFoto("Imagem legal", "jpg", "foto.jpg")
const mensagemArquivo = new MensagemArquivo("Documento importante", "pdf", "documento.pdf")


console.log('=========================================================================================================================================================')
mensagemTexto.enviar(canalWhatsapp)
mensagemVideo.enviar(canalWhatsapp)
mensagemFoto.enviar(canalWhatsapp)
mensagemArquivo.enviar(canalWhatsapp)
console.log('=========================================================================================================================================================')
mensagemTexto.enviar(canalInstagram)
mensagemVideo.enviar(canalInstagram)
mensagemFoto.enviar(canalInstagram)
mensagemArquivo.enviar(canalInstagram)
console.log('=========================================================================================================================================================')
mensagemTexto.enviar(canalTelegram)
mensagemVideo.enviar(canalTelegram)
mensagemFoto.enviar(canalTelegram)
mensagemArquivo.enviar(canalTelegram)
console.log('=========================================================================================================================================================')
mensagemTexto.enviar(canalFacebook)
mensagemVideo.enviar(canalFacebook)
mensagemFoto.enviar(canalFacebook)
mensagemArquivo.enviar(canalFacebook)
console.log('=========================================================================================================================================================')


