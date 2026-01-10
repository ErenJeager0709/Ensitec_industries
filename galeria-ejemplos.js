const allExamples = [
    // MENÚS QR
    {
        id: 1,
        title: "Restaurante La Parrilla",
        category: "menu",
        type: "Menú QR",
        description: "Menú elegante para restaurante de carnes con diseño oscuro y sofisticado",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        features: ["Diseño Oscuro", "Categorías", "Imágenes", "Responsive"],
        demoUrl: "servicios/menus/menu1/restaurante-parrilla.html"
    },
    {
        id: 2,
        title: "Café Central",
        category: "menu",
        type: "Menú QR",
        description: "Menú acogedor para cafetería con especialidades de café y repostería",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        features: ["Diseño Claro", "Especialidades", "Promociones", "QR Dinámico"],
        demoUrl: "servicios/menus/menu2/cafe-central.html"
    },
    {
        id: 3,
        title: "Bar El Rincón",
        category: "menu",
        type: "Menú QR",
        description: "Carta de cocteles y bebidas con diseño moderno y animaciones",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        features: ["Animaciones", "Carta de Bebidas", "Happy Hour", "Moderno"],
        demoUrl: "servicios/menus/menu3/bar-rincon.html"
    },
    {
        id: 4,
        title: "LA MARISQUERÍA",
        category: "menu",
        type: "Menú QR",
        description: "Carta de mariscos frescos, preparados al momento por nuestros chefs especializados",
        image: "https://hevea.es/wp-content/uploads/Decoracion-elegante-para-restaurante-de-lujo-o-de-diseno.jpg",
        features: ["Diseño Claro", "Especialidades", "Promociones", "QR Dinámico"],
        demoUrl: "servicios/menus/menu4/index.html"
    },
    {
        id: 5,
        title: "Sushi Naruto",
        category: "menu",
        type: "Menú QR",
        description: "Carta de sushi con diseño moderno y animaciones",
        image: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2019/07/asai-kaiseki-cuisine.jpg?fit=1024%2C683&ssl=1",
        features: ["Animaciones", "Carta de Bebidas", "Happy Hour", "Moderno"],
        demoUrl: "servicios/menus/menu5/index.html"
    },

    // CARTAS PERSONALIZADAS
    {
        id: 6,
        title: "Boda Sofía & Alejandro",
        category: "carta",
        type: "Carta Digital",
        description: "Carta de boda elegante con diseño romántico y detalles personalizados",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBpbnZpdGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        features: ["Diseño Elegante", "Personalizado", "RSVP Digital", "Ubicación"],
        demoUrl: "servicios/cartas/carta1/carta.html"
    },
    {
        id: 7,
        title: "Cumpleaños 30 Años",
        category: "carta",
        type: "Invitación Digital",
        description: "Invitación moderna para cumpleaños con cuenta regresiva y galería de fotos",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        features: ["Cuenta Regresiva", "Galería", "Confirmación", "Tema Fiesta"],
        demoUrl: "servicios/cartas/carta2/index.html"
    },
    {
        id: 8,
        title: "Carta de Amor Eterna",
        category: "carta",
        type: "Carta de Amor",
        description: "Carta romántica digital con efectos interactivos, música y recuerdos especiales",
        image: "https://i.ytimg.com/vi/vULHIQjtZno/maxresdefault.jpg",
        features: ["Interactiva", "Música", "Efectos", "Personalizable"],
        demoUrl: "servicios/cartas/carta3/carta.html"
    },

    // PÁGINAS WEB
    {
        id: 9,
        title: "Restaurante Delicias",
        category: "web",
        type: "Sitio Web",
        description: "Página web completa para restaurante con reservaciones online y menú digital",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        features: ["Responsive", "Reservaciones", "Menú QR", "Galería"],
        demoUrl: "servicios/paginas/pag1/index.html"
    },
    {
        id: 10,
        title: "Cafetería Aroma",
        category: "web",
        type: "Landing Page",
        description: "Landing page moderna para cafetería con horarios, ubicación y especialidades",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        features: ["Landing Page", "Google Maps", "Horarios", "Especialidades"],
        demoUrl: "servicios/paginas/pag2/index.html"
    },

    // MASCOTAS
    // {
    //     id: 9,
    //     title: "Max - Perro Labrador",
    //     category: "au",
    //     type: "Perfil Mascota",
    //     description: "Perfil digital para mascota con información médica, contacto y galería",
    //     image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    //     features: ["Info Médica", "Contacto", "Galería", "QR Placa"],
    //     demoUrl: "ejemplos/mascota-max.html"
    // },
    // {
    //     id: 10,
    //     title: "Luna - Gato Siames",
    //     category: "au",
    //     type: "Perfil Mascota",
    //     description: "Perfil elegante para gato con características, cuidados y información importante",
    //     image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    //     features: ["Características", "Cuidados", "Vacunas", "QR Collar"],
    //     demoUrl: "servicios/cartas/carta1/carta.html"
    // }
];

