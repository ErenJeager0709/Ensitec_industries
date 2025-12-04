// ===== VARIABLES GLOBALES =====
let isMusicPlaying = false;
let lastScrollTop = 0;
const weddingDate = new Date('May 25, 2024 16:00:00').getTime();

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cargando página de boda...');
    
    // Ocultar loader después de 2 segundos
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
                console.log('Loader ocultado');
            }, 500);
        }
    }, 2000);

    // Inicializar todos los componentes
    initNavigation();
    initInvitation();
    initCountdown();
    initGallery();
    initRSVP();
    initMusic();
    initScrollEffects();
    initMobileOptimizations();
    
    console.log('Página inicializada correctamente');
});

// ===== NAVEGACIÓN - FUNCIONAL Y SIMPLE =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.getElementById('weddingNav');
    
    console.log('Inicializando navegación...');
    
    // Función para cerrar el menú
    function closeMenu() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (navToggle) {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = 'auto';
    }
    
    // Función para abrir el menú
    function openMenu() {
        if (navMenu) {
            navMenu.classList.add('active');
        }
        if (navToggle) {
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
        }
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
            
            console.log('Menú toggled');
        });
    }
    
    // Manejar clic en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir comportamiento por defecto solo si es un enlace interno
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            
            const sectionId = this.getAttribute('data-section');
            console.log('Navegando a:', sectionId);
            
            // Cerrar menú móvil
            closeMenu();
            
            // Actualizar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar sección
            showSection(sectionId);
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
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Ocultar/mostrar navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop) {
                // Scroll hacia abajo - ocultar
                nav.classList.add('hidden');
            } else {
                // Scroll hacia arriba - mostrar
                nav.classList.remove('hidden');
            }
        } else {
            nav.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Mostrar/ocultar botón para subir
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

// Función para manejar clic en navegación (inline en HTML)
function handleNavClick(event, sectionId) {
    event.preventDefault();
    console.log('Clic en nav:', sectionId);
    
    // Actualizar enlaces activos
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Cerrar menú móvil
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    if (navMenu) navMenu.classList.remove('active');
    if (navToggle) {
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    
    // Mostrar sección
    showSection(sectionId);
}

// ===== MOSTRAR SECCIÓN =====
function showSection(sectionId) {
    console.log('Mostrando sección:', sectionId);
    
    // Validar que la sección exista
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.error('Sección no encontrada:', sectionId);
        sectionId = 'our-story'; // Fallback a la primera sección
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
        const headerHeight = document.querySelector('.wedding-nav').offsetHeight;
        const sectionTop = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }, 100);
    
    // Actualizar URL sin recargar
    history.pushState(null, '', `#${sectionId}`);
}

// ===== INVITACIÓN FLOTANTE =====
function initInvitation() {
    const openBtn = document.getElementById('openInvitationBtn');
    const invitation = document.querySelector('.floating-invitation');
    
    if (openBtn && invitation) {
        openBtn.addEventListener('click', function() {
            console.log('Abriendo invitación...');
            invitation.classList.add('hidden');
            
            setTimeout(() => {
                invitation.style.display = 'none';
                // Mostrar primera sección
                showSection('our-story');
            }, 800);
        });
    }
}

