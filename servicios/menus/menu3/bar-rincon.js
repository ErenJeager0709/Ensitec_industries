// Configuración de Partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 200
            }
        },
        color: {
            value: ['#00f3ff', '#ff00ff', '#9d00ff', '#00ff88']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00f3ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
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
            },
            resize: true
        }
    },
    retina_detect: true
});

// Datos de los cocteles del bar
const cocktailData = {
    signature: [
        {
            id: 1,
            name: "Rincón Nocturno",
            price: "$180",
            description: "Nuestra firma exclusiva. Gin premium, licor de flor de saúco, jugo de limón negro y espuma de violeta.",
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Firma", "Premium"],
            details: ["Gin Premium", "Flor de Saúco", "Limón Negro", "Espuma Violeta"],
            abv: "14%"
        },
        {
            id: 2,
            name: "Espejo Líquido",
            price: "$160",
            description: "Vodka cristalino, Cointreau, jugo de pomelo rosado y un toque de jarabe de azafrán.",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Exclusivo", "Aromático"],
            details: ["Vodka", "Cointreau", "Pomelo Rosado", "Azafrán"],
            abv: "16%"
        },
        {
            id: 3,
            name: "Susurro de Fuego",
            price: "$200",
            description: "Mezcal artesanal, puré de mango ahumado, chartreuse verde y polvo de chile ancho.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Ahumado", "Picante"],
            details: ["Mezcal", "Mango Ahumado", "Chartreuse", "Chile Ancho"],
            abv: "18%"
        },
        {
            id: 4,
            name: "Abismo Azul",
            price: "$190",
            description: "Blue Curaçao, ron blanco, crema de coco y reducción de piña caramelizada.",
            image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Tropical", "Cremoso"],
            details: ["Blue Curaçao", "Ron Blanco", "Crema de Coco", "Piña"],
            abv: "15%"
        }
    ],
    classic: [
        {
            id: 5,
            name: "Old Fashioned",
            price: "$150",
            description: "El clásico por excelencia. Bourbon, azúcar, bitter de angostura y twist de naranja.",
            image: "https://laroussecocina.mx/wp-content/uploads/2022/04/Old-fashioned.png",
            badges: ["Clásico", "Robusto"],
            details: ["Bourbon", "Azúcar", "Bitter Angostura", "Naranja"],
            abv: "20%"
        },
        {
            id: 6,
            name: "Negroni",
            price: "$140",
            description: "Gin, Campari y vermut rojo en perfecto equilibrio. Servido sobre una roca.",
            image: "https://cocteleriacreativa.com/sites/default/files/styles/cover/public/imagen/receta/Bluecoat-Negroni_DTA1606_cocteleria-creativa_900x675.jpg?itok=VhsnNoaV",
            badges: ["Italiano", "Amargo"],
            details: ["Gin", "Campari", "Vermut Rojo", "Naranja"],
            abv: "18%"
        },
        {
            id: 7,
            name: "Mojito Cubano",
            price: "$120",
            description: "Ron blanco, hierbabuena fresca, lima, azúcar y soda. Refrescante y vital.",
            image: "https://bsstatic2.mrjack.es/wp-content/uploads/2018/07/mojito-9-980x1200.jpg",
            badges: ["Refrescante", "Cubano"],
            details: ["Ron Blanco", "Hierbabuena", "Lima", "Soda"],
            abv: "12%"
        },
        {
            id: 8,
            name: "Margarita Clásica",
            price: "$130",
            description: "Tequila reposado, Cointreau y jugo de lima fresco. Borde salado opcional.",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2FyaXRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Mexicano", "Cítrico"],
            details: ["Tequila", "Cointreau", "Lima", "Sal"],
            abv: "16%"
        }
    ],
    tropical: [
        {
            id: 9,
            name: "Piña Colada",
            price: "$110",
            description: "Ron, crema de coco y jugo de piña natural. La esencia del Caribe en un vaso.",
            image: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/5a06c9f3b2dcf287a154fab9a64de6a8.jpg",
            badges: ["Tropical", "Cremoso"],
            details: ["Ron", "Crema de Coco", "Piña", "Hielo"],
            abv: "10%"
        },
        {
            id: 10,
            name: "Mai Tai",
            price: "$160",
            description: "Ron añejo, curaçao, jugo de lima y almíbar de orgeat. Polinesia en cada sorbo.",
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFpJTIwdGFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Polinesio", "Complexo"],
            details: ["Ron Añejo", "Curaçao", "Lima", "Orgeat"],
            abv: "17%"
        },
        {
            id: 11,
            name: "Zombie",
            price: "$170",
            description: "Mezcla secreta de rones, jugos tropicales y especias. ¡Cuidado con este!",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Potente", "Tropical"],
            details: ["3 Rones", "Jugos Tropicales", "Especias", "Menta"],
            abv: "22%"
        },
        {
            id: 12,
            name: "Blue Hawaii",
            price: "$140",
            description: "Vodka, ron, blue curaçao, piña y coco. El paraíso en color azul.",
            image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Hawaiano", "Colorido"],
            details: ["Vodka", "Ron", "Blue Curaçao", "Piña"],
            abv: "14%"
        }
    ],
    shots: [
        {
            id: 13,
            name: "B-52",
            price: "$80",
            description: "Kahlúa, Bailey's y Grand Marnier en capas perfectas. Se prende fuego.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["En Capas", "Flambeado"],
            details: ["Kahlúa", "Bailey's", "Grand Marnier", "Fuego"],
            abv: "25%"
        },
        {
            id: 14,
            name: "Jägerbomb",
            price: "$90",
            description: "Jägermeister y Red Bull. La combinación energética alemana.",
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Alemán", "Energético"],
            details: ["Jägermeister", "Red Bull", "Shot"],
            abv: "20%"
        },
        {
            id: 15,
            name: "Tequila Boom",
            price: "$70",
            description: "Tequila, sprite y tapón. ¡Agitar y disfrutar la explosión!",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2FyaXRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Explosivo", "Divertido"],
            details: ["Tequila", "Sprite", "Espumoso"],
            abv: "18%"
        },
        {
            id: 16,
            name: "Cementerio",
            price: "$85",
            description: "Mezcla de varios licores con gotas de grenadina que simulan sangre.",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Dramático", "Fuerte"],
            details: ["Múltiples Licores", "Grenadina", "Potente"],
            abv: "30%"
        }
    ],
    beer: [
        {
            id: 17,
            name: "IPA Artesanal",
            price: "$95",
            description: "Cerveza IPA local con notas cítricas y amargor equilibrado. 500ml.",
            image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Artesanal", "Amarga"],
            details: ["IPA", "Cítrica", "500ml", "Local"],
            abv: "6.5%"
        },
        {
            id: 18,
            name: "Stout Imperial",
            price: "$110",
            description: "Stout robusta con notas de café, chocolate y un final cremoso. 330ml.",
            image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvdXQlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Robusta", "Cremosa"],
            details: ["Stout", "Café", "Chocolate", "330ml"],
            abv: "8.2%"
        },
        {
            id: 19,
            name: "Pilsner Dorada",
            price: "$75",
            description: "Cerveza rubia refrescante, perfecta para cualquier ocasión. 500ml.",
            image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Refrescante", "Clásica"],
            details: ["Pilsner", "Rubia", "500ml", "Suave"],
            abv: "4.8%"
        },
        {
            id: 20,
            name: "Wheat Beer",
            price: "$85",
            description: "Cerveza de trigo con notas especiadas y final afrutado. 500ml.",
            image: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hlYXQlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Trigo", "Afrutada"],
            details: ["Wheat Beer", "Especiada", "500ml", "Turbia"],
            abv: "5.2%"
        }
    ]
};

