// ========== CÓDIGO JAVASCRIPT MEJORADO PARA MÓVIL ==========

// ========== VARIABLES GLOBALES ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const filtersContainer = document.getElementById('filtersContainer');
const gallery = document.getElementById('imageGallery');
const closeGalleryBtn = document.getElementById('closeGallery');
const galleryImage = document.getElementById('galleryImage');
const imageCounter = document.getElementById('imageCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const viewButtons = document.querySelectorAll('.view-images-btn');
const backToTopBtn = document.getElementById('backToTop');
const whatsappBtn = document.querySelector('.whatsapp-float');

// Colección de imágenes para cada platillo
const imageCollections = {
    'ceviche-mix': [
        'https://i.ytimg.com/vi/tX5tztajf6o/maxresdefault.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1821519449/display_1500/stock-photo-the-peruvian-mixed-ceviche-is-a-traditional-dish-it-is-different-because-it-uses-lemon-fish-1821519449.jpg',
        'https://images.unsplash.com/photo-1559314809-2b99056a8c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'ceviche-mero': [
        'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'ceviche-camaron': [
        'https://www.laylita.com/recetas/wp-content/uploads/1-Ceviche-de-camaron-ecuatoriano.jpg',
        'https://img-global.cpcdn.com/recipes/245361680761ba29/1200x630cq80/photo.jpg',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'camarones-ajillo': [
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1559314809-2b99056a8c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'camarones-empanizados': [
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'camarones-diabla': [
        'https://cdn0.recetasgratis.net/es/posts/9/9/6/camarones_a_la_diabla_31699_orig.jpg',
        'https://i.blogs.es/6629da/camarones-a-la-diabla/840_560.png',
        'https://www.isabeleats.com/wp-content/uploads/2018/09/camarones-a-la-diabla-small-4.jpg'
    ],
    'huachinango': [
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'mojarra': [
        'https://i.elhorizonte.mx/img/eh/2540000/2544720_mojarrafrita2.jpg',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://regalsprings.com.mx/wp-content/uploads/2022/09/Tilapia-Criolla-entera-Empanizada-con-Masarepa.jpg'
    ],
    'paella': [
        'https://resizer.glanacion.com/resizer/v2/paella-ZYAV4GJFERB63FEF5CLUVCYUDI.jpg?auth=20d621eac237d291b3b82a67254ec36f6016e4b63c8a1ca5e8f1630468defeb8&width=420&height=280&quality=70&smart=true',
        'https://www.goya.com/wp-content/uploads/2023/10/paella-marinera.jpg',
        'https://cdn0.recetasgratis.net/es/posts/2/0/0/paella_marinera_facil_paso_a_paso_30002_orig.jpg',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'michelada': [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DbkwPYMvLgdmwk5pm7RqTaP1c2a3LAkZYg&s',
        'https://www.cocinadelirante.com/sites/default/files/images/2023/09/como-hacer-michelada-con-camaron.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPinzp04N11k8OTrzHOYKRWcc-Cb0FASaZg&s'
        
    ],
    'horchata': [
        'https://mahatmarice.com/wp-content/uploads/2020/04/GettyImages-493110032.jpg',
        'https://carolinarice.com/wp-content/uploads/2020/07/head-horchata-de-arroz.jpg'
    ]
};

let currentCollection = [];
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let isFiltersOpen = false;

// ========== FUNCIONES DE INICIALIZACIÓN ==========
function init() {
    setupEventListeners();
    setupMobileOptimizations();
    setupAnimations();
    checkInitialState();
    
    console.log('Menú de Mariscos - Versión Móvil Mejorada cargado correctamente');
}

// ========== CONFIGURACIÓN DE EVENT LISTENERS ==========
function setupEventListeners() {
    // Filtrado de platillos
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
        button.addEventListener('touchstart', handleFilterTouchStart);
    });
    
    // Menú móvil toggle
    mobileMenuToggle.addEventListener('click', toggleMobileFilters);
    mobileMenuToggle.addEventListener('touchstart', handleTouchStart);
    
    // Galería de imágenes
    viewButtons.forEach(button => {
        button.addEventListener('click', handleViewImagesClick);
        button.addEventListener('touchstart', handleTouchStart);
    });
    
    closeGalleryBtn.addEventListener('click', closeGallery);
    closeGalleryBtn.addEventListener('touchstart', handleTouchStart);
    
    prevBtn.addEventListener('click', showPreviousImage);
    prevBtn.addEventListener('touchstart', handleTouchStart);
    
    nextBtn.addEventListener('click', showNextImage);
    nextBtn.addEventListener('touchstart', handleTouchStart);
    
    // Navegación con teclado
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Botón volver arriba
    backToTopBtn.addEventListener('click', scrollToTop);
    backToTopBtn.addEventListener('touchstart', handleTouchStart);
    
    // Scroll para mostrar/ocultar botón volver arriba
    window.addEventListener('scroll', handleScroll);
    
    // Cerrar filtros al hacer clic fuera en móvil
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleTouchOutside);
    
    // Gestos táctiles para galería
    gallery.addEventListener('touchstart', handleGalleryTouchStart, { passive: true });
    gallery.addEventListener('touchend', handleGalleryTouchEnd, { passive: true });
    
    // Optimización para orientación móvil
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
}

// ========== MANEJADORES DE EVENTOS ==========
function handleFilterClick(e) {
    const button = e.currentTarget;
    
    // Remover clase active de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Agregar clase active al botón clickeado
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    filterMenuItems(filter);
    
    // En móvil, cerrar el panel de filtros después de seleccionar
    if (window.innerWidth <= 768) {
        closeMobileFilters();
    }
    
    // Feedback táctil
    provideHapticFeedback();
}

function handleFilterTouchStart(e) {
    // Prevenir zoom doble tap en iOS
    e.preventDefault();
    const button = e.currentTarget;
    button.classList.add('active-touch');
    
    setTimeout(() => {
        button.classList.remove('active-touch');
    }, 200);
}

function toggleMobileFilters() {
    if (window.innerWidth <= 768) {
        if (isFiltersOpen) {
            closeMobileFilters();
        } else {
            openMobileFilters();
        }
    }
}

function openMobileFilters() {
    filtersContainer.classList.add('active');
    isFiltersOpen = true;
    
    // Cambiar ícono
    const icon = mobileMenuToggle.querySelector('i');
    icon.className = 'fas fa-times';
    
    // Cambiar texto
    const toggleText = mobileMenuToggle.querySelector('.toggle-text');
    if (toggleText) {
        toggleText.textContent = 'Ocultar Filtros';
    }
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    
    provideHapticFeedback();
}

function closeMobileFilters() {
    filtersContainer.classList.remove('active');
    isFiltersOpen = false;
    
    // Cambiar ícono
    const icon = mobileMenuToggle.querySelector('i');
    icon.className = 'fas fa-filter';
    
    // Cambiar texto
    const toggleText = mobileMenuToggle.querySelector('.toggle-text');
    if (toggleText) {
        toggleText.textContent = 'Filtrar Categorías';
    }
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

function handleViewImagesClick(e) {
    const button = e.currentTarget;
    const item = button.getAttribute('data-item');
    
    openGallery(item);
    provideHapticFeedback();
}

function openGallery(item) {
    currentCollection = imageCollections[item] || [];
    currentIndex = 0;
    
    if (currentCollection.length > 0) {
        galleryImage.src = currentCollection[currentIndex];
        imageCounter.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
        gallery.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // En móvil, ocultar botones flotantes
        if (window.innerWidth <= 768) {
            whatsappBtn.style.display = 'none';
            backToTopBtn.style.display = 'none';
        }
        
        // Pre-cargar imágenes siguientes
        preloadGalleryImages();
    }
}

function closeGallery() {
    gallery.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Restaurar botones flotantes
    whatsappBtn.style.display = 'flex';
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
        backToTopBtn.style.display = 'flex';
    }
    
    provideHapticFeedback();
}

function showPreviousImage() {
    if (currentCollection.length > 0) {
        currentIndex = (currentIndex - 1 + currentCollection.length) % currentCollection.length;
        updateGalleryImage();
        provideHapticFeedback();
    }
}

function showNextImage() {
    if (currentCollection.length > 0) {
        currentIndex = (currentIndex + 1) % currentCollection.length;
        updateGalleryImage();
        provideHapticFeedback();
    }
}

function updateGalleryImage() {
    galleryImage.src = currentCollection[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
    
    // Efecto de transición
    galleryImage.style.opacity = '0';
    setTimeout(() => {
        galleryImage.style.opacity = '1';
    }, 50);
}

function handleKeyboardNavigation(e) {
    if (gallery.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'Escape') {
            closeGallery();
        }
    }
}

function handleGalleryTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleGalleryTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}

function handleSwipeGesture() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swipe izquierda - siguiente imagen
            showNextImage();
        } else {
            // Swipe derecha - imagen anterior
            showPreviousImage();
        }
    }
}

