// Variables del juego
var board;
var score = 0;
var rows = 4;
var columns = 4;
var gameActive = false;

// Variables para la funcionalidad de música
var currentSong = null;
var songs = {
    "music1": {
        name: "Caramel Pain",
        url: "/audio/CaramelPain.mp3"
    },
    "music2": {
       name: "Caramel Pain",
        url: "/audio/Bibbidiba.mp3"
    },
    "music3": {
        name: "Kakero",
        url: "/audio/Kakero.mp3"    
    },
    "music4": {
        name: "Starry Jet",
        url: "/audio/StarryJet.mp3"    
    },
    "music5": {
        name: "Je t'aime",
        url: "/audio/JetAime.mp3"    
    },
    "music6": {
        name: "Shoka",
        url: "/audio/Shoka.mp3"
    },
    "music7": {
       name: "Rockstar",
        url: "/audio/Rockstar.mp3"
    },
    "music8": {
        name: "心という名の不可解",
        url: "/audio/KokoroToIuNanoFukakai.mp3"    
    },
    "music9": {
        name: "Value",
        url: "/audio/Value.mp3"    
    },
    "music10": {
        name: "Je t'aime",
        url: "/audio/EienNoAkuruhi.mp3"    
    }
};

// Inicialización cuando se carga la página
window.onload = function() {
    // Configurar eventos de los botones del juego
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("restart-button").addEventListener("click", restartGame);
    document.getElementById("menu-button").addEventListener("click", volverAlMenuPrincipal);
    document.getElementById("home-button").addEventListener("click", volverAlMenuPrincipal);
    
    // Configurar eventos para la sección de códigos
    document.getElementById("codigo-button").addEventListener("click", openCodigoSection);
    document.getElementById("volver-button").addEventListener("click", volverAlMenu);
    document.getElementById("codigo-submit").addEventListener("click", verificarCodigo);
    
    // Configurar eventos para las opciones de música
    setupMusicOptions();
    
    // Inicializar el fondo animado con el juego de ejemplo
    setupBackgroundGame();
}

// Función para iniciar el juego
function startGame() {
    document.getElementById("start-menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    gameActive = true;
    score = 0;
    document.getElementById("score").innerText = score;
    setGame();
}

// Función para reiniciar el juego después de Game Over
function restartGame() {
    document.getElementById("game-over").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    gameActive = true;
    score = 0;
    document.getElementById("score").innerText = score;
    setGame();
}

// Función para volver al menú principal desde el juego o desde Game Over
function volverAlMenuPrincipal() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("game-over").style.display = "none";
    document.getElementById("start-menu").style.display = "flex";
    document.getElementById("main-menu-section").style.display = "block";
    document.getElementById("codigo-section").style.display = "none";
    gameActive = false;
}

// Función para abrir la sección de códigos
function openCodigoSection() {
    document.getElementById("main-menu-section").style.display = "none";
    document.getElementById("codigo-section").style.display = "block";
}

// Función para volver al menú principal desde la sección de códigos
function volverAlMenu() {
    document.getElementById("main-menu-section").style.display = "block";
    document.getElementById("codigo-section").style.display = "none";
    document.getElementById("music-options").style.display = "none";
}

function verificarCodigo() {
    let codigo = document.getElementById("codigo-input").value.trim().toLowerCase(); 

    // Ocultamos todas las opciones de música primero
    document.getElementById("music-options").style.display = "none";
    document.getElementById("music-options2").style.display = "none";

    if (codigo === "suisei-chan") {
        alert("¡Hecho!"); 
        document.getElementById("music-options").style.display = "block";
    } else if (codigo === "ado-chan") {
        alert("¡Hecho!"); 
        document.getElementById("music-options2").style.display = "block";
    } else {
        alert("Código no válido. Intenta de nuevo.");
    }
}

// Función para configurar las opciones de música
function setupMusicOptions() {
    let musicButtons = document.querySelectorAll(".music-option");
    
    musicButtons.forEach(button => {
        button.addEventListener("click", function() {
            let musicId = this.getAttribute("data-music");
            
            if (musicId === "stop") {
                stopMusic();
            } else {
                playMusic(musicId);
            }
        });
    });
}

