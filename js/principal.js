
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a, .btn[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Efectos de partículas para la página de automatización (opcional)
function initAutomationParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: ["#667eea", "#764ba2", "#84fab0"] },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#667eea",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
}

        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                this.reset();
            });
        }

        // Animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .feature-card, .portfolio-item').forEach(item => {
            observer.observe(item);
        });
        // servicios-automatizacion.js
class AutomatizacionService {
    constructor() {
        this.init();
    }

    init() {
        this.addCardHoverEffects();
        this.addFeatureAnimations();
    }

    // Efectos hover para la tarjeta de automatización
    addCardHoverEffects() {
        const automationCard = document.querySelector('.service-card:nth-child(5)');
        
        if (automationCard) {
            automationCard.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            });

            automationCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        }
    }

    // Animaciones para las características
    addFeatureAnimations() {
        const features = document.querySelectorAll('.feature-tag');
        
        features.forEach((feature, index) => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                feature.style.transition = 'all 0.5s ease';
                feature.style.opacity = '1';
                feature.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Método para mostrar demo interactiva
    showDemo() {
        const demoFeatures = [
            '🤖 Chatbot atendiendo clientes',
            '📅 Sistema de reservaciones automático',
            '💬 Integración con WhatsApp Business',
            '📊 Panel de analytics en tiempo real',
            '🔄 Flujos de conversación personalizados'
        ];

        let currentFeature = 0;
        
        const demoInterval = setInterval(() => {
            console.log(demoFeatures[currentFeature]);
            currentFeature = (currentFeature + 1) % demoFeatures.length;
        }, 2000);

        return demoInterval;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const automationService = new AutomatizacionService();
    
    // Ejemplo de uso del demo
    // const demo = automationService.showDemo();
    
    // Para detener el demo después de 10 segundos
    // setTimeout(() => clearInterval(demo), 10000);
});

