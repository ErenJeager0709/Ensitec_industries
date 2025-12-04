// Inicializar partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff6b8b', '#ff8fa3', '#ffb6c1']
        },
        shape: {
            type: 'heart',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 8,
            random: true
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        }
    }
});

// Fecha actual
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('current-date').textContent = dateString;
}

// Contador de tiempo juntos (desde una fecha específica)
function updateLoveCounter() {
    const startDate = new Date('2023-01-01'); // Cambia esta fecha
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    
    document.getElementById('days-together').textContent = days;
    document.getElementById('hours-together').textContent = hours;
    document.getElementById('minutes-together').textContent = minutes;
    document.getElementById('seconds-together').textContent = seconds;
}

// Control de música
const audio = document.getElementById('love-song');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

// Mensaje secreto
const secretBtn = document.getElementById('secret-btn');
const secretText = document.getElementById('secret-text');

secretBtn.addEventListener('click', () => {
    secretText.classList.toggle('show');
    
    if (secretText.classList.contains('show')) {
        secretBtn.innerHTML = '<i class="fas fa-heart-broken"></i> Ocultar Mensaje';
    } else {
        secretBtn.innerHTML = '<i class="fas fa-heart"></i> Mensaje Secreto';
    }
});

// Efectos de escritura para nombres editables
const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.background = 'rgba(255, 107, 139, 0.1)';
    });
    
    element.addEventListener('blur', function() {
        this.style.background = 'transparent';
    });
});

// Efecto de confeti al cargar la página
function createConfetti() {
    const confettiCount = 50;
    const colors = ['#ff6b8b', '#ff8fa3', '#ffb6c1', '#ffd700'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.5};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
            z-index: 9999;
        `;
        
        document.body.appendChild(confetti);
        
        // Remover después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Añadir estilos para confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
    
    // Crear confeti después de un breve delay
    setTimeout(createConfetti, 1000);
    
    // Efecto de latido para el título
    const loveTitle = document.querySelector('.love-title');
    setInterval(() => {
        loveTitle.style.transform = 'scale(1.05)';
        setTimeout(() => {
            loveTitle.style.transform = 'scale(1)';
        }, 300);
    }, 2000);
});

// Efecto de tecleo para nombres editables
editableElements.forEach(element => {
    element.addEventListener('input', function() {
        // Guardar en localStorage para persistencia
        localStorage.setItem(this.className, this.textContent);
    });
    
    // Cargar desde localStorage si existe
    const savedText = localStorage.getItem(this.className);
    if (savedText) {
        this.textContent = savedText;
    }
});