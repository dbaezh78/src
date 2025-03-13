// JS ORACION FINAL-->
    // Función para cargar y mostrar un salmo específico
    function cargaroracion(idOracion, contenedorId) {
        const rutaArchivo = `/src/oracion/${idOracion}.txt`; // Ruta del archivo

        fetch(rutaArchivo)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar el salmo: ${idOracion}`);
                }
                return response.text();
            })
            .then(data => {
                // Reemplazar saltos de línea con <br> o usar <pre>
                const contenidoFormateado = data.replace(/\n/g, '<br>');
                document.getElementById(contenedorId).innerHTML = contenidoFormateado;
            })
            .catch(error => {
                console.error(error);
                document.getElementById(contenedorId).textContent = `Error al cargar la Oracion: ${idOracion}`;
            });
    }

    // Cargar salmos específicos en contenedores específicos
    cargaroracion('tcs1doora', 'tcs1doora');
    cargaroracion('tcs1miora', 'tcs1miora');
    cargaroracion('tos1luora', 'tos1luora');