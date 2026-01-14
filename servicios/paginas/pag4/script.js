// Menu Hamburguesa
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// Cambiar header al hacer scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(26, 26, 26, 0.98)";
        header.style.padding = "10px 0";
    } else {
        header.style.backgroundColor = "rgba(26, 26, 26, 0.95)";
        header.style.padding = "15px 0";
    }
});

// Animación para elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll(".specialty-card, .menu-item, .gallery-item").forEach(el => {
    observer.observe(el);
});

// Función para reservar mesa
function reservarMesa(nombre, personas, fecha, hora) {
    if (!nombre || !personas || !fecha || !hora) {
        alert('Por favor, completa todos los campos de la reservación.');
        return false;
    }
    
    const confirmacion = confirm(`¿Confirmar reservación?\n\nNombre: ${nombre}\nPersonas: ${personas}\nFecha: ${fecha}\nHora: ${hora}\n\nTe contactaremos para confirmar.`);
    
    if (confirmacion) {
        alert(`¡Reserva solicitada con éxito!\n\nNombre: ${nombre}\nPersonas: ${personas}\nFecha: ${fecha}\nHora: ${hora}\n\nTe contactaremos en breve para confirmar tu reserva en The Rock.`);
        // Aquí normalmente enviarías los datos a un servidor
        return true;
    }
    
    return false;
}

// Validación de formulario de contacto
function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    
    if (!nombre || !nombre.value.trim()) {
        alert('Por favor, ingresa tu nombre.');
        if (nombre) nombre.focus();
        return false;
    }
    
    if (!email || !email.value.trim() || !email.value.includes('@')) {
        alert('Por favor, ingresa un email válido.');
        if (email) email.focus();
        return false;
    }
    
    if (!mensaje || !mensaje.value.trim()) {
        alert('Por favor, ingresa tu mensaje.');
        if (mensaje) mensaje.focus();
        return false;
    }
    
    alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    // Aquí normalmente enviarías los datos a un servidor
    return true;
}

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web de The Rock cargado correctamente');
    
    // Añadir año actual al footer
    const yearSpans = document.querySelectorAll('#current-year');
    if (yearSpans.length > 0) {
        yearSpans.forEach(span => {
            span.textContent = new Date().getFullYear();
        });
    }
    
    // Actualizar clase activa en navegación según la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((currentPage === 'index.html' && linkPage === 'index.html') || 
            (currentPage === linkPage) ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo procesar enlaces que no sean categorías del menú
            if (href.startsWith('#') && href.length > 1 && !href.includes('hamburguesas') && 
                !href.includes('carnes') && !href.includes('hotdogs') && !href.includes('snacks') &&
                !href.includes('micheladas') && !href.includes('cocteles') && !href.includes('bebidas')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Efecto de escritura para el título del hero (opcional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.innerWidth > 768) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        // Descomentar para activar efecto de escritura
        // setTimeout(typeWriter, 1000);
    }
    
    // Código para manejar el formulario de reserva si existe
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('reservation-name').value;
            const personas = document.getElementById('reservation-people').value;
            const fecha = document.getElementById('reservation-date').value;
            const hora = document.getElementById('reservation-time').value;
            const telefono = document.getElementById('reservation-phone').value;
            
            reservarMesa(nombre, personas, fecha, hora, telefono);
        });
    }
    
    // Código para manejar el formulario de contacto si existe
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validarFormulario();
        });
    }
});