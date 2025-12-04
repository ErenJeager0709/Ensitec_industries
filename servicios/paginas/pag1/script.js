// ===== CONFIGURACIÓN GLOBAL =====
const CONFIG = {
    restaurantName: 'Delicias',
    phoneNumber: '+34912345678',
    email: 'info@delicias.com',
    address: 'Calle Gourmet 123, 28001 Madrid, España',
    openingHours: {
        monday: '12:00-23:00',
        tuesday: '12:00-23:00',
        wednesday: '12:00-23:00',
        thursday: '12:00-23:00',
        friday: '12:00-00:00',
        saturday: '12:00-00:00',
        sunday: '12:00-23:00'
    },
    tables: 20,
    maxGuestsPerTable: 8
};

// Estado global
let STATE = {
    currentSection: 'home',
    cart: [],
    cartTotal: 0,
    currentFilter: 'all',
    currentGalleryFilter: 'all',
    currentImageIndex: 0,
    reservations: [],
    menuItems: []
};

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍽️ Iniciando Restaurante Delicias...');
    
    // Ocultar preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                console.log('✅ Preloader ocultado');
            }, 500);
        }
    }, 2000);
    
    // Inicializar componentes
    initNavigation();
    initMenu();
    initReservations();
    initGallery();
    initContact();
    initScrollEffects();
    initMobileOptimizations();
    loadCart();
    loadReservations();
    
    console.log('✅ Aplicación inicializada correctamente');
});

// ===== NAVEGACIÓN AVANZADA =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const floatingNav = document.getElementById('floatingNav');
    const navIndicator = document.getElementById('navIndicator');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('🔧 Inicializando navegación avanzada...');
    
    // Funciones del menú móvil
    function closeMobileMenu() {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function openMobileMenu() {
        if (navMenu) navMenu.classList.add('active');
        if (navToggle) navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Toggle del menú hamburguesa
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (navMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
            
            console.log('📱 Menú móvil toggled');
        });
    }
    
    // Manejar clic en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                
                // Cerrar menú móvil
                closeMobileMenu();
                
                // Actualizar enlace activo
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Navegar a sección
                scrollToSection(sectionId);
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Scroll tracking avanzado
    let lastScrollTop = 0;
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ocultar/mostrar navegación al scroll
        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                floatingNav.classList.add('scrolled');
            } else {
                floatingNav.classList.remove('scrolled');
            }
        } else {
            floatingNav.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
        
        // Detectar sección activa
        let currentSection = 'home';
        let minDistance = Infinity;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            
            if (distance < minDistance && rect.top <= 100) {
                minDistance = distance;
                currentSection = section.id;
            }
        });
        
        // Actualizar estado
        if (currentSection !== STATE.currentSection) {
            STATE.currentSection = currentSection;
            
            // Actualizar enlaces activos
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
            
            // Actualizar indicador
            updateNavIndicator(currentSection);
        }
        
        // Mostrar/ocultar botón de volver arriba
        const backTopBtn = document.querySelector('.btn-back-top');
        if (backTopBtn) {
            if (scrollTop > 500) {
                backTopBtn.style.opacity = '1';
                backTopBtn.style.visibility = 'visible';
            } else {
                backTopBtn.style.opacity = '0';
                backTopBtn.style.visibility = 'hidden';
            }
        }
    }, { passive: true });
}

function updateNavIndicator(sectionId) {
    const navIndicator = document.getElementById('navIndicator');
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (navIndicator && activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = document.querySelector('.nav-menu').getBoundingClientRect();
        
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
    }
}

// ===== MENÚ DIGITAL INTERACTIVO =====
function initMenu() {
    console.log('📋 Inicializando menú digital...');
    
    // Cargar datos del menú
    loadMenuItems();
    
    // Inicializar filtros
    initMenuFilters();
    
    // Inicializar búsqueda
    initMenuSearch();
    
    // Inicializar carrito
    initCart();
}

function loadMenuItems() {
    // Usar datos del archivo menu-data.js
    STATE.menuItems = window.MENU_DATA || [];
    
    // Renderizar grid de platos
    renderDishesGrid();
}

