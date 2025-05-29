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
            title: "Unidad 2 - Contenido",
            category: "documentos",
            content: 
            `
                <h2>Unidad 2 - Contenido</h2>
                <iframe src="unidad2.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="unidad2.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Tarea 1 - Informe Brundtland",
            category: "documentos",
            content: 
            `
                <h2>Informe Brundtland - Nuestro Futuro Común</h2>
                <img src="ecosistema.jpg" alt="Portada del Informe Brundtland" class="modal-image">
                <p>Documento histórico (1987) que definió el <strong>desarrollo sustentable</strong> como: <em>"Satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras"</em>.</p>
        
                <h3>Claves del informe:</h3>
                <ul>
                    <li>Primer llamado global a integrar <strong>ambiente</strong> y <strong>desarrollo económico</strong></li>
                    <li>Base para la <strong>Cumbre de la Tierra (1992)</strong> y los <strong>Objetivos de Desarrollo Sostenible</strong></li>
                    <li>Tres pilares: <strong>ecológico</strong>, <strong>social</strong> y <strong>económico</strong></li>
                </ul>
                <iframe src="informe.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="informe.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Tarea 2 - Video concientización del medio ambiente", 
            category: "documentos",
            content: 
            `
                <h2>Video concientización del medio ambiente</h2>
                <img src="oceano.jpg" alt="Imagen tarea numero 2" class="modal-image">
                <p>Proceso educativo fundamental para crear conciencia sobre la importancia del agua como recurso vital y limitado, promoviendo su uso responsable y sostenible en la vida cotidiana, la industria y la agricultura.</p>
        
                <h3>Aspectos clave:</h3>
                <ul>
                    <li><strong>Uso racional:</strong> Enseña a reducir el consumo innecesario en hogares y empresas</li>
                    <li><strong>Prevención de contaminación:</strong> Promueve evitar el vertido de sustancias tóxicas a ríos y mares</li>
                    <li><strong>Técnicas de conservación:</strong> Difunde métodos como captación de lluvia y sistemas de riego eficiente</li>
                    <li><strong>Impacto colectivo:</strong> Destaca cómo cada acción individual contribuye a la preservación global</li>
                    <li><strong>Crisis hídrica:</strong> Informa sobre la escasez actual y futura del recurso</li>
                </ul>
                <h3>Acciones concretas:</h3>
                <p>Reparar fugas, cerrar llaves al lavarse los dientes, usar dispositivos ahorradores, reutilizar aguas grises y participar en programas de saneamiento de cuerpos de agua.</p>
                <div class="video-container">
                    <iframe src="https://drive.google.com/file/u/1/d/1pv5sllc5iwvHGYzX6ViJyze9bZZ9xk0K/view?usp=sharing" title="Video del proyecto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <iframe src="video_medioambiente.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="video_medioambiente.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Tarea 3 - Reporte Siembra", 
            category: "documentos",
            content: 
            `
                <h2>Reporte de siembra</h2>
                <iframe src="siembra.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="siembra.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
                {
            title: "Análisis: Geotormenta",
            content: `
                <h2>Análisis de la película Geotormenta</h2>
                <img src="geotormenta.avif" alt="Película Geotormenta" class="modal-image">
                <p>Geotormenta (2017) es una película que, aunque ficción, plantea interesantes reflexiones sobre el cambio climático y la manipulación tecnológica del clima.</p>
                
                <h3>Elementos para análisis:</h3>
                <ul>
                    <li><strong>Premisa tecnológica:</strong> Control del clima mediante satélites como solución a eventos climáticos extremos.</li>
                    <li><strong>Consecuencias imprevistas:</strong> La tecnología creada para proteger se convierte en un arma potencial.</li>
                    <li><strong>Dilemas éticos:</strong> ¿Quién debe controlar sistemas que afectan a todo el planeta?</li>
                    <li><strong>Cooperación internacional:</strong> Necesidad de colaboración global para enfrentar problemas ambientales.</li>
                </ul>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/zEtUt-14wpQ" title="Trailer de Geotormenta" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <iframe src="geotormenta.pdf" class="embedded-pdf"></iframe>
                
                <button class="download-btn" data-pdf="geotormenta.pdf">
                    <i class="fas fa-download"></i> Descargar PDF
                </button>
            `
        }
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