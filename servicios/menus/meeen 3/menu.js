
        document.addEventListener('DOMContentLoaded', function() {
            // Obtener todos los botones de categoría y secciones
            const categoryButtons = document.querySelectorAll('.category-btn');
            const menuSections = document.querySelectorAll('.menu-section');
            
            // Agregar evento click a cada botón
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Remover clase active de todos los botones y secciones
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    menuSections.forEach(section => section.classList.remove('active'));
                    
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    // Mostrar la sección correspondiente
                    document.getElementById(category).classList.add('active');
                });
            });
            
            // Simular carga de imágenes (en un caso real, aquí se cargarían imágenes reales)
            console.log("Menú cargado correctamente");
        });