function renderDishesGrid() {
    const dishesGrid = document.getElementById('dishesGrid');
    if (!dishesGrid) return;
    
    // Filtrar items según filtro actual
    let filteredItems = STATE.menuItems;
    
    if (STATE.currentFilter !== 'all') {
        filteredItems = STATE.menuItems.filter(item => 
            item.category === STATE.currentFilter
        );
    }
    
    // Aplicar búsqueda si existe
    const searchInput = document.getElementById('menuSearch');
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Renderizar
    dishesGrid.innerHTML = filteredItems.map(item => `
        <div class="dish-card" data-category="${item.category}">
            <div class="dish-image" style="background: ${item.gradient}">
                <span class="dish-category">${getCategoryLabel(item.category)}</span>
            </div>
            <div class="dish-content">
                <div class="dish-header">
                    <h3 class="dish-title">${item.name}</h3>
                    <div class="dish-price">€${item.price.toFixed(2)}</div>
                </div>
                <p class="dish-description">${item.description}</p>
                <div class="dish-tags">
                    ${item.tags.map(tag => `<span class="dish-tag">${tag}</span>`).join('')}
                </div>
                <div class="dish-actions">
                    <button class="btn-add-to-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                        Añadir
                    </button>
                    <button class="btn-view-details" onclick="openDishModal(${item.id})">
                        <i class="fas fa-eye"></i>
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animar entrada
    animateDishCards();
}

function getCategoryLabel(category) {
    const labels = {
        'entradas': 'Entrada',
        'principales': 'Principal',
        'postres': 'Postre',
        'bebidas': 'Bebida'
    };
    return labels[category] || category;
}

function initMenuFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Actualizar filtro
            STATE.currentFilter = this.dataset.filter;
            
            // Renderizar grid
            renderDishesGrid();
        });
    });
}

function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderDishesGrid();
        }, 300);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            renderDishesGrid();
        }
    });
}

function animateDishCards() {
    const dishCards = document.querySelectorAll('.dish-card');
    
    dishCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===== CARRITO DE COMPRA =====
function initCart() {
    updateCartUI();
}

function addToCart(itemId) {
    const item = STATE.menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    // Verificar si ya está en el carrito
    const existingItem = STATE.cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        STATE.cart.push({
            ...item,
            quantity: 1
        });
    }
    
    // Actualizar total
    updateCartTotal();
    
    // Guardar en localStorage
    saveCart();
    
    // Actualizar UI
    updateCartUI();
    
    // Mostrar notificación
    showNotification(`"${item.name}" añadido al carrito`, 'success');
    
    // Animación del botón del carrito
    animateCartButton();
}

function removeFromCart(itemId) {
    STATE.cart = STATE.cart.filter(item => item.id !== itemId);
    updateCartTotal();
    saveCart();
    updateCartUI();
}

function updateCartTotal() {
    STATE.cartTotal = STATE.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

function updateCartUI() {
    // Actualizar contador
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Animación si hay items
        if (totalItems > 0) {
            cartCount.classList.add('pulse');
            setTimeout(() => cartCount.classList.remove('pulse'), 300);
        }
    }
    
    // Actualizar total
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) {
        cartTotal.textContent = `€${STATE.cartTotal.toFixed(2)}`;
    }
    
    // Actualizar items del carrito
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        if (STATE.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Tu carrito está vacío</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = STATE.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image" style="background: ${item.gradient}"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">€${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
}

function updateCartQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }
    
    const item = STATE.cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        updateCartTotal();
        saveCart();
        updateCartUI();
    }
}

function toggleCart() {
    const cartFloating = document.getElementById('cartFloating');
    if (cartFloating) {
        cartFloating.classList.toggle('active');
    }
}

function animateCartButton() {
    const cartToggle = document.querySelector('.cart-toggle');
    if (cartToggle) {
        cartToggle.classList.add('bounce');
        setTimeout(() => cartToggle.classList.remove('bounce'), 300);
    }
}

function saveCart() {
    try {
        localStorage.setItem('deliciasCart', JSON.stringify(STATE.cart));
    } catch (e) {
        console.error('Error guardando carrito:', e);
    }
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem('deliciasCart');
        if (savedCart) {
            STATE.cart = JSON.parse(savedCart);
            updateCartTotal();
            updateCartUI();
        }
    } catch (e) {
        console.error('Error cargando carrito:', e);
    }
}

// ===== RESERVACIONES ONLINE =====
function initReservations() {
    console.log('📅 Inicializando sistema de reservas...');
    
    // Inicializar formulario
    initReservationForm();
    
    // Generar horarios
    generateTimeSlots();
    
    // Generar mesas
    generateTables();
    
    // Generar gráfico de disponibilidad
    generateAvailabilityChart();
}

function initReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;
    
    // Establecer fecha mínima (hoy)
    const dateInput = document.getElementById('reservationDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
    
    // Manejar envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitReservation();
    });
}

function generateTimeSlots() {
    const timeSelect = document.getElementById('reservationTime');
    if (!timeSelect) return;
    
    // Limpiar opciones existentes
    timeSelect.innerHTML = '<option value="" disabled selected>Selecciona hora</option>';
    
    // Generar horarios de 12:00 a 23:00 cada 30 minutos
    for (let hour = 12; hour <= 23; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            if (hour === 23 && minute > 0) break; // Solo hasta 23:00
            
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        }
    }
}

function adjustGuests(change) {
    const guestsInput = document.getElementById('reservationGuests');
    if (!guestsInput) return;
    
    let current = parseInt(guestsInput.value) || 2;
    current += change;
    
    // Validar límites
    if (current < 1) current = 1;
    if (current > CONFIG.maxGuestsPerTable) current = CONFIG.maxGuestsPerTable;
    
    guestsInput.value = current;
}

function generateTables() {
    const tablesGrid = document.getElementById('tablesGrid');
    if (!tablesGrid) return;
    
    tablesGrid.innerHTML = '';
    
    // Generar 20 mesas (4x5)
    for (let i = 1; i <= CONFIG.tables; i++) {
        const table = document.createElement('button');
        table.className = 'table-btn';
        table.innerHTML = `
            <i class="fas fa-utensils"></i>
            <span>Mesa ${i}</span>
            <small>2-8 pers.</small>
        `;
        
        // Simular disponibilidad aleatoria (en producción sería del servidor)
        const isAvailable = Math.random() > 0.3;
        const isLimited = Math.random() > 0.7;
        
        if (!isAvailable) {
            table.classList.add('booked');
            table.disabled = true;
        } else if (isLimited) {
            table.classList.add('limited');
        }
        
        table.addEventListener('click', function() {
            // Seleccionar/deseleccionar mesa
            document.querySelectorAll('.table-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            this.classList.add('selected');
        });
        
        tablesGrid.appendChild(table);
    }
}

function generateAvailabilityChart() {
    const chart = document.getElementById('availabilityChart');
    if (!chart) return;
    
    // Simular datos de disponibilidad (en producción vendrían del servidor)
    const hours = ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
    
    chart.innerHTML = hours.map(hour => {
        const availability = Math.floor(Math.random() * 100);
        let status = 'good';
        if (availability < 30) status = 'full';
        else if (availability < 60) status = 'limited';
        
        return `
            <div class="availability-hour">
                <span class="hour">${hour}</span>
                <div class="availability-bar ${status}">
                    <div class="availability-fill" style="width: ${availability}%"></div>
                </div>
                <span class="availability-percent">${availability}%</span>
            </div>
        `;
    }).join('');
}

function submitReservation() {
    const form = document.getElementById('reservationForm');
    const confirmation = document.getElementById('reservationConfirmation');
    
    if (!form || !confirmation) return;
    
    // Obtener datos del formulario
    const reservationData = {
        date: document.getElementById('reservationDate').value,
        time: document.getElementById('reservationTime').value,
        guests: document.getElementById('reservationGuests').value,
        name: document.getElementById('reservationName').value,
        email: document.getElementById('reservationEmail').value,
        phone: document.getElementById('reservationPhone').value,
        notes: document.getElementById('reservationNotes').value,
        table: document.querySelector('.table-btn.selected')?.textContent || 'Por asignar',
        confirmationCode: generateConfirmationCode()
    };
    
    // Validación básica
    if (!reservationData.date || !reservationData.time || !reservationData.name) {
        showNotification('Por favor, completa todos los campos obligatorios', 'error');
        return;
    }
    
    // Simular envío (en producción sería AJAX)
    setTimeout(() => {
        // Agregar a reservaciones
        STATE.reservations.push(reservationData);
        
        // Guardar en localStorage
        saveReservations();
        
        // Mostrar confirmación
        form.style.display = 'none';
        confirmation.style.display = 'block';
        
        // Actualizar detalles de confirmación
        document.getElementById('confirmationDetails').innerHTML = `
            <p><strong>Fecha:</strong> ${formatDate(reservationData.date)} a las ${reservationData.time}</p>
            <p><strong>Personas:</strong> ${reservationData.guests}</p>
            <p><strong>Mesa:</strong> ${reservationData.table}</p>
            <p><strong>Código:</strong> ${reservationData.confirmationCode}</p>
            <p>Te hemos enviado un email de confirmación a ${reservationData.email}</p>
        `;
        
        // Mostrar notificación
        showNotification('¡Reserva confirmada con éxito!', 'success');
        
        // Actualizar gráfico de disponibilidad
        generateAvailabilityChart();
    }, 1500);
}

function generateConfirmationCode() {
    return 'DL' + Date.now().toString().slice(-6);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function saveReservations() {
    try {
        localStorage.setItem('deliciasReservations', JSON.stringify(STATE.reservations));
    } catch (e) {
        console.error('Error guardando reservas:', e);
    }
}

function loadReservations() {
    try {
        const savedReservations = localStorage.getItem('deliciasReservations');
        if (savedReservations) {
            STATE.reservations = JSON.parse(savedReservations);
        }
    } catch (e) {
        console.error('Error cargando reservas:', e);
    }
}

// ===== GALERÍA INTERACTIVA =====
function initGallery() {
    console.log('🖼️ Inicializando galería...');
    
    // Cargar imágenes de la galería
    loadGalleryImages();
    
    // Inicializar filtros
    initGalleryFilters();
}

function loadGalleryImages() {
    // Datos de ejemplo (en producción vendrían de un servidor)
    const galleryData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
            category: 'ambiente',
            title: 'Ambiente Elegante',
            description: 'Nuestro comedor principal con decoración contemporánea'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
            category: 'platos',
            title: 'Especialidad del Chef',
            description: 'Lomo de res con reducción de vino tinto'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
            category: 'platos',
            title: 'Postre Artístico',
            description: 'Tarta de chocolate con decoración de oro comestible'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
            category: 'eventos',
            title: 'Evento Privado',
            description: 'Celebración especial en nuestra sala VIP'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
            category: 'chef',
            title: 'Chef en Acción',
            description: 'Nuestro chef ejecutivo preparando un plato especial'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
            category: 'ambiente',
            title: 'Bar de Vinos',
            description: 'Selección de más de 500 etiquetas internacionales'
        }
    ];
    
    // Renderizar mosaico
    renderGalleryMosaic(galleryData);
    
    // Guardar en estado
    STATE.galleryImages = galleryData;
}

function renderGalleryMosaic(images) {
    const mosaic = document.getElementById('galleryMosaic');
    if (!mosaic) return;
    
    // Filtrar si hay filtro activo
    let filteredImages = images;
    if (STATE.currentGalleryFilter !== 'all') {
        filteredImages = images.filter(img => img.category === STATE.currentGalleryFilter);
    }
    
    // Crear mosaico con diferentes tamaños
    mosaic.innerHTML = filteredImages.map((image, index) => {
        const sizeClass = index % 3 === 0 ? 'large' : index % 3 === 1 ? 'medium' : 'small';
        
        return `
            <div class="gallery-item ${sizeClass}" data-category="${image.category}" onclick="openLightbox(${image.id})">
                <div class="gallery-image" style="background-image: url('${image.image}')">
                    <div class="gallery-overlay">
                        <h4>${image.title}</h4>
                        <p>${image.description}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function initGalleryFilters() {
    const filters = document.querySelectorAll('.gallery-filter');
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Actualizar botones activos
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Actualizar filtro
            STATE.currentGalleryFilter = this.dataset.filter;
            
            // Renderizar mosaico
            renderGalleryMosaic(STATE.galleryImages || []);
        });
    });
}