function handleOutsideClick(e) {
    if (window.innerWidth <= 768 && isFiltersOpen) {
        const isClickInsideFilters = filtersContainer.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);
        
        if (!isClickInsideFilters && !isClickOnToggle) {
            closeMobileFilters();
        }
    }
}

function handleTouchOutside(e) {
    if (window.innerWidth <= 768 && isFiltersOpen) {
        const touch = e.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        
        const isTouchInsideFilters = filtersContainer.contains(target);
        const isTouchOnToggle = mobileMenuToggle.contains(target);
        
        if (!isTouchInsideFilters && !isTouchOnToggle) {
            closeMobileFilters();
        }
    }
}

function handleTouchStart(e) {
    // Feedback visual para toques
    const element = e.currentTarget;
    element.classList.add('active-touch');
    
    setTimeout(() => {
        element.classList.remove('active-touch');
    }, 200);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    provideHapticFeedback();
}

function handleScroll() {
    // Mostrar/ocultar botón volver arriba
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    // En móvil, ocultar botón volver arriba cuando la galería está abierta
    if (window.innerWidth <= 768 && gallery.style.display === 'flex') {
        backToTopBtn.style.display = 'none';
    } else if (window.innerWidth <= 768 && window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    }
}

function handleOrientationChange() {
    // Recalcular alturas de imágenes
    setTimeout(adjustImageHeights, 100);
    
    // Cerrar filtros en móvil al cambiar orientación
    if (window.innerWidth <= 768 && isFiltersOpen) {
        closeMobileFilters();
    }
}

