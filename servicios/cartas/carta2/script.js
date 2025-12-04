// ===== VARIABLES GLOBALES =====
let currentImageIndex = 0;
let guests = [];
const eventDate = new Date('2024-06-15T20:00:00').getTime();

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Iniciando invitación de cumpleaños 30...');
    
    // Ocultar preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
            console.log('✅ Preloader ocultado');
        }, 500);
    }, 2000);
    
    // Inicializar componentes
    initNavigation();
    initCountdown();
    initGallery();
    initRSVP();
    initScrollEffects();
    initMobileOptimizations();
    
    // Cargar datos guardados
    loadSavedData();
    
    console.log('✅ Aplicación inicializada correctamente');
});

// ===== NAVEGACIÓN =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('🔧 Inicializando navegación...');
    
    // Funciones para menú móvil
    function closeMenu() {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function openMenu() {
        if (navMenu) navMenu.classList.add('active');
        if (navToggle) navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Toggle del menú hamburguesa
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
            
            console.log('📱 Menú toggled');
        });
    }
    
    // Manejar clic en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                console.log('🔗 Navegando a:', sectionId);
                
                // Cerrar menú móvil
                closeMenu();
                
                // Actualizar enlace activo
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Mostrar sección
                showSection(sectionId);
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Ocultar/mostrar header al hacer scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop) {
                // Scroll hacia abajo - ocultar
                header.classList.add('hidden');
            } else {
                // Scroll hacia arriba - mostrar
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Mostrar/ocultar botón para subir
        const scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, { passive: true });
}

// Función para manejar clic en navegación (inline en HTML)
function handleNavClick(event, sectionId) {
    event.preventDefault();
    console.log('📍 Navegando a:', sectionId);
    
    // Actualizar enlaces activos
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Cerrar menú móvil
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    if (navMenu) navMenu.classList.remove('active');
    if (navToggle) navToggle.classList.remove('active');
    
    // Mostrar sección
    showSection(sectionId);
}

// Mostrar sección específica
function showSection(sectionId) {
    console.log('🎯 Mostrando sección:', sectionId);
    
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.error('❌ Sección no encontrada:', sectionId);
        return;
    }
    
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    targetSection.classList.add('active');
    
    // Scroll suave a la sección
    setTimeout(() => {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
        
        // Actualizar URL
        history.pushState(null, '', `#${sectionId}`);
    }, 100);
    
    console.log('✅ Sección mostrada:', sectionId);
}

// Función auxiliar para scroll
function scrollToSection(sectionId) {
    showSection(sectionId);
}

// ===== CUENTA REGRESIVA =====
function initCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        
        // Elementos del DOM
        const daysEl = document.getElementById('countdownDays');
        const hoursEl = document.getElementById('countdownHours');
        const minutesEl = document.getElementById('countdownMinutes');
        const secondsEl = document.getElementById('countdownSeconds');
        const progressFill = document.getElementById('progressFill');
        const progressPercentage = document.getElementById('progressPercentage');
        
        if (timeLeft > 0) {
            // Calcular tiempo restante
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Actualizar elementos del DOM
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
            
            // Calcular progreso
            const totalTime = 30 * 24 * 60 * 60 * 1000; // 30 días antes
            const elapsedTime = totalTime - timeLeft;
            const progress = Math.min(100, (elapsedTime / totalTime) * 100);
            
            // Actualizar barra de progreso
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            
            if (progressPercentage) {
                progressPercentage.textContent = `${Math.round(progress)}%`;
            }
            
            // Efecto especial para últimos 10 segundos
            if (seconds <= 10 && secondsEl) {
                secondsEl.style.animation = 'pulse 0.5s infinite';
            }
        } else {
            // El evento ya pasó
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            
            if (progressFill) progressFill.style.width = '100%';
            if (progressPercentage) progressPercentage.textContent = '100%';
            
            // Cambiar mensaje
            const countdownContainer = document.querySelector('.countdown-message');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<p>🎉 ¡La fiesta está en marcha! ¡Espero que la estés disfrutando!</p>';
            }
        }
    }
    
    // Actualizar inmediatamente y luego cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Limpiar intervalo cuando la página no está visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(countdownInterval);
        } else {
            setInterval(updateCountdown, 1000);
        }
    });
}

