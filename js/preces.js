// JS PRESES

    // Función para cargar y mostrar un salmo específico
    function cargarpreses(idPreses, contenedorId) {
        const rutaArchivo = `/src/preces/${idPreses}.txt`; // Ruta del archivo

        fetch(rutaArchivo)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar el salmo: ${idPreses}`);
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
                document.getElementById(contenedorId).textContent = `Error al cargar el salmo: ${idPreses}`;
            });
    }

    // Cargar Preses específicos en contenedores específicos
    cargarpreses('tcs1mi', 'tcs1mi');
    cargarpreses('tcs1mi', 'tcs1mi');