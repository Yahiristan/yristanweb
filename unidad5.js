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
            title: "Contenido de la unidad 5 - PDF",
            category: "documentos",
            content: 
            `
                <h2>Contenido de la unidad 5 - PDF</h2>
                <iframe src="unidad5.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="unidad5.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "HuellaEcologica", 
            category: "documentos",
            content: 
            `
                <h2>Tarea - Huella Ecologica</h2>
<h3>¿Qué es la Huella Ambiental?</h3>
<p>La <strong>Huella Ambiental</strong> es un indicador que evalúa el impacto que las actividades humanas tienen sobre el medio ambiente. Se calcula considerando diversos factores como el consumo de recursos naturales, la generación de residuos y las emisiones contaminantes. Esta métrica permite comprender la presión que ejercemos sobre los ecosistemas y es fundamental para promover prácticas sostenibles.</p>

<h3>Importancia en el Desarrollo Sustentable</h3>
<p>En el contexto del <strong>desarrollo sustentable</strong>, la Huella Ambiental es crucial para:</p>
<ul>
  <li>Evaluar la sostenibilidad de políticas y prácticas económicas.</li>
  <li>Identificar áreas donde se puede reducir el impacto ambiental.</li>
  <li>Fomentar la responsabilidad ambiental en individuos y organizaciones.</li>
  <li>Guiar la toma de decisiones hacia un equilibrio entre crecimiento económico, equidad social y protección ambiental.</li>
</ul>

<h3>Componentes de la Huella Ambiental</h3>
<p>La Huella Ambiental abarca varios aspectos, entre los que se incluyen:</p>
<ul>
  <li><strong>Huella de carbono:</strong> Emisiones de gases de efecto invernadero.</li>
  <li><strong>Huella hídrica:</strong> Consumo y contaminación del agua.</li>
  <li><strong>Huella ecológica:</strong> Uso de recursos naturales y ocupación del territorio.</li>
</ul>

<h3>Ejemplos de Aplicación</h3>
<p>Algunos ejemplos de cómo se aplica la Huella Ambiental en la práctica:</p>
<ul>
  <li><strong>Empresas:</strong> Implementación de sistemas de gestión ambiental para reducir emisiones y residuos.</li>
  <li><strong>Gobiernos:</strong> Desarrollo de políticas públicas que promuevan el uso eficiente de recursos y la conservación del medio ambiente.</li>
  <li><strong>Individuos:</strong> Adopción de hábitos sostenibles como el reciclaje, el uso de transporte público y la reducción del consumo de energía.</li>
</ul>

<h3>Recursos para Medir y Reducir la Huella Ambiental</h3>
<p>Existen diversas herramientas y organizaciones que ofrecen información y métodos para medir y reducir la Huella Ambiental:</p>
<ul>
  <li><a href="https://www.gob.mx/semarnat/articulos/que-es-la-huella-ecologica" target="_blank">SEMARNAT - ¿Qué es la Huella Ecológica?</a></li>
  <li><a href="https://climate.selectra.com/es/que-es/huella-ecologica" target="_blank">Selectra - Huella Ecológica: definición, cálculo y reducción</a></li>
  <li><a href="https://www.vidasostenible.org/proyectos/calculadora-de-huella-ecologica/" target="_blank">Fundación Vida Sostenible - Calculadora de Huella Ecológica</a></li>