// Elementos del DOM
const cocktailGrid = document.getElementById('cocktail-grid');
const navButtons = document.querySelectorAll('.nav-btn');
const navIndicator = document.querySelector('.nav-indicator');
const countdownElement = document.getElementById('countdown');
const fabMenu = document.querySelector('.fab-menu');
const mainFab = document.querySelector('.main-fab');

// Variables globales
let currentCategory = 'signature';
let soundEnabled = true;
let currentOrder = [];

// Función para generar los cocteles
function generateCocktails(category) {
    cocktailGrid.innerHTML = '';
    
    const cocktails = cocktailData[category];
    
    cocktails.forEach((cocktail, index) => {
        const cocktailCard = document.createElement('div');
        cocktailCard.className = 'cocktail-card';
        
        cocktailCard.innerHTML = `
            <div class="card-glow"></div>
            <div class="card-image">
                <img src="${cocktail.image}" alt="${cocktail.name}">
                <div class="image-overlay">
                    <div class="card-badges">
                        ${cocktail.badges.map(badge => `<span class="card-badge">${badge}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${cocktail.name}</h3>
                    <div class="card-price">${cocktail.price}</div>
                </div>
                <p class="card-description">${cocktail.description}</p>
                <div class="card-details">
                    ${cocktail.details.map(detail => `<span class="detail-tag">${detail}</span>`).join('')}
                    <span class="detail-tag">${cocktail.abv} ABV</span>
                </div>
                <button class="order-btn" onclick="addToOrder(${cocktail.id})" data-sound="order">
                    <i class="fas fa-glass-cheers"></i>
                    Ordenar Ahora
                </button>
            </div>
        `;
        
        cocktailGrid.appendChild(cocktailCard);
        
        // Animación de aparición escalonada
        setTimeout(() => {
            cocktailCard.classList.add('visible');
        }, index * 150);
    });
}

// Función para actualizar el indicador de navegación
function updateNavIndicator(activeButton) {
    const buttonRect = activeButton.getBoundingClientRect();
    const navRect = activeButton.parentElement.getBoundingClientRect();
    
    const left = buttonRect.left - navRect.left;
    const width = buttonRect.width;
    
    navIndicator.style.left = `${left}px`;
    navIndicator.style.width = `${width}px`;
}

// Función para cambiar categoría
function changeCategory(category, button) {
    currentCategory = category;
    
    // Remover clase active de todos los botones
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir clase active al botón clickeado
    button.classList.add('active');
    
    // Actualizar indicador
    updateNavIndicator(button);
    
    // Generar cocteles de la categoría seleccionada
    generateCocktails(category);
    
    // Reproducir sonido
    playSound('click');
}

// Función para agregar al pedido
function addToOrder(cocktailId) {
    // Encontrar el coctel en todos los datos
    let cocktail = null;
    for (const category in cocktailData) {
        cocktail = cocktailData[category].find(c => c.id === cocktailId);
        if (cocktail) break;
    }
    
    if (cocktail) {
        currentOrder.push(cocktail);
        
        // Crear notificación flotante
        createOrderNotification(cocktail);
        
        // Reproducir sonido
        playSound('order');
        
        // Efecto de confeti
        createConfetti();
        
        // Actualizar contador del FAB
        updateOrderCount();
    }
}

// Función para crear notificación de orden
function createOrderNotification(cocktail) {
    const notification = document.createElement('div');
    notification.className = 'floating-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>¡${cocktail.name} agregado!</span>
            <span class="notification-price">${cocktail.price}</span>
        </div>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 243, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 243, 255, 0.3);
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 1000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s forwards;
        box-shadow: 0 10px 30px rgba(0, 243, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Remover notificación después de la animación
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Función para crear efecto de confeti
function createConfetti() {
    const confettiCount = 30;
    const colors = ['#00f3ff', '#ff00ff', '#9d00ff', '#00ff88'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
            z-index: 9999;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        // Remover después de la animación
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Función para actualizar contador de pedidos
function updateOrderCount() {
    const orderCount = currentOrder.length;
    mainFab.setAttribute('data-count', orderCount > 0 ? orderCount : '');
}

// Función para reproducir sonidos
function playSound(type) {
    if (!soundEnabled) return;
    
    const audio = document.getElementById(`${type}-sound`);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio no disponible'));
    }
}

// Función para alternar sonido
function toggleSound() {
    soundEnabled = !soundEnabled;
    playSound('click');
    
    // Mostrar notificación de estado
    const soundStatus = soundEnabled ? 'activado' : 'desactivado';
    showToast(`Sonido ${soundStatus}`);
}

// Función para mostrar toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 243, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 243, 255, 0.3);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 1000;
        animation: fadeInUp 0.3s ease, fadeOutDown 0.3s ease 2s forwards;
        font-size: 14px;
        font-weight: 600;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 2300);
}

// Función para filtrar por precio
function filterByPrice(maxPrice) {
    const filteredCocktails = [];
    
    for (const category in cocktailData) {
        cocktailData[category].forEach(cocktail => {
            const price = parseInt(cocktail.price.replace('$', ''));
            if (price <= maxPrice) {
                filteredCocktails.push(cocktail);
            }
        });
    }
    
    showFilteredResults(filteredCocktails, `Menores a $${maxPrice}`);
}

// Función para mostrar resultados filtrados
function showFilteredResults(cocktails, filterName) {
    cocktailGrid.innerHTML = '';
    
    if (cocktails.length === 0) {
        cocktailGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No se encontraron cocteles</h3>
                <p>Intenta con otro filtro</p>
            </div>
        `;
        return;
    }
    
    cocktails.forEach((cocktail, index) => {
        const cocktailCard = document.createElement('div');
        cocktailCard.className = 'cocktail-card';
        
        cocktailCard.innerHTML = `
            <div class="card-glow"></div>
            <div class="card-image">
                <img src="${cocktail.image}" alt="${cocktail.name}">
                <div class="image-overlay">
                    <div class="card-badges">
                        ${cocktail.badges.map(badge => `<span class="card-badge">${badge}</span>`).join('')}
                        <span class="card-badge">${filterName}</span>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${cocktail.name}</h3>
                    <div class="card-price">${cocktail.price}</div>
                </div>
                <p class="card-description">${cocktail.description}</p>
                <div class="card-details">
                    ${cocktail.details.map(detail => `<span class="detail-tag">${detail}</span>`).join('')}
                    <span class="detail-tag">${cocktail.abv} ABV</span>
                </div>
                <button class="order-btn" onclick="addToOrder(${cocktail.id})">
                    <i class="fas fa-glass-cheers"></i>
                    Ordenar Ahora
                </button>
            </div>
        `;
        
        cocktailGrid.appendChild(cocktailCard);
        
        setTimeout(() => {
            cocktailCard.classList.add('visible');
        }, index * 100);
    });
}

// Función para mostrar recomendaciones
function showRecommendations() {
    const recommendations = [
        cocktailData.signature[0], // Rincón Nocturno
        cocktailData.classic[1],   // Negroni
        cocktailData.tropical[0],  // Piña Colada
        cocktailData.signature[2]  // Susurro de Fuego
    ];
    
    showFilteredResults(recommendations, "Recomendado");
    playSound('click');
}

// Función para actualizar el countdown del Happy Hour
function updateCountdown() {
    const now = new Date();
    const target = new Date();
    
    // Establecer Happy Hour de 18:00 a 20:00
    target.setHours(18, 0, 0, 0);
    
    let diff = target - now;
    
    // Si ya pasó el Happy Hour de hoy, establecer para mañana
    if (diff < 0) {
        target.setDate(target.getDate() + 1);
        diff = target - now;
    }
    
    // Si estamos en Happy Hour, mostrar tiempo restante
    if (now.getHours() >= 18 && now.getHours() < 20) {
        const end = new Date();
        end.setHours(20, 0, 0, 0);
        diff = end - now;
        
        document.querySelector('.hero-title').textContent = 'Happy Hour Activo';
        document.querySelector('.hero-subtitle').textContent = '2x1 en todos los cocteles';
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Función para inicializar el menú
function initMenu() {
    // Generar categoría inicial
    generateCocktails(currentCategory);
    
    // Configurar event listeners de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            changeCategory(category, this);
        });
    });
    
    // Configurar FAB
    mainFab.addEventListener('click', function() {
        fabMenu.classList.toggle('open');
        this.classList.toggle('open');
        playSound('click');
    });
    
    // Cerrar FAB al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-actions')) {
            fabMenu.classList.remove('open');
            mainFab.classList.remove('open');
        }
    });
    
    // Inicializar countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Agregar estilos de animación
    addAnimationStyles();
}

// Función para agregar estilos de animación
function addAnimationStyles() {
    const styles = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes fadeInUp {
            from { transform: translate(-50%, 20px); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        @keyframes fadeOutDown {
            from { transform: translate(-50%, 0); opacity: 1; }
            to { transform: translate(-50%, 20px); opacity: 0; }
        }
        
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            }
        }
        
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }
        
        .no-results i {
            font-size: 48px;
            margin-bottom: 20px;
            opacity: 0.5;
        }
        
        .no-results h3 {
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--text-primary);
        }
        
        .main-fab[data-count]::after {
            content: attr(data-count);
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--neon-green);
            color: var(--dark-bg);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    
    // Efecto de parallax en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        
        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            layer.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Exportar funciones globales
window.addToOrder = addToOrder;
window.filterByPrice = filterByPrice;
window.showRecommendations = showRecommendations;
window.toggleSound = toggleSound;