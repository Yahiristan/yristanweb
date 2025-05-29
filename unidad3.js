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
            title: "Unidad 3 - Contenido",
            category: "documentos",
            content: 
            `
                <h2>Unidad 3 - Contenido</h2>
                <iframe src="unidad3.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="unidad3.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "ODS Numero 6 - Agua limpia y saneamiento",
            category: "documentos",
            content: 
            `
                <h2>ODS Numero 6 - Agua limpia y saneamiento</h2>
                <iframe src="ODS666.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="ODS666.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
          {
            title: "Todos los ODS vistos en clase",
            category: "documentos",
            content: 
            `
                <h2>ODS Presentados</h2>
                <iframe src="1.pdf" class="embedded-pdf"></iframe>
                <iframe src="2.pdf" class="embedded-pdf"></iframe>
                <iframe src="4.pdf" class="embedded-pdf"></iframe>
                <iframe src="5.pdf" class="embedded-pdf"></iframe>
                <iframe src="ODS666.pdf" class="embedded-pdf"></iframe>
                <iframe src="7.pdf" class="embedded-pdf"></iframe>
                <iframe src="8.pdf" class="embedded-pdf"></iframe>
                <iframe src="9.pdf" class="embedded-pdf"></iframe>
                <iframe src="10.pdf" class="embedded-pdf"></iframe>
                <iframe src="11.pdf" class="embedded-pdf"></iframe>
                <iframe src="12.pdf" class="embedded-pdf"></iframe>
                <iframe src="13.pdf" class="embedded-pdf"></iframe>
                <iframe src="14.pdf" class="embedded-pdf"></iframe>
                <iframe src="15.pdf" class="embedded-pdf"></iframe>
                <iframe src="16.pdf" class="embedded-pdf"></iframe>
                <iframe src="17.pdf" class="embedded-pdf"></iframe>
            `
        },
        {
            title: "Tarea 2 - LGEEPA", 
            category: "documentos",
            content: 
            `
                <h2>LGEEPA</h2>
                <img src="LGEEPA.png" alt="Imagen tarea numero 2" class="modal-image">
                <iframe src="lgeepa.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="lgeepa.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Tarea 3 - Reporte video", 
            category: "documentos",
            content: 
            `
                <h2>Reporte del video tecnologico</h2>
                <iframe src="reporte_tecnologico.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="reporte_tecnologico.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
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