// Elementos del DOM
const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalIframe = document.getElementById('modal-iframe');
const externalLink = document.getElementById('external-link');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const closeBtn = document.querySelector('.close-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const filtersSection = document.querySelector('.filters');

// Variables para control de scroll
let lastScrollTop = 0;
let scrollTimeout;

// Función para generar los elementos de la galería
function generateGalleryItems(items) {
    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', item.category);
        
        galleryItem.innerHTML = `
            <div class="item-preview">
                <img src="${item.image}" alt="${item.title}" class="preview-image" loading="lazy">
                <div class="preview-overlay">
                    <div class="preview-text">
                        <i class="fas fa-expand"></i>
                        <p>Haz clic para ver completo</p>
                    </div>
                </div>
            </div>
            <div class="item-info">
                <span class="item-category">${getCategoryName(item.category)}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                
                <div class="item-features">
                    ${item.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                
                <span class="item-type">${item.type}</span>
            </div>
        `;
        
        // Añadir evento de clic
        galleryItem.addEventListener('click', () => openModal(item));
        
        galleryGrid.appendChild(galleryItem);
        
        // Animación de entrada
        setTimeout(() => {
            galleryItem.classList.add('visible');
        }, index * 100);
    });
}

// Función para obtener nombre de categoría
function getCategoryName(category) {
    const categories = {
        'menu': 'Menú QR',
        'carta': 'Carta Digital',
        'web': 'Página Web',
        'au': 'Automatización'
    };
    return categories[category] || category;
}

// Función para filtrar elementos
function filterItems(category) {
    const filteredItems = category === 'all' 
        ? allExamples 
        : allExamples.filter(item => item.category === category);
    
    generateGalleryItems(filteredItems);
    
    // Mostrar filtros después de filtrar
    showFilters();
}

// Función para abrir modal
function openModal(item) {
    modalTitle.textContent = item.title;
    modalCategory.textContent = getCategoryName(item.category);
    modalIframe.src = item.demoUrl;
    externalLink.href = item.demoUrl;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Ocultar filtros cuando se abre el modal
    hideFilters();
}

// Función para cerrar modal
function closeModal() {
    modal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = 'auto';
    
    // Mostrar filtros cuando se cierra el modal
    showFilters();
}

// Función para pantalla completa
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        modal.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Función para mostrar filtros
function showFilters() {
    filtersSection.classList.remove('hidden');
}

// Función para ocultar filtros
function hideFilters() {
    filtersSection.classList.add('hidden');
}

// Función para manejar el scroll
function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Limpiar timeout anterior
    clearTimeout(scrollTimeout);
    
    // Si se está haciendo scroll hacia abajo y no está en la parte superior
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        hideFilters();
    } 
    // Si se está haciendo scroll hacia arriba
    else if (currentScroll < lastScrollTop) {
        showFilters();
    }
    
    // Actualizar última posición de scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    
    // Mostrar filtros después de dejar de hacer scroll
    scrollTimeout = setTimeout(() => {
        if (currentScroll <= 50) {
            showFilters();
        }
    }, 150);
}

// Event Listeners
closeBtn.addEventListener('click', closeModal);
fullscreenBtn.addEventListener('click', toggleFullscreen);
externalLink.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Filtros
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase active al botón clickeado
        this.classList.add('active');
        // Filtrar elementos
        const filter = this.getAttribute('data-filter');
        filterItems(filter);
    });
});

// Tecla Escape para cerrar modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Evento de scroll para mostrar/ocultar filtros
window.addEventListener('scroll', handleScroll);

// Evento de toque para dispositivos móviles (mejorar UX)
document.addEventListener('touchstart', function() {}, {passive: true});

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    generateGalleryItems(allExamples);
    
    // Asegurar que los filtros estén visibles al cargar
    showFilters();

});