// ===== GALERÍA =====
function initGallery() {
    // Los elementos se manejan con onclick inline en el HTML
}

const galleryData = [
    {
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: '🎉 20s - Los mejores años universitarios llenos de diversión y aprendizaje'
    },
    {
        image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: '💼 25 - Comenzando mi carrera profesional y conquistando el mundo'
    },
    {
        image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: '✈️ Aventuras y viajes - Conociendo el mundo y creando recuerdos inolvidables'
    },
    {
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        caption: '❤️ Lo más valioso - Amigos y familia que han estado en cada paso del camino'
    }
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightbox && lightboxImage && lightboxCaption && galleryData[index]) {
        lightboxImage.style.backgroundImage = `url('${galleryData[index].image}')`;
        lightboxCaption.textContent = galleryData[index].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        console.log('🖼️ Abriendo galería, imagen:', index);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('❌ Cerrando galería');
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Validar límites
    if (currentImageIndex < 0) {
        currentImageIndex = galleryData.length - 1;
    } else if (currentImageIndex >= galleryData.length) {
        currentImageIndex = 0;
    }
    
    // Actualizar lightbox
    openLightbox(currentImageIndex);
}

// Cerrar lightbox con tecla Escape
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
    } else if (e.key === 'ArrowLeft' && lightbox && lightbox.classList.contains('active')) {
        changeImage(-1);
    } else if (e.key === 'ArrowRight' && lightbox && lightbox.classList.contains('active')) {
        changeImage(1);
    }
});

// ===== RSVP =====
function initRSVP() {
    // Cargar confirmaciones anteriores
    loadRSVPData();
    
    // Actualizar estadísticas
    updateStats();
}

function submitRSVP(event) {
    event.preventDefault();
    console.log('📝 Enviando RSVP...');
    
    const form = document.getElementById('rsvpForm');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');
    
    if (!form || !submitButton || !successMessage) return;
    
    // Obtener datos del formulario
    const guestData = {
        name: document.getElementById('guestName').value.trim(),
        email: document.getElementById('guestEmail').value.trim(),
        attendance: document.getElementById('guestAttendance').value,
        count: parseInt(document.getElementById('guestCount').value) || 1,
        message: document.getElementById('guestMessage').value.trim(),
        timestamp: new Date().toISOString(),
        id: Date.now() // ID único
    };
    
    // Validaciones básicas
    if (!guestData.name || !guestData.email || !guestData.attendance) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Mostrar estado de carga
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simular envío (en producción sería una llamada AJAX)
    setTimeout(() => {
        // Agregar a la lista de invitados
        guests.push(guestData);
        
        // Guardar en localStorage
        saveRSVPData();
        
        // Mostrar mensaje de éxito
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Actualizar estadísticas
        updateStats();
        
        // Crear efecto de confeti
        createConfettiEffect();
        
        // Restaurar botón
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Resetear formulario (opcional)
            form.reset();
        }, 3000);
        
        console.log('✅ RSVP enviado:', guestData);
    }, 1500);
}

