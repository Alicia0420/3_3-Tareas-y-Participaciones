function validarEdad() {
    let fechaNacimiento = document.getElementById("fechaNacimiento").value
    let hoy = new Date()
    let nacimiento = new Date(fechaNacimiento)

    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    let m = hoy.getMonth() - nacimiento.getMonth()

    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--
    }

    if (edad >= 18) {
        document.getElementById("resultado").textContent = "Eres mayor de edad . ✅ Comencemos a jugar."
        alert("Eres mayor de edad. ✅ ¡Comencemos a jugar!")
        iniciarJuego()
    } else {
        document.getElementById("resultado").textContent = "Eres menor de edad. ❌ No puedes jugar 😣"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📄"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️"
    }
    return resultado
}

// Ajustada según tus instrucciones
function combate(jugador, pc) {
    if (pc == jugador) {
        alert("Empate")
        empate++
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("Ganaste")
        triunfos++
    } else {
        alert("Perdiste")
        perdidas++
    }
}

function iniciarJuego() {
    let pc = 0
    let jugador = 0
    triunfos = 0 // Inicializamos los contadores
    perdidas = 0
    empate = 0

    while (triunfos < 3 && perdidas < 3) {
        jugador = parseInt(prompt("Elige:  1- Piedra 🪨, 2- Papel 📄, 3- Tijera ✂️"))
        pc = aleatorio(1, 3)
        alert("PC elige: " + eleccion(pc))
        alert("Tú eliges: " + eleccion(jugador))
        combate(jugador, pc)
    }

    if (triunfos === 3) {
        alert("¡Felicidades, ganaste el juego!      Marcador final                Ganadas: " + triunfos +"    Perdidas: " + perdidas +"   Empates: " + empate)
    } else if (perdidas === 3) {
        alert("Oh no, perdiste el juego. ¡Sigue practicando!        Marcador final                Ganadas: " + triunfos +"    Perdidas: " + perdidas +"   Empates: " + empate)
    }
}
