// Navegación entre categorías
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const categoryItems = document.querySelectorAll('.category-item');
    const menuSections = document.querySelectorAll('.menu-section');
    
    // Configurar navegación por categorías
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener la categoría seleccionada
            const targetCategory = this.getAttribute('data-category');
            const targetSection = document.getElementById(targetCategory);
            
            // Remover clase active de todas las categorías
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Agregar clase active a la categoría clickeada
            this.classList.add('active');
            
            // Ocultar todas las secciones del menú
            menuSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección correspondiente
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Desplazamiento suave a la sección
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Inicializar sliders de imágenes
    initImageSliders();
    
    // Configurar navegación por hash (URL)
    setupHashNavigation();
    
    // Añadir efectos visuales
    addVisualEffects();
    
    // Mostrar mensaje de bienvenida
    showWelcomeMessage();
});

// Función para inicializar sliders de imágenes
function initImageSliders() {
    document.querySelectorAll('.card-image-slider').forEach(slider => {
        const images = slider.querySelectorAll('.slider-images img');
        const dots = slider.querySelectorAll('.slider-dots .dot');
        const prevBtn = slider.querySelector('.slider-prev');
        const nextBtn = slider.querySelector('.slider-next');
        
        let currentIndex = 0;
        
        // Solo inicializar si hay más de una imagen
        if (images.length <= 1) {
            // Ocultar controles si solo hay una imagen
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (slider.querySelector('.slider-dots')) {
                slider.querySelector('.slider-dots').style.display = 'none';
            }
            return;
        }
        
        // Función para mostrar una imagen específica
        function showImage(index) {
            // Asegurar que el índice esté dentro del rango
            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;
            
            // Ocultar todas las imágenes
            images.forEach(img => img.classList.remove('active'));
            
            // Mostrar la imagen actual
            images[index].classList.add('active');
            
            // Actualizar dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Configurar botones de navegación
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showImage(currentIndex - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showImage(currentIndex + 1);
            });
        }
        
        // Configurar dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showImage(index);
            });
        });
        
        // Auto-slide cada 5 segundos
        let slideInterval = setInterval(() => {
            showImage(currentIndex + 1);
        }, 5000);
        
        // Pausar auto-slide al hacer hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                showImage(currentIndex + 1);
            }, 5000);
        });
        
        // Inicializar mostrando la primera imagen
        showImage(0);
    });
}

// Configurar navegación por hash (URL)
function setupHashNavigation() {
    // Si hay un hash en la URL, navegar a esa sección
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetCategory = document.querySelector(`.category-item[data-category="${hash}"]`);
        
        if (targetCategory) {
            // Simular click en la categoría correspondiente
            setTimeout(() => {
                targetCategory.click();
            }, 100);
        }
    }
    
    // Actualizar hash al cambiar de categoría
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            window.history.pushState(null, null, `#${category}`);
        });
    });
}

// Añadir efectos visuales adicionales
function addVisualEffects() {
    // Efecto de aparición para tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas del menú
    document.querySelectorAll('.menu-card').forEach(card => {
        observer.observe(card);
    });
    
    // Efecto de parpadeo para precios
    setInterval(() => {
        const prices = document.querySelectorAll('.price');
        prices.forEach(price => {
            price.style.transform = 'scale(1.05)';
            price.style.textShadow = '0 0 10px rgba(212, 160, 23, 0.5)';
            
            setTimeout(() => {
                price.style.transform = 'scale(1)';
                price.style.textShadow = 'none';
            }, 300);
        });
    }, 10000); // Cada 10 segundos
    
    // Efecto de hover mejorado para categorías
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.boxShadow = '0 10px 20px rgba(212, 160, 23, 0.3)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            }
        });
    });
}

