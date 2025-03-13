// JS SALMO
        // Función para cargar y mostrar un salmo específico
        function cargarSalmo(idSalmo, contenedorId) {
            const rutaArchivo = `/src/sal/${idSalmo}.txt`; // Ruta del archivo

            fetch(rutaArchivo)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`No se pudo cargar el salmo: ${idSalmo}`);
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
                    document.getElementById(contenedorId).textContent = `Error al cargar el salmo: ${idSalmo}`;
                });
        }

        // Cargar salmos específicos en contenedores específicos
        cargarSalmo('sal35', 'csal35');     // El malvado escucha en su interior
        cargarSalmo('sal46', 'csal46');     // Pueblos todos, batid palmas
        cargarSalmo('sal94', 'csal94');     // Venid, aclamemos al Señor
        cargarSalmo('sal149', 'csal149');   // Cantad al Señor un cantico nuevo
        cargarSalmo('sal62_2_9', 'csal62'); // 
        cargarSalmo('Lc1,68-79', 'Lc1,68-79'); //Cantico de Zacarias