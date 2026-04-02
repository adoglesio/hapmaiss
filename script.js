function whatsapp(mensagem){

let numero = "5573999257758"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

}