// ===== COUNTDOWN =====
function initCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Actualizar elementos del DOM
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
            
            // Efecto especial para últimos segundos
            if (seconds <= 10 && secondsEl) {
                secondsEl.style.color = '#ff6b6b';
                secondsEl.style.animation = 'pulse 0.5s infinite';
            }
        } else {
            // La boda ya pasó
            const countdownContainer = document.querySelector('.countdown');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">❤️</span>
                        <span class="countdown-label">¡Ya estamos casados!</span>
                    </div>
                `;
            }
        }
    }
    
    // Actualizar inmediatamente y luego cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== GALERÍA =====
function initGallery() {
    // Datos de la galería
    const galleryImages = [
        {
            src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Nuestro primer viaje juntos - París 2020'
        },
        {
            src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'La propuesta de matrimonio - Enero 2022'
        },
        {
            src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Sesión de fotos de compromiso - Verano 2023'
        },
        {
            src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Preparativos de la boda - Primavera 2024'
        }
    ];
    
    // Los elementos se manejan con onclick inline en el HTML
}

function openGallery(index) {
    const galleryImages = [
        {
            src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Nuestro primer viaje juntos - París 2020'
        },
        {
            src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'La propuesta de matrimonio - Enero 2022'
        },
        {
            src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Sesión de fotos de compromiso - Verano 2023'
        },
        {
            src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Preparativos de la boda - Primavera 2024'
        }
    ];
    
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImage && modalCaption && galleryImages[index]) {
        modalImage.src = galleryImages[index].src;
        modalImage.alt = galleryImages[index].caption;
        modalCaption.textContent = galleryImages[index].caption;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== RSVP =====
function initRSVP() {
    // Los eventos se manejan con onsubmit y onclick inline en el HTML
}

function submitRSVP(event) {
    event.preventDefault();
    console.log('Enviando RSVP...');
    
    const submitBtn = document.getElementById('submitBtn');
    const rsvpSuccess = document.getElementById('rsvpSuccess');
    const form = document.getElementById('wedding-rsvp');
    
    if (!submitBtn || !rsvpSuccess || !form) return;
    
    // Mostrar estado de carga
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (en producción sería una llamada AJAX real)
    setTimeout(() => {
        // Mostrar éxito
        form.style.display = 'none';
        rsvpSuccess.style.display = 'block';
        
        // Crear confeti
        createConfetti();
        
        // Guardar en localStorage
        const formData = {
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            attendance: form.querySelector('select').value,
            guests: form.querySelector('input[type="number"]').value,
            message: form.querySelector('textarea').value,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('weddingRSVP', JSON.stringify(formData));
        
        // Restaurar botón
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }, 2000);
}

function selectGift(type) {
    const giftNames = {
        'honeymoon': 'Honeymoon Fund',
        'store': 'Tienda Departamental',
        'surprise': 'Sorpresa'
    };
    
    alert(`Gracias por considerar un regalo de ${giftNames[type]}. Te contactaremos con más información.`);
}

// ===== MÚSICA =====
function initMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const weddingSong = document.getElementById('wedding-song');
    
    if (musicToggle && weddingSong) {
        musicToggle.addEventListener('click', function() {
            if (isMusicPlaying) {
                weddingSong.pause();
                this.innerHTML = '<i class="fas fa-music"></i><span>Nuestra canción</span>';
            } else {
                weddingSong.play().catch(e => {
                    console.log('Auto-play bloqueado:', e);
                    // Mostrar instrucciones si el auto-play está bloqueado
                    if (confirm('¿Te gustaría escuchar nuestra canción especial?')) {
                        weddingSong.play();
                    }
                });
                this.innerHTML = '<i class="fas fa-pause"></i><span>Pausar música</span>';
            }
            isMusicPlaying = !isMusicPlaying;
        });
        
        // Pausar música cuando la página no está visible
        document.addEventListener('visibilitychange', function() {
            if (document.hidden && isMusicPlaying) {
                weddingSong.pause();
                musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Nuestra canción</span>';
                isMusicPlaying = false;
            }
        });
    }
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Observador de intersección para animaciones
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    document.querySelectorAll('.timeline-item, .detail-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// ===== MÓVIL OPTIMIZATIONS =====
function initMobileOptimizations() {
    // Detectar si es un dispositivo táctil
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Mejorar feedback táctil
        document.addEventListener('touchstart', function() {}, { passive: true });
    }
    
    // Ajustar para iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // Agregar clase específica para iOS
        document.body.classList.add('ios-device');
    }
}

// ===== FUNCIONES UTILITARIAS =====
function openMap() {
    alert('En una implementación real, esto abriría Google Maps con la ubicación de la ceremonia.');
    // Ejemplo: window.open('https://maps.google.com/?q=Iglesia+de+Santa+María+Calle+del+Amor+123', '_blank');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function createConfetti() {
    const confettiCount = 50;
    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
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
    
    // Agregar keyframes para confeti si no existen
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
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

// ===== INICIALIZAR PÉTALOS =====
function initPetalEffect() {
    const container = document.getElementById('petalsContainer');
    if (!container) return;
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'floating-petal';
        petal.style.cssText = `
            position: absolute;
            width: ${15 + Math.random() * 10}px;
            height: ${15 + Math.random() * 10}px;
            background: ${Math.random() > 0.5 ? 'var(--color-rose)' : 'var(--color-rose-light)'};
            border-radius: 50% 0 50% 50%;
            opacity: ${0.3 + Math.random() * 0.4};
            top: -20px;
            left: ${Math.random() * 100}%;
            animation: floatDown ${15 + Math.random() * 15}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        container.appendChild(petal);
        
        // Remover y crear nuevo pétalo después de la animación
        setTimeout(() => {
            if (petal.parentNode) {
                petal.remove();
                createPetal();
            }
        }, (15 + Math.random() * 15) * 1000);
    }
    
    // Crear pétalos iniciales
    for (let i = 0; i < 10; i++) {
        setTimeout(createPetal, i * 500);
    }
    
    // Agregar keyframes para la animación
    if (!document.querySelector('#petal-styles')) {
        const style = document.createElement('style');
        style.id = 'petal-styles';
        style.textContent = `
            @keyframes floatDown {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: ${0.3 + Math.random() * 0.4};
                }
                100% {
                    transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== INICIALIZAR TODO AL FINAL =====
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
    
    // Iniciar efectos de pétalos
    initPetalEffect();
    
    // Verificar RSVP guardado
    const savedRSVP = localStorage.getItem('weddingRSVP');
    if (savedRSVP) {
        console.log('RSVP previo encontrado');
        
        // Mostrar notificación sutil
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'rsvp-notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Ya confirmaste tu asistencia</span>
            `;
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--color-success);
                color: white;
                padding: 10px 20px;
                border-radius: 50px;
                z-index: 1000;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                animation: slideInUp 0.3s ease;
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutDown 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        }, 2000);
    }
    
    // Manejar hash de URL
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        setTimeout(() => {
            showSection(hash);
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === hash) {
                    link.classList.add('active');
                }
            });
        }, 100);
    }
    
    // Agregar animaciones de entrada para los nombres
    setTimeout(() => {
        document.querySelectorAll('.name').forEach((name, index) => {
            name.style.animation = `nameAppear 1s ease ${index * 0.5}s forwards`;
        });
    }, 500);
});