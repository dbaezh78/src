// Obtener la fecha actual
const fechaActual = new Date();
const mes = fechaActual.getMonth() + 1; // getMonth() devuelve 0-11
const dia = fechaActual.getDate();
const diaSemana = fechaActual.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();

// Construir la ruta del archivo de audio
const rutaAudio = `/ev/to/${mes}/${dia}/${diaSemana}.mp3`;

// Imprimir la ruta para verificar
console.log("Ruta del audio:", rutaAudio);

// Obtener el elemento de audio y la fuente
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Asignar la ruta del archivo de audio a la fuente
audioSource.src = rutaAudio;

// Recargar el reproductor de audio para que cargue el nuevo archivo
audioPlayer.load();

// Manejar errores de carga
audioPlayer.addEventListener('error', (e) => {
    console.error("Error al cargar el audio:", e);
    switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            console.error("El formato de audio no es compatible o la ruta es incorrecta.");
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            console.error("Error de red al intentar cargar el audio.");
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            console.error("Error al decodificar el archivo de audio.");
            break;
        default:
            console.error("Error desconocido al cargar el audio.");
    }
});

// Intentar reproducir el audio (puede no funcionar debido a políticas de autoplay)
audioPlayer.play().catch((error) => {
    console.warn("No se pudo reproducir automáticamente:", error);
    console.info("El usuario debe interactuar con la página para reproducir el audio.");
});