// ===== CONTACTO Y MAPA =====
function initContact() {
    console.log('📍 Inicializando contacto...');
    
    // Inicializar formulario de contacto rápido
    initQuickContactForm();
    
    // Inicializar newsletter
    initNewsletter();
}

function initQuickContactForm() {
    const form = document.getElementById('quickContactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envío
        showNotification('Mensaje enviado. Te responderemos en 24h.', 'success');
        form.reset();
    });
}

function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Validar email
        if (!isValidEmail(email)) {
            showNotification('Por favor, introduce un email válido', 'error');
            return;
        }
        
        // Simular suscripción
        showNotification('¡Gracias por suscribirte a nuestro newsletter!', 'success');
        this.reset();
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== FUNCIONES UTILITARIAS =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const headerHeight = document.querySelector('.floating-nav').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
    
    // Actualizar URL
    history.pushState(null, '', `#${sectionId}`);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showNotification(message, type = 'info') {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-hard);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function openDirections() {
    const address = encodeURIComponent(CONFIG.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
}

function reserveViaWhatsApp() {
    const message = encodeURIComponent('Hola, me gustaría hacer una reserva en Restaurante Delicias.');
    window.open(`https://wa.me/${CONFIG.phoneNumber.replace('+', '')}?text=${message}`, '_blank');
}

function addToCalendar() {
    // Implementar agregar a calendario (Google Calendar, Apple Calendar, etc.)
    showNotification('Función de calendario en desarrollo', 'info');
}

function shareReservation() {
    if (navigator.share) {
        navigator.share({
            title: 'Mi reserva en Restaurante Delicias',
            text: '¡He reservado mesa en Restaurante Delicias!',
            url: window.location.href
        });
    } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Enlace copiado al portapapeles', 'success'));
    }
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Animación de contadores
    initCounters();
    
    // Parallax effect
    initParallax();
    
    // Lazy loading
    initLazyLoading();
}

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar cuando sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function initLazyLoading() {
    const images = document.querySelectorAll('[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== OPTIMIZACIONES MÓVIL =====
function initMobileOptimizations() {
    // Detectar dispositivo táctil
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Mejorar feedback táctil
        document.addEventListener('touchstart', function() {}, { passive: true });
        
        // Prevenir zoom en doble tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }
    
    // Ajustes para iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.classList.add('ios-device');
        
        // Fix para viewport en iOS
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        }
    }
}