function updateStats() {
    const confirmedCount = guests.filter(g => g.attendance === 'yes').length;
    const maybeCount = guests.filter(g => g.attendance === 'maybe').length;
    const totalGuests = guests.reduce((sum, guest) => sum + guest.count, 0);
    
    // Actualizar elementos del DOM
    const confirmedEl = document.getElementById('confirmedCount');
    const maybeEl = document.getElementById('maybeCount');
    const totalEl = document.getElementById('totalCount');
    const guestsList = document.getElementById('guestsList');
    
    if (confirmedEl) confirmedEl.textContent = confirmedCount;
    if (maybeEl) maybeEl.textContent = maybeCount;
    if (totalEl) totalEl.textContent = totalGuests;
    
    // Actualizar lista de invitados
    if (guestsList) {
        // Mostrar solo los últimos 5 confirmados
        const recentGuests = guests
            .filter(g => g.attendance === 'yes')
            .slice(-5)
            .reverse();
        
        guestsList.innerHTML = recentGuests.map(guest => `
            <div class="guest-item">
                <div class="guest-avatar">${getInitials(guest.name)}</div>
                <div class="guest-info">
                    <h5>${guest.name}</h5>
                    <div class="guest-status confirmed">
                        <i class="fas fa-check-circle"></i>
                        Confirmado
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function getInitials(name) {
    return name.split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

// ===== DATA MANAGEMENT =====
function saveRSVPData() {
    try {
        localStorage.setItem('birthdayGuests', JSON.stringify(guests));
        console.log('💾 Datos guardados en localStorage');
    } catch (e) {
        console.error('❌ Error guardando datos:', e);
    }
}

function loadRSVPData() {
    try {
        const savedGuests = localStorage.getItem('birthdayGuests');
        if (savedGuests) {
            guests = JSON.parse(savedGuests);
            console.log('📂 Datos cargados:', guests.length, 'invitados');
        }
    } catch (e) {
        console.error('❌ Error cargando datos:', e);
    }
}

function loadSavedData() {
    loadRSVPData();
    updateStats();
}

// ===== FUNCIONES UTILITARIAS =====
function openMap() {
    // En producción, esto abriría Google Maps
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=La+Terraza+Rooftop+Bar';
    
    if (window.confirm('¿Abrir ubicación en Google Maps?')) {
        window.open(mapUrl, '_blank');
    }
    
    console.log('🗺️ Abriendo mapa');
}

function showGiftInfo(type) {
    const messages = {
        wishlist: '🎁 Mi wishlist está en Amazon. ¡Te enviaré el enlace por correo!',
        surprise: '🎉 ¡Me encantan las sorpresas! Cualquier regalo de corazón será perfecto.'
    };
    
    alert(messages[type] || '¡Gracias por pensar en mí!');
}

function shareEvent() {
    const shareData = {
        title: '¡30 Años de Alejandro!',
        text: 'Ven a celebrar mis 30 años. ¡No te lo pierdas!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('✅ Evento compartido'))
            .catch(err => console.log('❌ Error compartiendo:', err));
    } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(shareData.url)
            .then(() => {
                alert('📋 ¡Enlace copiado al portapapeles! Compártelo con tus amigos.');
            })
            .catch(err => {
                console.error('❌ Error copiando:', err);
                alert('Puedes compartir manualmente: ' + shareData.url);
            });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('⬆️ Scroll al inicio');
}

function createConfettiEffect() {
    const colors = ['#6A11CB', '#2575FC', '#FF416C', '#FF4B2B', '#00b09b', '#96c93d'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-effect';
        confetti.style.cssText = `
            position: fixed;
            width: ${8 + Math.random() * 8}px;
            height: ${8 + Math.random() * 8}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            top: -20px;
            left: ${Math.random() * 100}%;
            z-index: 10000;
            animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        document.body.appendChild(confetti);
        
        // Remover después de la animación
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 3000);
    }
    
    // Agregar keyframes si no existen
    if (!document.querySelector('#confetti-animation')) {
        const style = document.createElement('style');
        style.id = 'confetti-animation';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(${720 + Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animaciones específicas
                if (entry.target.classList.contains('detail-card')) {
                    entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    document.querySelectorAll('.detail-card, .gallery-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
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

// ===== INICIALIZACIÓN FINAL =====
window.addEventListener('load', function() {
    console.log('🎂 ¡Página completamente cargada!');
    
    // Verificar hash de URL
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        setTimeout(() => {
            showSection(hash);
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${hash}`) {
                    link.classList.add('active');
                }
            });
        }, 100);
    }
    
    // Agregar efectos de entrada
    setTimeout(() => {
        document.querySelectorAll('.hero-title span').forEach((span, index) => {
            span.style.animation = `slideInUp 0.8s ease ${index * 0.3}s forwards`;
            span.style.opacity = '0';
        });
    }, 500);
    
    // Crear más confeti
    setInterval(() => {
        if (Math.random() > 0.7) {
            createConfettiEffect();
        }
    }, 10000);
});

// ===== SERVICE WORKER PARA PWA =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('✅ ServiceWorker registrado con éxito:', registration.scope);
        }).catch(function(err) {
            console.log('❌ Error registrando ServiceWorker:', err);
        });
    });
}