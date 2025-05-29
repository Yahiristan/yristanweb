document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    const viewButtons = document.querySelectorAll('.view-btn');
    const closeButtons = document.querySelectorAll('.close-modal');
    const filterButtons = document.querySelectorAll('.gallery-filters button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Estilos CSS para las imágenes en el modal
    const modalImageStyle = `
        <style>
            .modal-image {
                max-width: 100%;
                height: auto;
                max-height: 300px;
                display: bottom;
                margin: 0 auto 20px auto;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            
            .embedded-pdf {
                width: 100%;
                height: 700px;
                border: 1px solid #ddd;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .download-btn {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-top: 15px;
                margin-bottom: 20px;
                transition: background-color 0.3s;
            }
            
            .download-btn:hover {
                background-color: #45a049;
            }
            
            .video-container {
                width: 100%;
                margin: 20px 0;
            }
            
            .video-container iframe {
                width: 100%;
                height: 315px;
                border: none;
                border-radius: 8px;
            }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', modalImageStyle);
    
    const contentData = [
        {
            title: "Unidad 1 - Contenido",
            category: "documentos",
            content: 
            `
                <h2>Unidad 1 - Contenido</h2>
                <iframe src="unidad1.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="unidad1.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Sustentabilidad",
            content: `
                <h2>Sustentabilidad</h2>
                <img src="sustentabilidad.jpg" alt="Sustentabilidad Ambiental" class="modal-image">
                <p>Se refiere al mantenimiento del equilibrio de las relaciones de los seres
                    humanos con el medio, logrando un desarrollo económico mediante el avance
                    de la ciencia y la aplicación de la tecnología, sin dañar la dinámica del medio ambiente.</p>
                <p>
                    <strong>Propone:</strong> Satisfacer las necesidades de la actual generación pero sin que por esto se
                        vean sacrificadas las capacidades futuras de las siguientes generaciones de
                        satisfacer sus propias necesidades.
                </p>
                
                <h3>Tipos de sustentabilidad:</h3>
                <ul>
                    <li><strong>Sustentabilidad fuerte:</strong> Satisfacer las necesidades de la actual generación pero sin que se vean sacrificadas las capacidades futuras.</li>
                    <li><strong>Sustentabilidad débil:</strong> Aborda el tema desde la perspectiva monetaria de la economía estándar.</li>
                    <li><strong>Sustentabilidad global:</strong> Lo ve desde la perspectiva material de la ecología y las ciencias de la naturaleza.</li>
                    <li><strong>Sostenibilidad local:</strong> Es cuando se busca que procesos o sistemas pequeños (en un lugar o aspecto específico) sean sostenibles, pero no todo el sistema completo. Por ejemplo, cuidar solo el agua o la energía en una zona.</li>
                </ul>
            `
        },
        {
            title: "Tarea N1: Concepto de: Economia, sociedad y la naturaleza",
            category: "conceptos",
            content: `
                <h2>Investigar que es economía, sociedad y naturaleza</h2>
                <img src="extra1.jpg" alt="Tarea numero 1" class="modal-image">
                <h3>Conceptos</h3>
                <ul>
                    <li><strong>Economia:</strong> Sistema de producción, distribución, intercambio y consumo de bienes y servicios que satisface las necesidades humanas.</li>
                    <li><strong>Sociedad:</strong> Conjunto de invididuos que conviven en un espacio determinado compartiendo una cultura, normas y valores.</li>
                    <li><strong>Naturaleza:</strong> Conjunto de ecosistemas, recursos naturales y procesos biologicos que sostiene la vida en la tierra.</li>
                </ul>
            `
        },
        {
            title: "Tarea N1: Estudio de campo",
            category: "actividades",
            content: `
                <h2>Estudio de campo - Impacto Ambiental</h2>
                <img src="extra2.jpg" alt="Estudio de campo" class="modal-image">
                <p>Análisis de impacto ambiental en la localidad, identificando problemas y proponiendo soluciones sustentables.</p>
                
                <h3>Temas abordados:</h3>
                <ul>
                    <li>identificar en su comunidad los escenarios de sustentabilidad.</li>
                    <li>Analizar si los escenarios están presentes de manera sistémica.</li>
                    <li>Analizar como se aplican los valores y actitudes sobre el cuidado del
                    medio ambiente en esos escenarios y dentro de su comunidad.</li>
                </ul>
                
                <iframe src="investigacion_de_campo.pdf" class="embedded-pdf"></iframe>
                
                <button class="download-btn" data-pdf="investigacion_de_campo.pdf">
                    <i class="fas fa-download"></i> Descargar PDF
                </button>
            `
        },
        {
            title: "Principios de la Sustentabilidad",
            content: `
                <h2>Principios de la Sustentabilidad</h2>
                <img src="principio-sustentabilidad.jpg" alt="Sustentabilidad Ambiental" class="modal-image">
                <p>Están inspirados en una diversidad de Propuestas y declaratorias que de una u otra manera
                sirvieron de marco para la definición de las temáticas que se han abordado desde la conferencia de las naciones unidas sobre el medio ambiente.</p>
                <p>El principio más básico es la capacidad de carga se refiere a la "carga máxima" un área en particular de la tierra puede sostener sin afectar negativamente a otros organismos en ese entorno.</p>   
                
                <h3>Tipos de sustentabilidad:</h3>
                <ul>
                    <li><strong>De precaución:</strong> El principio de precaución establece que cuando haya peligro de daño irreversible al
                    medio ambiente, deben tomarse medidas para proteger el medio ambiente, incluso si existe incertidumbre científica.</li>
                    <li><strong>Sustentabilidad débil:</strong> Aborda el tema desde la perspectiva monetaria de la economía estándar.</li>
                    <li><strong>Sustentabilidad global:</strong> Lo ve desde la perspectiva material de la ecología y las ciencias de la naturaleza.</li>
                    <li><strong>Sostenibilidad local:</strong> Es cuando se busca que procesos o sistemas pequeños (en un lugar o aspecto específico) sean sostenibles, pero no todo el sistema completo. Por ejemplo, cuidar solo el agua o la energía en una zona.</li>
                </ul>
            `
        },
        {
            title: "Dimensiones de la sustentabilidad",
            content: `
                <h2>Dimensiones de la sustentabilidad</h2>
                <img src="dimensiones-sustentabilidad.jpg" alt="Dimensiones de la sustentabilidad" class="modal-image">
                <p>El desarrollo sustentable se basa en <strong>4 dimensiones clave</strong> que deben equilibrarse para lograr sostenibilidad a largo plazo:</p>
                
                <div class="dimension-grid">
                    <!-- 1. Ambiental -->
                    <div class="dimension-card">
                        <h3><i class="fas fa-leaf"></i> Ambiental</h3>
                        <ul>
                            <li>Conservación de recursos naturales.</li>
                            <li>Reducción de huella ecológica.</li>
                            <li>Protección de biodiversidad.</li>
                            <li><strong>Meta:</strong> No comprometer ecosistemas futuros.</li>
                        </ul>
                    </div>
                    
                    <!-- 2. Económica -->
                    <div class="dimension-card">
                        <h3><i class="fas fa-chart-line"></i> Económica</h3>
                        <ul>
                            <li>Crecimiento económico inclusivo.</li>
                            <li>Eficiencia en uso de recursos.</li>
                            <li>Innovación sostenible.</li>
                            <li><strong>Meta:</strong> Prosperidad sin depredación.</li>
                        </ul>
                    </div>
                    
                    <!-- 3. Social -->
                    <div class="dimension-card">
                        <h3><i class="fas fa-users"></i> Social</h3>
                        <ul>
                            <li>Equidad y justicia social.</li>
                            <li>Acceso a servicios básicos.</li>
                            <li>Participación comunitaria.</li>
                            <li><strong>Meta:</strong> Calidad de vida para todos.</li>
                        </ul>
                    </div>
                    
                    <!-- 4. Institucional -->
                    <div class="dimension-card">
                        <h3><i class="fas fa-landmark"></i> Institucional</h3>
                        <ul>
                            <li>Políticas públicas sostenibles.</li>
                            <li>Marco legal y regulatorio.</li>
                            <li>Gobernanza efectiva.</li>
                            <li><strong>Meta:</strong> Estructuras que faciliten la sostenibilidad.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            title: "Escenario Economico",
            content: `
                <h2>Escenario Económico</h2>
                <img src="escenarios-economicos.avif" alt="Sustentabilidad Ambiental" class="modal-image">
                <p>La economía falla al valorar la riqueza global de las naciones, sus recursos naturales y especialmente los precios de las materias primas. De allí la importancia de valorizar los
                recursos al menos por su costo de reposición y construir con ellos.</p>
            `
        },
        {
            title: "Escenario Socio-Cultural",
            category: "conceptos",
            content: `
                <h2>Escenario Socio-Cultural</h2>
                <img src="socio-cultural.jpg" alt="Tarea numero 1" class="modal-image">
                <p>La dimensión ecológica de la sustentabilidad promueve la protección de los recursos naturales necesarios para la seguridad alimentaria y
                energética, al mismo tiempo, comprende el requerimiento de la expansión de la producción para satisfacer a las poblaciones en crecimiento demográfico.</p>
            `
        },
    ];

    galleryItems.forEach((item, index) => {
        if (contentData[index]) {
            item.classList.add(contentData[index].category);
        }
    });

    // Asignar data-filter a los botones de filtro
    filterButtons[0].setAttribute('data-filter', 'todos');
    filterButtons[1].setAttribute('data-filter', 'conceptos');
    filterButtons[2].setAttribute('data-filter', 'actividades');
    filterButtons[3].setAttribute('data-filter', 'materiales');
    filterButtons[4].setAttribute('data-filter', 'documentos');

    viewButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            modalContent.innerHTML = contentData[index].content;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevenir scroll
            
            // Asegurar que las imágenes estén correctamente dimensionadas
            const modalImages = modalContent.querySelectorAll('.modal-image');
            modalImages.forEach(img => {
                img.onload = function() {
                    if (modal.offsetHeight > window.innerHeight) {
                        modalContent.style.maxHeight = '80vh';
                        modalContent.style.overflowY = 'auto';
                    }
                };
            });
            
            // Asignar event listeners a los botones de PDF
            setupPDFButtons();
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Filtrado de galería
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar los elementos de la galería
            galleryItems.forEach(item => {
                if (filterValue === 'todos') {
                    item.style.display = 'block';
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Al cargar la página, activar el botón "Todos" por defecto
    filterButtons[0].click();

    // Animación de entrada para elementos
    function animateItems() {
        const items = document.querySelectorAll('.animate-in');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 100 * index);
        });
    }
    
    // Llamar a la animación cuando la página esté cargada
    animateItems();
    
    // Implementar funcionalidad de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            galleryItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p') ? 
                    item.querySelector('p').textContent.toLowerCase() : '';
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Responder a cambios de tamaño de la ventana para imágenes responsivas
    window.addEventListener('resize', function() {
        if (modal.style.display === 'flex') {
            const modalImages = modalContent.querySelectorAll('.modal-image');
            if (modalImages.length > 0) {
                if (modal.offsetHeight > window.innerHeight) {
                    modalContent.style.maxHeight = '80vh';
                    modalContent.style.overflowY = 'auto';
                } else {
                    modalContent.style.maxHeight = '';
                    modalContent.style.overflowY = '';
                }
            }
        }
    });
    
    // ----- FUNCIONES PARA MANEJAR PDFs ----- //
    
    function setupPDFButtons() {
        const downloadButtons = document.querySelectorAll('.download-btn');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pdfUrl = this.getAttribute('data-pdf');
                downloadPDF(pdfUrl);
            });
        });
    }
    
    // Función para descargar PDF
    function downloadPDF(pdfUrl) {
        console.log("Intentando descargar:", pdfUrl);
        
        try {
            // Crear un enlace temporal
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = pdfUrl.split('/').pop(); // Obtener el nombre del archivo de la URL
            link.target = '_blank';
            
            // Añadir al documento y simular clic
            document.body.appendChild(link);
            link.click();
            
            // Limpiar
            setTimeout(() => {
                document.body.removeChild(link);
            }, 100);
        } catch (error) {
            console.error("Error al descargar PDF:", error);
            alert("No se pudo descargar el PDF. Por favor intente nuevamente.");
        }
    }
});