// ========== CÓDIGO JAVASCRIPT PARA EL MENÚ DE MARISCOS ==========

// ========== FILTRADO DE PLATILLOS ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
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
        
        // En móvil, cerrar el panel de filtros después de seleccionar
        if (window.innerWidth <= 768) {
            document.getElementById('filtersContainer').classList.remove('active');
        }
    });
});

// ========== MENÚ MÓVIL TOGGLE ==========
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const filtersContainer = document.getElementById('filtersContainer');

mobileMenuToggle.addEventListener('click', () => {
    filtersContainer.classList.toggle('active');
    
    // Cambiar ícono
    const icon = mobileMenuToggle.querySelector('i');
    if (filtersContainer.classList.contains('active')) {
        icon.className = 'fas fa-times';
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i> Ocultar Filtros';
    } else {
        icon.className = 'fas fa-filter';
        mobileMenuToggle.innerHTML = '<i class="fas fa-filter"></i> Filtrar Categorías';
    }
});

// ========== GALERÍA DE IMÁGENES ==========
const gallery = document.getElementById('imageGallery');
const closeGalleryBtn = document.getElementById('closeGallery');
const galleryImage = document.getElementById('galleryImage');
const imageCounter = document.getElementById('imageCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const viewButtons = document.querySelectorAll('.view-images-btn');

// Colección de imágenes para cada platillo
const imageCollections = {
    'ceviche-mix': [
        'https://buenazo.cronosmedia.glr.pe/original/2020/09/09/5f58f8c082c2f615f804ffdb.jpg',
        'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://www.shutterstock.com/shutterstock/photos/1821519449/display_1500/stock-photo-the-peruvian-mixed-ceviche-is-a-traditional-dish-it-is-different-because-it-uses-lemon-fish-1821519449.jpg',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'ceviche-mero': [
        'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'ceviche-camaron': [
        'https://www.laylita.com/recetas/wp-content/uploads/1-Ceviche-de-camaron-ecuatoriano.jpg',
        'https://cdn7.kiwilimon.com/brightcove/10027/640x640/10027.jpg.webp',
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
    'huachinango': [
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'mojarra': [
        'https://i.elhorizonte.mx/img/eh/2540000/2544720_mojarrafrita2.jpg',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'ostiones': [
        'https://media-cdn.tripadvisor.com/media/photo-s/06/0c/a0/2e/ostiones-naturales-deliciosos.jpg',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'paella': [
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'campechana': [
        'https://yosoyvendedor.com/source/d63c63008746573029cabf046b8b8301/coctel_grande_campechano.jpg',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'michelada': [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    'horchata': [
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1585960628862-4c4f5b6666a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
};

let currentCollection = [];
let currentIndex = 0;

// Abrir galería al hacer clic en "Ver fotos"
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        currentCollection = imageCollections[item];
        currentIndex = 0;
        
        if (currentCollection && currentCollection.length > 0) {
            galleryImage.src = currentCollection[currentIndex];
            imageCounter.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
            gallery.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // En móvil, ocultar el botón de WhatsApp temporalmente
            document.querySelector('.whatsapp-float').style.display = 'none';
        }
    });
});

// Cerrar galería
closeGalleryBtn.addEventListener('click', () => {
    gallery.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.whatsapp-float').style.display = 'flex';
});

// Cerrar galería al hacer clic fuera de la imagen
gallery.addEventListener('click', (e) => {
    if (e.target === gallery) {
        gallery.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector('.whatsapp-float').style.display = 'flex';
    }
});

// Navegación de galería
prevBtn.addEventListener('click', () => {
    if (currentCollection.length > 0) {
        currentIndex = (currentIndex - 1 + currentCollection.length) % currentCollection.length;
        galleryImage.src = currentCollection[currentIndex];
        imageCounter.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCollection.length > 0) {
        currentIndex = (currentIndex + 1) % currentCollection.length;
        galleryImage.src = currentCollection[currentIndex];
        imageCounter.textContent = `${currentIndex + 1} / ${currentCollection.length}`;
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (gallery.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            closeGalleryBtn.click();
        }
    }
});

// ========== EFECTOS VISUALES ==========
// Animación de entrada para items del menú
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
    item.style.transitionDelay = `${index * 0.1}s`;
    
    observer.observe(item);
});

// ========== RESPONSIVE ADAPTATIONS ==========
// Ajustar altura de imágenes en móvil
function adjustImageHeights() {
    if (window.innerWidth <= 768) {
        const itemImages = document.querySelectorAll('.item-images');
        itemImages.forEach(img => {
            img.style.height = '180px';
        });
    } else {
        const itemImages = document.querySelectorAll('.item-images');
        itemImages.forEach(img => {
            img.style.height = '220px';
        });
    }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', adjustImageHeights);
window.addEventListener('resize', adjustImageHeights);

// Cerrar filtros al hacer clic fuera en móvil
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInsideFilters = filtersContainer.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);
        
        if (!isClickInsideFilters && !isClickOnToggle && filtersContainer.classList.contains('active')) {
            filtersContainer.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-filter"></i> Filtrar Categorías';
        }
    }
});

// Mostrar mensaje de carga completada
window.addEventListener('load', () => {
    console.log('Menú de Mariscos cargado correctamente');
    // Asegurar que todos los items sean visibles inicialmente
    menuItems.forEach(item => {
        item.style.display = 'flex';
    });
});