// Mostrar mensaje de bienvenida
function showWelcomeMessage() {
    // Crear overlay de bienvenida
    const welcomeOverlay = document.createElement('div');
    welcomeOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: white;
        text-align: center;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.5s ease;
    `;
    
    // Contenido del mensaje
    welcomeOverlay.innerHTML = `
        <div style="max-width: 600px;">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <i class="fas fa-mountain" style="color: #d4a017; font-size: 48px; margin-right: 15px;"></i>
                <h1 style="font-size: 42px; font-weight: 900; font-family: 'Montserrat', sans-serif; color: #d4a017;">THE ROCK</h1>
            </div>
            <h2 style="font-size: 28px; margin-bottom: 15px; font-family: 'Playfair Display', serif;">Menú Completo</h2>
            <p style="font-size: 18px; margin-bottom: 30px; opacity: 0.9; line-height: 1.6;">
                Explora nuestra amplia selección de hamburguesas gourmet, carnes premium, hot dogs, snacks, boneless, papas especiales, micheladas artesanales y cocteles exclusivos.
            </p>
            <p style="font-size: 16px; margin-bottom: 40px; color: #aaa;">
                Desplázate por las categorías o haz clic en los íconos para navegar
            </p>
            <button id="closeWelcome" style="
                background: #d4a017;
                color: #1a1a1a;
                border: none;
                padding: 15px 40px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: 'Poppins', sans-serif;
            ">
                <i class="fas fa-utensils" style="margin-right: 10px;"></i>
                Explorar Menú
            </button>
        </div>
    `;
    
    // Agregar al body
    document.body.appendChild(welcomeOverlay);
    
    // Mostrar con fade in
    setTimeout(() => {
        welcomeOverlay.style.opacity = '1';
    }, 100);
    
    // Configurar botón de cierre
    document.getElementById('closeWelcome').addEventListener('click', () => {
        welcomeOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(welcomeOverlay);
        }, 500);
    });
    
    // Cerrar al hacer clic fuera del contenido
    welcomeOverlay.addEventListener('click', (e) => {
        if (e.target === welcomeOverlay) {
            welcomeOverlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(welcomeOverlay);
            }, 500);
        }
    });
}

// Función para generar PDF del menú (opcional)
function generateMenuPDF() {
    // Esta función sería implementada con una biblioteca como jsPDF
    console.log('Función para generar PDF del menú');
}

// Función para compartir menú
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: 'Menú The Rock Restaurante & Bar',
            text: '¡Mira el increíble menú de The Rock! Hamburguesas, carnes, hot dogs, snacks, micheladas y más.',
            url: window.location.href
        });
    } else {
        // Copiar URL al portapapeles
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert('¡Enlace copiado al portapapeles! Compártelo con tus amigos.');
            });
    }
}

// Agregar botones de acción (opcional)
function addActionButtons() {
    const actionContainer = document.createElement('div');
    actionContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    `;
    
    // Botón para compartir
    const shareBtn = document.createElement('button');
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
    shareBtn.title = 'Compartir menú';
    shareBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #d4a017;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(212, 160, 23, 0.3);
        transition: all 0.3s ease;
    `;
    
    shareBtn.addEventListener('mouseenter', () => {
        shareBtn.style.transform = 'scale(1.1) rotate(15deg)';
    });
    
    shareBtn.addEventListener('mouseleave', () => {
        shareBtn.style.transform = 'scale(1) rotate(0)';
    });
    
    shareBtn.addEventListener('click', shareMenu);
    
    // Botón para imprimir
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i>';
    printBtn.title = 'Imprimir menú';
    printBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2196F3;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
        transition: all 0.3s ease;
    `;
    
    printBtn.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'scale(1.1)';
    });
    
    printBtn.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'scale(1)';
    });
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    // Botón para ir al inicio
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = '<i class="fas fa-home"></i>';
    homeBtn.title = 'Ir al inicio';
    homeBtn.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #4CAF50;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        transition: all 0.3s ease;
    `;
    
    homeBtn.addEventListener('mouseenter', () => {
        homeBtn.style.transform = 'scale(1.1)';
    });
    
    homeBtn.addEventListener('mouseleave', () => {
        homeBtn.style.transform = 'scale(1)';
    });
    
    homeBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Agregar botones al contenedor
    actionContainer.appendChild(shareBtn);
    actionContainer.appendChild(printBtn);
    actionContainer.appendChild(homeBtn);
    
    // Agregar al body después de un tiempo
    setTimeout(() => {
        document.body.appendChild(actionContainer);
    }, 2000);
}

// Inicializar botones de acción
addActionButtons();

// Función para buscar en el menú
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar en el menú...';
    searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border: 2px solid #d4a017;
        border-radius: 30px;
        background: rgba(26, 26, 26, 0.9);
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        width: 300px;
        max-width: calc(100% - 40px);
        z-index: 1001;
        backdrop-filter: blur(10px);
        display: none;
    `;
    
    document.body.appendChild(searchInput);
    
    // Agregar funcionalidad de búsqueda
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.length < 2) {
            // Mostrar todo si hay menos de 2 caracteres
            document.querySelectorAll('.menu-card').forEach(card => {
                card.style.display = 'flex';
            });
            return;
        }
        
        // Buscar en tarjetas
        document.querySelectorAll('.menu-card').forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
                card.style.animation = 'cardEntry 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Agregar botón de búsqueda
    const searchBtn = document.createElement('button');
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    searchBtn.title = 'Buscar en el menú';
    searchBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #d4a017;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(212, 160, 23, 0.3);
        transition: all 0.3s ease;
        z-index: 1002;
    `;
    
    searchBtn.addEventListener('click', () => {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
            searchInput.value = '';
            
            // Mostrar todas las tarjetas nuevamente
            document.querySelectorAll('.menu-card').forEach(card => {
                card.style.display = 'flex';
            });
        }
    });
    
    document.body.appendChild(searchBtn);
    
    // Ocultar búsqueda al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
            searchInput.style.display = 'none';
        }
    });
}

// Inicializar búsqueda
setupSearch();