</ul>

                <iframe src="Huellaecologica.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="Huellaecologica.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Contaminacion", 
            category: "documentos",
            content: 
            `
                <h2>Tarea - Contaminación Ambiental</h2>
                <h2>Contaminación Ambiental: Agua, Aire y Suelo</h2>

<h3>Introducción</h3>
<p>La contaminación ambiental es uno de los principales desafíos que enfrenta el mundo contemporáneo. Se refiere a la presencia de sustancias o agentes contaminantes en el medio ambiente que afectan negativamente a los ecosistemas, la salud humana y el equilibrio natural. Este fenómeno puede clasificarse según el medio que afecta: agua, aire o suelo. A continuación, se describen sus causas, consecuencias y algunas posibles soluciones.</p>

<h3>1. Contaminación del Agua</h3>
<h4>Causas</h4>
<ul>
  <li>Vertido de aguas residuales domésticas e industriales sin tratamiento.</li>
  <li>Uso excesivo de fertilizantes y pesticidas en la agricultura.</li>
  <li>Derrames de petróleo y productos químicos en cuerpos de agua.</li>
  <li>Deforestación que altera los ciclos hidrológicos.</li>
</ul>

<h4>Consecuencias</h4>
<ul>
  <li>Muerte de especies acuáticas por disminución del oxígeno en el agua.</li>
  <li>Propagación de enfermedades como el cólera o la hepatitis A.</li>
  <li>Contaminación de fuentes de agua potable.</li>
  <li>Daños económicos por pérdida de actividades pesqueras y turísticas.</li>
</ul>

<h4>Soluciones</h4>
<ul>
  <li>Tratamiento adecuado de aguas residuales.</li>
  <li>Promover prácticas agrícolas sostenibles.</li>
  <li>Control riguroso de derrames industriales y petroleros.</li>
  <li>Reforestación y protección de cuencas hidrológicas.</li>
</ul>

<h3>2. Contaminación del Aire</h3>
<h4>Causas</h4>
<ul>
  <li>Emisiones de gases contaminantes por vehículos y fábricas.</li>
  <li>Quema de combustibles fósiles (carbón, gas, petróleo).</li>
  <li>Incendios forestales.</li>
  <li>Uso de aerosoles y productos con compuestos orgánicos volátiles.</li>
</ul>

<h4>Consecuencias</h4>
<ul>
  <li>Problemas respiratorios como asma y bronquitis.</li>
  <li>Aumento del efecto invernadero y cambio climático.</li>
  <li>Lluvia ácida que daña cultivos y cuerpos de agua.</li>
  <li>Reducción de la visibilidad y deterioro de monumentos históricos.</li>
</ul>

<h4>Soluciones</h4>
<ul>
  <li>Uso de energías limpias y renovables.</li>
  <li>Normativas estrictas para las emisiones industriales.</li>
  <li>Fomentar el transporte público y no motorizado.</li>
  <li>Reforestación urbana y rural.</li>
</ul>

<h3>3. Contaminación del Suelo</h3>
<h4>Causas</h4>
<ul>
  <li>Acumulación de residuos sólidos no biodegradables.</li>
  <li>Filtración de sustancias químicas por mal manejo de residuos tóxicos.</li>
  <li>Uso excesivo de pesticidas y fertilizantes.</li>
  <li>Actividades mineras y deforestación.</li>
</ul>

<h4>Consecuencias</h4>
<ul>
  <li>Reducción de la fertilidad del suelo.</li>
  <li>Contaminación de cultivos alimentarios.</li>
  <li>Destrucción de hábitats terrestres.</li>
  <li>Riesgos para la salud por exposición a químicos peligrosos.</li>
</ul>

<h4>Soluciones</h4>
<ul>
  <li>Reciclaje y correcta gestión de residuos sólidos.</li>
  <li>Promoción de la agricultura orgánica.</li>
  <li>Rehabilitación de suelos contaminados.</li>
  <li>Educación ambiental sobre el manejo de desechos.</li>
</ul>

<h3>Conclusión</h3>
<p>La contaminación del agua, aire y suelo representa una amenaza para el bienestar del planeta y la supervivencia de las especies. Sin embargo, con la aplicación de medidas adecuadas y la participación activa de la sociedad, es posible revertir muchos de sus efectos. La educación, la legislación ambiental y el compromiso ciudadano son clave para lograr un futuro más limpio y sustentable.</p>

<h3>Integrantes del equipo</h3>
<ul>
  <li>Santillán Solano Edgar Yahir</li>
  <li>Morelos Rodríguez Elizabeth</li>
  <li>Soto Aguirre Jesús Daniel</li>
</ul>

                <iframe src="ContaminacionAmbiental.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="ContaminacionAmbiental.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Siembra", 
            category: "documentos",
            content: 
            `
                <h2>El Árbol de Huaya (Melicoccus bijugatus):</h2>

<h3>1. Origen y distribución</h3>
<p>El árbol de huaya es originario de América del Sur, especialmente de regiones como Venezuela, Colombia y Brasil. A través del tiempo se ha extendido por todo el Caribe, Centroamérica y México, siendo común en estados como Yucatán y Michoacán. Su capacidad de adaptación a suelos calizos y ambientes tropicales lo ha convertido en una especie clave para zonas áridas y semiáridas.</p>

<h3>2. Características morfológicas</h3>
<p>El <em>Melicoccus bijugatus</em> es un árbol que puede alcanzar entre 12 y 30 metros de altura. Posee hojas compuestas pinnadas y un follaje perenne. Sus flores son pequeñas, de color blanco verdoso y muy aromáticas. El fruto es una drupa redonda de color verde, con cáscara delgada y pulpa jugosa, agridulce, que recubre una o dos semillas grandes. La temporada de cosecha ocurre principalmente en verano.</p>

<h3>3. Importancia ecológica</h3>
<ul>
  <li>Contribuye a la restauración de ecosistemas degradados.</li>
  <li>Sus flores atraen a polinizadores como abejas y aves.</li>
  <li>Proporciona sombra y retención de humedad en el suelo.</li>
  <li>Mejora la estructura del suelo con sus raíces profundas.</li>
</ul>

<h3>4. Relevancia social y cultural</h3>
<p>La huaya es una fruta muy apreciada en diversas regiones de México por su sabor refrescante. Se consume fresca o en bebidas y su venta representa un ingreso económico para comunidades locales. En el estado de Yucatán, por ejemplo, forma parte del patrimonio cultural y gastronómico.</p>

<h3>5. Uso en proyectos de desarrollo sustentable</h3>
<p>En el vivero de Lázaro Cárdenas, Michoacán, la siembra de huaya forma parte de un programa de reforestación y restauración ecológica. Su resistencia a la sequía y su valor alimenticio la convierten en una excelente opción para la recuperación ambiental con enfoque productivo. Además, involucra a estudiantes, instituciones y ciudadanía en actividades de concienciación ecológica.</p>

<h3>6. Beneficios adicionales</h3>
<ul>
  <li>El fruto es rico en vitamina C, hierro y fibra.</li>
  <li>Las semillas pueden tener usos medicinales y en cosméticos.</li>
  <li>La madera del árbol puede ser utilizada para construcción rústica y leña.</li>
</ul>

<p>La huaya, más allá de su valor frutal, representa una estrategia integral de conservación, seguridad alimentaria y desarrollo rural sostenible en el contexto de Michoacán.</p>
                <iframe src="Reporte_siembra.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="Reporte_siembra.pdf">
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