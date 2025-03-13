// JS HIMNOS
    // Función para cargar y mostrar un salmo específico
    function cargarHimnos(idHimnos, contenedorId) {
        const rutaArchivo = `/src/himno/${idHimnos}.txt`; // Ruta del archivo

        fetch(rutaArchivo)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar el Himno: ${idHimnos}`);
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
                document.getElementById(contenedorId).textContent = `Error al cargar el salmo: ${idHimnos}`;
            });
    }

    // Cargar salmos específicos en contenedores específicos
    cargarHimnos('VenSenorNoTardes', 'VenSenorNoTardes');
    cargarHimnos('Cuandovueltohaciatidemipecado', 'Cuandovueltohaciatidemipecado');
    cargarHimnos('sal62_2_9', 'csal62');