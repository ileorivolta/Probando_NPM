const messages = [
    "Ivan",
    "Leonardo",
    "Viviana",
    "Maria",
    "El pepe",
    "Mengano",
    "Fulanito",
    "Don cangrejo",
    "Calamarino Elegante",
    "Morty",
    "Pickle Rick"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}