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
            title: "Unidad 4 - Contenido",
            category: "documentos",
            content: 
            `
                <h2>Unidad 4 - Contenido</h2>
                <iframe src="unidad4.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="unidad4.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "PIB Mexicano", 
            category: "documentos",
            content: 
            `
                <h2>PIB Mexicano, que es y como se distribuye</h2>
                <p><strong>¿Qué es el PIB?</strong></p>
                <p>El Producto Interno Bruto (PIB) es un indicador económico que representa el valor monetario de todos los bienes y servicios finales producidos por un país en un periodo determinado, generalmente un trimestre o un año. Es una de las principales herramientas que se utilizan para medir la actividad económica de un país y su crecimiento.</p>
                <p><strong>PIB de México</strong></p>
                <p>En el caso de México, el PIB refleja el comportamiento de sectores clave como la industria, los servicios, la agricultura y el comercio. Según datos recientes del INEGI (Instituto Nacional de Estadística y Geografía), el PIB de México en 2024 tuvo un crecimiento aproximado del 3%, aunque este valor varía por trimestre y por región.</p>
                <p>El PIB se puede dividir en tres grandes sectores:</p>
            <ul>
                <li><strong>Sector primario:</strong> Agricultura, ganadería, pesca y minería. Aunque este sector ocupa un menor porcentaje del PIB (alrededor del 3-4%), es fundamental para el desarrollo regional.</li>
                <li><strong>Sector secundario:</strong> Industria manufacturera, construcción, energía y transformación. Representa aproximadamente el 30% del PIB mexicano y es clave para las exportaciones.</li>
                <li><strong>Sector terciario:</strong> Servicios como comercio, turismo, educación, salud, finanzas y transporte. Este sector representa más del 60% del PIB nacional y es el que más empleo genera en el país.</li>
            </ul>

            <p><strong>Importancia del PIB para México</strong></p>
            <p>El PIB no solo sirve para medir el crecimiento económico, sino que también influye en decisiones clave como la política fiscal, las tasas de interés, la inversión pública y privada, y la evaluación del bienestar económico de la población. Un PIB creciente suele asociarse con mayores oportunidades de empleo, mejores servicios públicos y mayor inversión extranjera.</p>
            <p><strong>Críticas y limitaciones</strong></p>
            <p>Aunque el PIB es un indicador muy útil, también tiene limitaciones. No mide la distribución de la riqueza (es decir, puede crecer el PIB pero aumentar la desigualdad), ni considera el impacto ambiental, el trabajo no remunerado o la economía informal (que en México es bastante grande, representando más del 20% del PIB según algunas estimaciones). Además, no refleja la calidad de vida ni el bienestar emocional de las personas.</p>
                <iframe src="Tarea_PIB.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="Tarea_PIB.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Conceptos", 
            category: "documentos",
            content: 
            `
                <h2>Conceptos - Tarea</h2>
                <p><strong>Externalización de costos</strong> es un término que se refiere a una práctica común en los sistemas económicos modernos, donde las empresas transfieren o “sacan” ciertos costos de producción fuera de sus responsabilidades directas. Es decir, en lugar de asumir todos los costos reales que implica fabricar un producto (como la contaminación, el impacto ambiental, los efectos en la salud de los trabajadores o comunidades cercanas), esos costos los paga la sociedad, el medio ambiente o las generaciones futuras.</p>
                <p>Por ejemplo, si una fábrica contamina un río pero no paga por limpiarlo, está externalizando ese costo. Otro caso es cuando se pagan salarios muy bajos en otros países para mantener precios bajos: la empresa gana más, pero los trabajadores y sus familias sufren. Aunque el producto parezca barato para el consumidor, el “costo real” ha sido desplazado a otras personas o al entorno natural.</p>
                <p>Este fenómeno está relacionado con el modelo de consumo excesivo y rápido (“usar y tirar”) que promueve el sistema capitalista actual. Al externalizar los costos, las empresas pueden ofrecer productos más baratos, lo cual fomenta el consumo, pero esto genera daños colaterales que no se ven reflejados en el precio final.</p>
                <p><strong>Internalización de costos</strong>, por otro lado, es el proceso contrario. Consiste en que las empresas asuman plenamente todos los costos que genera su producción, incluyendo los ambientales, sociales y de salud. Esto implica, por ejemplo, pagar impuestos por contaminar, invertir en tecnologías limpias, ofrecer condiciones laborales justas, y responsabilizarse por el reciclaje o disposición final de sus productos.</p>
                <p>Cuando los costos se internalizan correctamente, los productos reflejan su verdadero valor y las empresas tienen un incentivo económico para ser más sustentables. Además, promueve un consumo más consciente en la sociedad, ya que los consumidores pueden tomar decisiones informadas basadas no solo en el precio, sino en el impacto total del producto.</p>
                <iframe src="internalizacion_de_costos.pdf" class="embedded-pdf"></iframe>
                <div class="pdf-buttons">
                    <button class="download-btn" data-pdf="internalizacion_de_costos.pdf">
                        <i class="fas fa-download"></i> Descargar PDF
                    </button>
                </div>
            `
        },
        {
            title: "Servicios Ambientales", 
            category: "documentos",
            content: 
            `
                <h2>Servicios Ambientales</h2>
<h3>1. Secretaría del Medio Ambiente del Estado de Michoacán (SECMA)</h3>
<p>La SECMA es la dependencia estatal encargada de diseñar, coordinar y ejecutar políticas públicas relacionadas con la conservación y protección del patrimonio natural de Michoacán. Sus principales funciones incluyen:</p>
<ul>
  <li>Regulación ambiental y normatividad.</li>
  <li>Evaluación de impacto ambiental.</li>
  <li>Ordenamiento ecológico territorial.</li>
  <li>Educación ambiental y participación ciudadana.</li>
  <li>Manejo de residuos y emisiones a la atmósfera.</li>
  <li>Conservación de la biodiversidad y áreas naturales protegidas.</li>
</ul>
<p>Dirección: Escarcha #272, Fracc. Prados del Campestre, Morelia, Michoacán, C.P. 58297.</p>
<p>Teléfono: (443) 324-8400.</p>
<p>Más información: <a href="https://medioambiente.michoacan.gob.mx/">https://medioambiente.michoacan.gob.mx/</a></p>

<h3>2. Administración del Sistema Portuario Nacional Lázaro Cárdenas (ASIPONA)</h3>
<p>ASIPONA es la entidad federal responsable de la administración y operación del Puerto de Lázaro Cárdenas. En materia ambiental, cuenta con un Sistema Ambiental Portuario que se enfoca en:</p>
<ul>
  <li>Reforestación de manglares y áreas verdes.</li>
  <li>Monitoreo de la calidad del aire y del agua.</li>
  <li>Gestión integral de residuos.</li>
  <li>Programas de educación ambiental y sustentabilidad.</li>
</ul>
<p>Dirección: Boulevard de las Islas No. 1, Isla del Cayacal, Lázaro Cárdenas, Michoacán, C.P. 60950.</p>
<p>Teléfono: +52 (753) 533-0700.</p>
<p>Más información: <a href="https://www.puertolazarocardenas.com.mx/">https://www.puertolazarocardenas.com.mx/</a></p>

<h3>3. Departamento de Ecología del Municipio de Lázaro Cárdenas</h3>
<p>Este departamento municipal se encarga de la gestión ambiental a nivel local, incluyendo:</p>
<ul>
  <li>Emisión de dictámenes de poda y tala de árboles.</li>
  <li>Supervisión de la disposición final de residuos sólidos urbanos.</li>
  <li>Atención a denuncias ambientales ciudadanas.</li>
  <li>Promoción de campañas de educación ambiental.</li>
</ul>
<p>Ubicación: Segunda planta, frente a los baños públicos del Ayuntamiento de Lázaro Cárdenas.</p>
<p>Más información: <a href="https://rmtys.lazaro-cardenas.gob.mx/dependencia-tramite/165">https://rmtys.lazaro-cardenas.gob.mx/dependencia-tramite/165</a></p>

<h3>4. Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT)</h3>
<p>SEMARNAT es la dependencia federal encargada de la protección, restauración y conservación de los ecosistemas y recursos naturales del país. En Michoacán, cuenta con oficinas que gestionan:</p>
<ul>
  <li>Evaluación de impacto ambiental para proyectos federales.</li>
  <li>Autorizaciones en zonas federales marítimo-terrestres.</li>
  <li>Regulación de actividades en áreas naturales protegidas federales.</li>
</ul>
<p>Dirección en Michoacán: Avenida Acueducto No. 3626, Colonia Ejidal Ocolusén, Morelia, Michoacán, C.P. 58279.</p>
<p>Teléfono: (443) 315-9730.</p>
<p>Más información: <a href="https://www.gob.mx/semarnat">https://www.gob.mx/semarnat</a></p>

<h3>5. Procuraduría Federal de Protección al Ambiente (PROFEPA)</h3>
<p>PROFEPA es la autoridad encargada de vigilar el cumplimiento de la legislación ambiental federal. Sus funciones incluyen:</p>
<ul>
  <li>Inspección y vigilancia de actividades con impacto ambiental.</li>
  <li>Atención a denuncias por daños al medio ambiente.</li>
  <li>Aplicación de sanciones por incumplimiento de normativas ambientales.</li>
</ul>
<p>En Michoacán, PROFEPA cuenta con una Oficina de Representación para atender asuntos locales.</p>
<p>Más información: <a href="https://www.gob.mx/profepa">https://www.gob.mx/profepa</a></p>

            `
        },
        {
            title: "Historias de las cosas",
            content: `
                <h2>Video - Historias de las cosas</h2>
                <p>¿De dónde vienen las cosas que compramos y adónde van a parar?</p>
                <p>Para empezar es importante mencionar que todas las cosas se mueven a través de un sistema, de un esquema llamado “Economía de los materiales”: desde extracción, a la producción, a la distribución, al consumo y a la disposición. La “Economía de los materiales” es un sistema lineal, por lo que tiene muchas fallas ya que vivimos en un mundo finito.</p>
                <p><strong>¿Qué falta en la “Economía de los materiales”?</strong></p>

            <ol>
                <li><strong>Personas:</strong> En todas las fases de este sistema trabajan personas, pero todas aquí no valen igual. El gobierno es el encargado de cuidarnos. Enseña a reducir el consumo innecesario en hogares y empresas.</li>
                <li><strong>Empresas:</strong> A medida que ellas han crecido en tamaño y poder, hemos visto cambios en el gobierno que parecen estar más preocupados por ellas que por nosotros.</li>
                <li><strong>Recursos naturales:</strong> Estos recursos son la fuente principal para la elaboración de productos, pero su explotación no está moderada y han acabado con la tercera parte del planeta.</li>
                <li><strong>Químicos:</strong> En la producción se usan químicos que hacen a las cosas resistentes al fuego, pero son neurotóxicos. Estos tóxicos se acumulan en la cadena alimentaria y se concentran en nuestro cuerpo.</li>
                <li><strong>Mercados:</strong> Antes de llegar al consumidor, se “externalizan los costos reales de la producción” y estos se ven reflejados en sus precios, porque se mal pagó el trabajo de su elaboración e incluso se invadieron países para la exportación de los recursos, con tal de tener un producto más económico.</li>
                <li><strong>Consumo (flecha dorada):</strong> Es el motor que lo mueve, y es tan importante que se ha convertido en una prioridad para la élite. Es decir, el 99% de las cosas que cosechamos, minamos y transportamos en el sistema es basura en menos de seis meses.</li>
                <li><strong>Moda:</strong> Te causa la sensación de valer menos y de que eres una persona anticuada, y te lleva a seguir el patrón de la sociedad. En resumen, solo existe para que sigas comprando.</li>
                <li><strong>Publicidad:</strong> Es la que impulsa a la moda para seguir comprando y te muestra cosas que no necesitas. Te educa para ser consumista.</li>
                <li><strong>Contaminación:</strong> Está presente en cada uno de los puntos anteriores y afecta la salud de todos en todo momento.</li>
            </ol>

<p><strong>Opinión personal:</strong> Las cosas solo podrán cambiar cuando las personas desechen la mentalidad consumista e implementen la sustentabilidad: química verde, reciclaje, ciclo cerrado, energía renovable, economías locales vibrantes.</p>
                
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/ASoC231fE0U" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <iframe src="historia_de_las_cosas.pdf" class="embedded-pdf"></iframe>
                
                <button class="download-btn" data-pdf="historia_de_las_cosas.pdf">
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