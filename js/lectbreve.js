// JS LECTURA BREVE
    // Función para cargar y mostrar un salmo específico
    function cargarLecturaBreve(idlBreve, contenedorId) {
        const rutaArchivo = `/src/lectbreve/${idlBreve}.txt`; // Ruta del archivo

        fetch(rutaArchivo)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar la lectura breve: ${idlBreve}`);
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
                document.getElementById(contenedorId).textContent = `Error al cargar el salmo: ${idlBreve}`;
            });
    }

    // Cargar salmos específicos en contenedores específicos
    cargarLecturaBreve('Dt7,6.8-9', 'Dt7,6.8-9');
    cargarLecturaBreve('Dt7,6.8-9', 'Dt7,6.8-9');