// Función para reproducir música
function playMusic(musicId) {
    let audioPlayer = document.getElementById("audio-player");
    let nowPlaying = document.getElementById("now-playing");
    let songNameElement = document.getElementById("song-name");
    
    // Si es la misma canción, solo pausar/reproducir
    if (currentSong === musicId && !audioPlayer.paused) {
        audioPlayer.pause();
        nowPlaying.style.display = "none";
        return;
    }
    
    // Configurar nueva canción
    currentSong = musicId;
    audioPlayer.src = songs[musicId].url;
    audioPlayer.play();
    
    // Mostrar indicador de reproducción
    songNameElement.innerText = songs[musicId].name;
    nowPlaying.style.display = "block";
    
    // Ocultar tras 5 segundos
    setTimeout(() => {
        nowPlaying.style.opacity = "0.5";
    }, 5000);
}

// Función para detener la música
function stopMusic() {
    let audioPlayer = document.getElementById("audio-player");
    let nowPlaying = document.getElementById("now-playing");
    
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    nowPlaying.style.display = "none";
    currentSong = null;
}

// Función para configurar el juego de fondo
function setupBackgroundGame() {
    // Esta función podría implementar un juego automático en el fondo
    // Por ahora dejamos un tablero estático
    let backgroundBoard = document.getElementById("background-board");
    if (backgroundBoard) {
        backgroundBoard.innerHTML = "";
        // Crear un tablero visual estático para el fondo
        for (let i = 0; i < 16; i++) {
            let tile = document.createElement("div");
            tile.className = "background-tile";
            backgroundBoard.appendChild(tile);
        }
    }
}

// Configuración del tablero de juego
function setGame() {
    // Limpiar el tablero
    document.getElementById("board").innerHTML = "";
    
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    
    setTwo();
    setTwo();
}

// Actualiza la apariencia de una casilla según su valor
function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; // Limpiar clases
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x" + num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}

// Manejo de las teclas de dirección
document.addEventListener('keyup', (e) => {
    if (!gameActive) return;
    
    let moved = false;
    let oldBoard = JSON.parse(JSON.stringify(board));
    
    if (e.code == "ArrowLeft") {
        slideLeft();
        moved = !arraysEqual(oldBoard, board);
    }
    else if (e.code == "ArrowRight") {
        slideRight();
        moved = !arraysEqual(oldBoard, board);
    }
    else if (e.code == "ArrowUp") {
        slideUp();
        moved = !arraysEqual(oldBoard, board);
    }
    else if (e.code == "ArrowDown") {
        slideDown();
        moved = !arraysEqual(oldBoard, board);
    }
    
    if (moved) {
        setTwo();
        document.getElementById("score").innerText = score;
        checkGameOver();
    }
});

// Filtra los ceros de una fila
function filterZero(row) {
    return row.filter(num => num != 0);
}

// Combina los números iguales adyacentes en una fila
function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length-1; i++) {
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }
    row = filterZero(row);
    while (row.length < columns) {
        row.push(0);
    }
    return row;
}

// Desliza las fichas hacia la izquierda
function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

// Desliza las fichas hacia la derecha
function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        board[r] = row.reverse();
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

// Desliza las fichas hacia arriba
function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

// Desliza las fichas hacia abajo
function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

// Añade un "2" en una casilla vacía aleatoria
function setTwo() {
    if (!hasEmptyTile()) {
        checkGameOver();
        return;
    }
    
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found = true;
        }
    }
}

// Verifica si hay casillas vacías
function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) {
                return true;
            }
        }
    }
    return false;
}

// Verifica si el juego ha terminado
function checkGameOver() {
    // Si hay espacios vacíos, el juego continúa
    if (hasEmptyTile()) {
        return false;
    }
    
    // Verificar combinaciones posibles horizontalmente
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 1; c++) {
            if (board[r][c] == board[r][c+1]) {
                return false; // Combinación horizontal posible
            }
        }
    }
    
    // Verificar combinaciones posibles verticalmente
    for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == board[r+1][c]) {
                return false; // Combinación vertical posible
            }
        }
    }
    
    // Si llegamos aquí, no hay movimientos posibles
    gameOver();
    return true;
}

// Función que se ejecuta cuando el juego termina
function gameOver() {
    gameActive = false;
    document.getElementById("final-score").innerText = score;
    document.getElementById("game-container").style.display = "none";
    document.getElementById("game-over").style.display = "flex";
}

// Función auxiliar para comparar tableros
function arraysEqual(a, b) {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (a[r][c] !== b[r][c]) {
                return false;
            }
        }
    }
    return true;
}

document.getElementById("miBoton").addEventListener("click", function() {
    window.location.href = "/index.html";
});