// ===== MODALES =====
function openTableModal() {
    showNotification('Tour virtual en desarrollo', 'info');
}

function openChefStory() {
    showNotification('Historia del chef en desarrollo', 'info');
}

function openDishModal(dishId) {
    const dish = STATE.menuItems.find(item => item.id === dishId);
    if (!dish) return;
    
    const modal = document.getElementById('dishModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="dish-modal-content">
            <div class="modal-image" style="background: ${dish.gradient}"></div>
            <div class="modal-info">
                <h2>${dish.name}</h2>
                <div class="modal-price">€${dish.price.toFixed(2)}</div>
                <div class="modal-category">${getCategoryLabel(dish.category)}</div>
                <p class="modal-description">${dish.description}</p>
                
                <div class="modal-ingredients">
                    <h4>Ingredientes:</h4>
                    <div class="ingredients-list">
                        ${dish.ingredients ? dish.ingredients.map(ing => `
                            <span class="ingredient">${ing}</span>
                        `).join('') : 'Información no disponible'}
                    </div>
                </div>
                
                <div class="modal-allergens">
                    <h4>Alérgenos:</h4>
                    <div class="allergens-list">
                        ${dish.allergens ? dish.allergens.map(all => `
                            <span class="allergen">${all}</span>
                        `).join('') : 'Sin alérgenos destacados'}
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn-add-to-cart" onclick="addToCart(${dish.id}); closeDishModal()">
                        <i class="fas fa-plus"></i>
                        Añadir al Carrito
                    </button>
                    <button class="btn-close-modal" onclick="closeDishModal()">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDishModal() {
    const modal = document.getElementById('dishModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openCheckoutModal() {
    if (STATE.cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    // Implementar modal de checkout
    showNotification('Sistema de checkout en desarrollo', 'info');
}

// Cerrar modales con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDishModal();
        toggleCart();
    }
});

// ===== INICIALIZACIÓN FINAL =====
window.addEventListener('load', function() {
    console.log('🍽️ ¡Restaurante Delicias completamente cargado!');
    
    // Verificar hash de URL
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        setTimeout(() => {
            scrollToSection(hash);
        }, 100);
    }
    
    // Iniciar animaciones de entrada
    setTimeout(() => {
        document.querySelectorAll('.title-line').forEach((line, index) => {
            line.style.animation = `slideInUp 0.8s ease ${index * 0.3}s forwards`;
            line.style.opacity = '0';
        });
    }, 500);
});