function handleResize() {
    adjustImageHeights();
    
    // En desktop, asegurar que los filtros estén visibles
    if (window.innerWidth > 768) {
        filtersContainer.style.display = 'block';
        document.body.style.overflow = 'auto';
        isFiltersOpen = false;
    }
}

// ========== FUNCIONES DE UTILIDAD ==========
function filterMenuItems(filter) {
    menuItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
            item.style.display = 'flex';
            // Animación de aparición
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

function provideHapticFeedback() {
    // Feedback háptico para dispositivos móviles
    if ('vibrate' in navigator) {
        navigator.vibrate(10);
    }
}

function preloadGalleryImages() {
    // Pre-cargar imágenes adyacentes para una navegación más fluida
    const nextIndex = (currentIndex + 1) % currentCollection.length;
    const prevIndex = (currentIndex - 1 + currentCollection.length) % currentCollection.length;
    
    [nextIndex, prevIndex].forEach(index => {
        if (currentCollection[index]) {
            const img = new Image();
            img.src = currentCollection[index];
        }
    });
}

function adjustImageHeights() {
    const itemImages = document.querySelectorAll('.item-images');
    const isMobile = window.innerWidth <= 768;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    if (isMobile) {
        if (isLandscape) {
            // Modo horizontal en móvil
            itemImages.forEach(img => {
                img.style.height = '140px';
            });
        } else {
            // Modo vertical en móvil
            itemImages.forEach(img => {
                img.style.height = '180px';
            });
        }
    } else {
        // Desktop
        itemImages.forEach(img => {
            img.style.height = '200px';
        });
    }
}

function setupMobileOptimizations() {
    // Mejoras específicas para móvil
    if ('ontouchstart' in window) {
        // Dispositivo táctil detectado
        document.body.classList.add('touch-device');
        
        // Mejorar la capacidad de respuesta de los botones
        const buttons = document.querySelectorAll('button, .view-images-btn, .filter-btn');
        buttons.forEach(btn => {
            btn.style.cursor = 'pointer';
        });
        
        // Asegurar que los inputs sean fáciles de tocar
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.fontSize = '16px'; // Previene zoom automático en iOS
        });
    }
    
    // Ajustar alturas iniciales
    adjustImageHeights();
}

function setupAnimations() {
    // Configurar observador de intersección para animaciones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar estilos iniciales y observar cada item
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${Math.min(index * 0.1, 0.5)}s`;
        
        observer.observe(item);
    });
    
    // Animar categorías
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        category.style.transitionDelay = `${Math.min(index * 0.15, 0.6)}s`;
        
        observer.observe(category);
    });
}

function checkInitialState() {
    // Asegurar que todos los items sean visibles inicialmente
    menuItems.forEach(item => {
        item.style.display = 'flex';
    });
    
    // Verificar estado de filtros en móvil
    if (window.innerWidth <= 768) {
        filtersContainer.style.display = 'none';
    }
}

// ========== INICIALIZACIÓN ==========
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);

// También inicializar cuando la ventana se carga completamente
window.addEventListener('load', () => {
    // Forzar un reflow para activar animaciones
    document.body.clientHeight;
    
    // Mejorar el rendimiento en dispositivos lentos
    if ('connection' in navigator && navigator.connection.saveData === true) {
        // Modo ahorro de datos activado
        console.log('Modo ahorro de datos detectado, optimizando imágenes...');
    }
    
    // Verificar soporte para Service Workers (opcional para PWA)
    if ('serviceWorker' in navigator) {
        // Aquí podrías registrar un Service Worker para hacer la app PWA
        // navigator.serviceWorker.register('/service-worker.js');
    }
});

// Manejar errores de carga de imágenes
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Error cargando imagen:', e.target.src);
        e.target.style.display = 'none';
        e.target.parentElement.classList.add('image-error');
    }
}, true);

// Mejorar el rendimiento al cambiar de pestaña
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pausar animaciones o videos si los hubiera
    } else {
        // Reanudar animaciones
    }
});