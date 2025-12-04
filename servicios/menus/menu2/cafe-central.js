// Datos del menú del Café Central
const menuData = {
    cafes: [
        {
            id: 1,
            name: "Espresso Clásico",
            price: "$45",
            description: "Café espresso intenso y aromático, preparado con granos arábica premium.",
            image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Clásico"],
            details: ["Arabica", "Intenso", "30ml"]
        },
        {
            id: 2,
            name: "Cappuccino Italiano",
            price: "$65",
            description: "Balance perfecto entre espresso, leche vaporizada y espuma cremosa.",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Italiano"],
            details: ["Espresso", "Leche vaporizada", "Canela"]
        },
        {
            id: 3,
            name: "Latte Art",
            price: "$75",
            description: "Café latte con diseño artístico en la espuma. ¡Perfecto para Instagram!",
            image: "https://www.risecoffeebox.co.uk/cdn/shop/articles/The_most_incredible_latte_art_and_how_to_do_it_at_home.jpg?v=1695224667",
            badges: ["Fotográfico"],
            details: ["Arte latte", "Leche entera", "Diseño personalizado"]
        },
        {
            id: 4,
            name: "Mocha Especial",
            price: "$85",
            description: "La combinación perfecta de espresso, chocolate y leche vaporizada.",
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9jaGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Chocolate"],
            details: ["Chocolate belga", "Espresso", "Crema batida"]
        },
        {
            id: 5,
            name: "Cold Brew",
            price: "$70",
            description: "Café infusionado en frío por 12 horas, suave y menos ácido.",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Frío"],
            details: ["Infusión 12h", "Suave", "Hielo"]
        },
        {
            id: 6,
            name: "Café de Origen Etiopía",
            price: "$90",
            description: "Single origin con notas florales y cítricas. Para paladares exigentes.",
            image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwZWNpYWx0eSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Premium"],
            details: ["Single origin", "Notas florales", "V60"]
        }
    ],
    te: [
        {
            id: 7,
            name: "Té Verde Matcha",
            price: "$80",
            description: "Matcha ceremonial japonés, rico en antioxidantes y energía natural.",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0Y2hhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Japonés"],
            details: ["Ceremonial", "Antioxidantes", "Energía natural"]
        },
        {
            id: 8,
            name: "Té Negro English Breakfast",
            price: "$55",
            description: "Mezcla robusta perfecta para empezar el día con energía.",
            image: "https://marleycoffee.com.uy/wp-content/uploads/2025/01/MT-001_EnglishBreakfast_555x777.jpg",
            badges: ["Energizante"],
            details: ["Robusto", "Británico", "Con leche"]
        },
        {
            id: 9,
            name: "Infusión de Manzanilla",
            price: "$45",
            description: "Infusión relajante perfecta para momentos de tranquilidad.",
            image: "https://s3.abcstatics.com/abc/sevilla/media/gurme/2022/11/01/s/infusion-manzanilla-0004-kFFG--1248x698@abc.jpg",
            badges: ["Relajante"],
            details: ["Orgánica", "Sin cafeína", "Relajante"]
        },
        {
            id: 10,
            name: "Chai Latte Especiado",
            price: "$75",
            description: "Mezcla aromática de té negro con especias y leche vaporizada.",
            image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaSUyMGxhdHRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Especiado"],
            details: ["Canela", "Cardamomo", "Jengibre"]
        }
    ],
    reposteria: [
        {
            id: 11,
            name: "Croissant de Mantequilla",
            price: "$35",
            description: "Croissant artesanal con mantequilla francesa, hojaldrado perfecto.",
            image: "https://www.hola.com/horizon/landscape/b3c4dac849f0-croissants-caseros-receta-facil-t.jpg",
            badges: ["Artesanal"],
            details: ["Mantequilla francesa", "Hojaldrado", "Recién horneado"]
        },
        {
            id: 12,
            name: "Tarta de Zanahoria",
            price: "$65",
            description: "Tarta especiada con frosting de queso crema y nueces caramelizadas.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Especialidad"],
            details: ["Zanahoria fresca", "Frosting cremoso", "Nueces"]
        },
        {
            id: 13,
            name: "Macarons Franceses",
            price: "$25",
            description: "Delicados macarons en sabores fresa, chocolate y vainilla.",
            image: "https://cdn7.kiwilimon.com/recetaimagen/2681/640x640/14628.jpg.jpg",
            badges: ["Francés"],
            details: ["Almendra", "Sabores variados", "Delicado"]
        },
        {
            id: 14,
            name: "Cheesecake de Maracuyá",
            price: "$75",
            description: "Suave cheesecake con base de galleta y coulis de maracuyá tropical.",
            image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Tropical"],
            details: ["Queso crema", "Maracuyá", "Base galleta"]
        },
        {
            id: 15,
            name: "Brownie de Chocolate",
            price: "$45",
            description: "Brownie intenso de chocolate con nueces y corazón fundente.",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Chocolate"],
            details: ["Chocolate 70%", "Nueces", "Fundente"]
        },
        {
            id: 16,
            name: "Muffin de Arándanos",
            price: "$30",
            description: "Muffin esponjoso repleto de arándanos frescos y crujiente por arriba.",
            image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZWJlcnJ5JTIwbXVmZmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Frutal"],
            details: ["Arándanos frescos", "Esponjoso", "Crujiente"]
        }
    ],
    sandwiches: [
        {
            id: 17,
            name: "Club Sandwich",
            price: "$120",
            description: "Pollo, bacon, lechuga, tomate y mayonesa en pan tostado.",
            image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2x1YiUyMHNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Clásico"],
            details: ["Pollo", "Bacon", "Tres pisos"]
        },
        {
            id: 18,
            name: "Sandwich de Aguacate",
            price: "$95",
            description: "Aguacate fresco, queso feta, rúcula y tomate en pan integral.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZvY2FkbyUyMHNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Vegetariano"],
            details: ["Aguacate", "Queso feta", "Integral"]
        },
        {
            id: 19,
            name: "Panini Caprese",
            price: "$110",
            description: "Mozzarella, tomate, albahaca y pesto en pan ciabatta tostado.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMUdwtX7h4DRiwLmR5548qb9bLd6BrBM6gg&s",
            badges: ["Italiano"],
            details: ["Mozzarella", "Albahaca", "Pesto"]
        },
        {
            id: 20,
            name: "Bagel con Salmón",
            price: "$140",
            description: "Bagel de salmón ahumado, queso crema, alcaparras y cebolla morada.",
            image: "https://www.bekia.es/images/cocina/0000/21/1.jpg",
            badges: ["Premium"],
            details: ["Salmón ahumado", "Queso crema", "Bagel"]
        }
    ],
    batidos: [
        {
            id: 21,
            name: "Smoothie Tropical",
            price: "$85",
            description: "Mezcla refrescante de piña, mango, coco y yogurt griego.",
            image: "https://www.destinationdelish.com/wp-content/uploads/2020/05/tropical-island-green-smoothie-thumbnail.jpg",
            badges: ["Tropical"],
            details: ["Piña", "Mango", "Coco"]
        },
        {
            id: 22,
            name: "Batido de Fresa",
            price: "$75",
            description: "Fresas frescas, plátano, leche y miel. Delicioso y nutritivo.",
            image: "https://recetinas.com/wp-content/uploads/2018/05/smoothie-fresa.jpg",
            badges: ["Clásico"],
            details: ["Fresas frescas", "Plátano", "Miel"]
        },
        {
            id: 23,
            name: "Green Detox",
            price: "$90",
            description: "Espinaca, piña, jengibre y pepino. Limpia y energiza.",
            image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBzbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Saludable"],
            details: ["Espinaca", "Jengibre", "Desintoxicante"]
        },
        {
            id: 24,
            name: "Batido Proteico",
            price: "$95",
            description: "Plátano, mantequilla de maní, proteína y avena. Perfecto post-entreno.",
            image: "https://s2.abcstatics.com/abc/sevilla/media/gurme/2023/10/10/s/batido-proteinas-casero-chocolate-platano.jpg-kYWD--940x529@abc.jpg",
            badges: ["Energético"],
            details: ["Proteína", "Mantequilla maní", "Avena"]
        }
    ]
};

// Elementos del DOM
const menuItemsContainer = document.getElementById('menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');

// Función para generar los items del menú
function generateMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    const items = menuData[category];
    
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.badges.map(badge => `<span class="item-badge">${badge}</span>`).join('')}
            </div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-title">${item.name}</h3>
                    <div class="item-price">${item.price}</div>
                </div>
                <p class="item-description">${item.description}</p>
                <div class="item-details">
                    ${item.details.map(detail => `<span class="detail-tag">${detail}</span>`).join('')}
                </div>
                <button class="order-btn" onclick="addToOrder(${item.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Agregar al Pedido
                </button>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItem);
        
        // Animación de aparición escalonada
        setTimeout(() => {
            menuItem.classList.add('visible');
        }, index * 100);
    });
}

// Función para cambiar categoría
function changeCategory(category) {
    // Remover clase active de todos los botones
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir clase active al botón clickeado
    event.target.classList.add('active');
    
    // Generar items de la categoría seleccionada
    generateMenuItems(category);
}

// Función para simular agregar al pedido
function addToOrder(itemId) {
    // Encontrar el item en todos los datos
    let item = null;
    for (const category in menuData) {
        item = menuData[category].find(i => i.id === itemId);
        if (item) break;
    }
    
    if (item) {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = 'order-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>¡${item.name} agregado al pedido!</span>
                <span class="notification-price">${item.price}</span>
            </div>
        `;
        
        // Estilos para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remover notificación después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
        
        // Agregar estilos de animación si no existen
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .notification-price {
                    margin-left: auto;
                    font-weight: bold;
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Efecto de sonido opcional (comentado)
        // playOrderSound();
    }
}

// Función para reproducir sonido de orden (opcional)
function playOrderSound() {
    // Esto es opcional - necesitarías un archivo de sonido
    // const audio = new Audio('order-sound.mp3');
    // audio.volume = 0.3;
    // audio.play().catch(e => console.log('Audio no disponible'));
}

// Función para inicializar el menú
function initMenu() {
    // Generar categoría inicial (cafés)
    generateMenuItems('cafes');
    
    // Agregar event listeners a los botones de categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            changeCategory(category);
        });
    });
    
    // Efecto de scroll suave para los items
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
            }
        });
    }, observerOptions);
    
    // Observar items después de que se generen
    setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });
    }, 500);
    
    // Efectos especiales para el café
    initCoffeeEffects();
}

// Efectos especiales para la cafetería
function initCoffeeEffects() {
    // Efecto de partículas de café (simulado con CSS)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes coffeeSteam {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            50% { transform: translateY(-10px) scale(1.1); opacity: 0.6; }
            100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
        }
        
        .coffee-steam {
            position: fixed;
            width: 4px;
            height: 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 2px;
            animation: coffeeSteam 3s ease-in-out infinite;
            pointer-events: none;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
    
    // Crear efecto de vapor de café en el fondo
    createCoffeeSteamEffect();
}

// Crear efecto de vapor de café
function createCoffeeSteamEffect() {
    const steamCount = 8;
    
    for (let i = 0; i < steamCount; i++) {
        setTimeout(() => {
            const steam = document.createElement('div');
            steam.className = 'coffee-steam';
            steam.style.left = `${Math.random() * 100}%`;
            steam.style.animationDelay = `${Math.random() * 2}s`;
            document.body.appendChild(steam);
            
            // Remover después de la animación
            setTimeout(() => {
                if (steam.parentNode) {
                    document.body.removeChild(steam);
                }
            }, 3000);
        }, i * 500);
    }
    
    // Continuar el efecto
    setInterval(createCoffeeSteamEffect, 4000);
}

// Función para buscar items en el menú
function searchMenu(query) {
    const results = [];
    for (const category in menuData) {
        menuData[category].forEach(item => {
            if (item.name.toLowerCase().includes(query.toLowerCase()) || 
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.details.some(detail => detail.toLowerCase().includes(query.toLowerCase()))) {
                results.push({...item, category: category});
            }
        });
    }
    return results;
}

// Función para filtrar por precio
function filterByPrice(maxPrice) {
    const results = [];
    for (const category in menuData) {
        menuData[category].forEach(item => {
            const price = parseInt(item.price.replace('$', ''));
            if (price <= maxPrice) {
                results.push({...item, category: category});
            }
        });
    }
    return results;
}

// Función para obtener recomendaciones basadas en preferencias
function getRecommendations(preferences) {
    const recommendations = [];
    for (const category in menuData) {
        menuData[category].forEach(item => {
            if (preferences.some(pref => 
                item.name.toLowerCase().includes(pref) ||
                item.description.toLowerCase().includes(pref) ||
                item.details.some(detail => detail.toLowerCase().includes(pref))
            )) {
                recommendations.push(item);
            }
        });
    }
    return recommendations.slice(0, 3); // Top 3 recomendaciones
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    
    // Efecto especial para el header del café
    const header = document.querySelector('.cafe-header');
    header.style.background = `linear-gradient(135deg, ${getComputedStyle(document.documentElement).getPropertyValue('--color-primary')}, ${getComputedStyle(document.documentElement).getPropertyValue('--color-secondary')})`;
    
    // Actualizar hora actual en el footer
    updateCurrentTime();
});

// Función para actualizar la hora actual en el footer
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const timeElement = document.createElement('div');
    timeElement.className = 'current-time';
    timeElement.textContent = `🕒 Hora actual: ${timeString}`;
    timeElement.style.cssText = `
        text-align: center;
        margin-top: 15px;
        opacity: 0.7;
        font-size: 14px;
        color: rgba(255,255,255,0.8);
    `;
    
    const footer = document.querySelector('.cafe-footer .container');
    const existingTime = footer.querySelector('.current-time');
    
    if (existingTime) {
        existingTime.textContent = `🕒 Hora actual: ${timeString}`;
    } else {
        footer.appendChild(timeElement);
    }
    
    // Actualizar cada minuto
    setInterval(updateCurrentTime, 60000);
}
// ===== FUNCIONALIDADES PARA MÓVIL =====

// Ocultar/mostrar navegación al hacer scroll
let lastScrollTop = 0;
const nav = document.querySelector('.menu-categories');
const scrollThreshold = 100;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            nav.classList.add('hidden');
        } else {
            // Scroll hacia arriba
            nav.classList.remove('hidden');
        }
    } else {
        nav.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
    
    // Mostrar/ocultar botón para ir arriba
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    if (scrollTop > 300) {
        if (!scrollTopBtn) createScrollTopButton();
        else scrollTopBtn.classList.add('visible');
    } else if (scrollTopBtn) {
        scrollTopBtn.classList.remove('visible');
    }
}

// Crear botón para ir al inicio
function createScrollTopButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Volver al inicio');
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);
    
    setTimeout(() => btn.classList.add('visible'), 100);
}

// Optimizar imágenes para móviles
function optimizeImagesForMobile() {
    if (window.innerWidth <= 768) {
        const images = document.querySelectorAll('.item-image img');
        images.forEach(img => {
            // Ya están optimizadas con parámetros de Unsplash, pero podemos asegurar
            const src = img.src;
            if (src.includes('unsplash.com') && !src.includes('w=400')) {
                img.src = src.replace(/(auto=format&fit=crop&w=)\d+/, '$1400');
            }
        });
    }
}

// Mejorar experiencia táctil
function enhanceTouchExperience() {
    // Prevenir zoom en doble tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Feedback táctil mejorado
    document.addEventListener('touchstart', () => {}, { passive: true });
}

// Inicializar mejoras para móvil
function initMobileOptimizations() {
    // Escuchar scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Optimizar imágenes al cargar y al redimensionar
    optimizeImagesForMobile();
    window.addEventListener('resize', optimizeImagesForMobile);
    
    // Mejorar experiencia táctil
    if ('ontouchstart' in window) {
        enhanceTouchExperience();
        
        // Agregar clase touch al body para CSS específico
        document.body.classList.add('touch-device');
    }
    
    // Ajustar viewport para iOS
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    }
}

// Modificar la función initMenu para incluir mejoras móviles
const originalInitMenu = initMenu;
initMenu = function() {
    originalInitMenu();
    initMobileOptimizations();
};

// Sobrescribir la inicialización del DOM
document.addEventListener('DOMContentLoaded', function() {
    // Añadir etiqueta viewport optimizada
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
    
    initMenu();
    
    // Efecto especial para el header del café
    const header = document.querySelector('.cafe-header');
    header.style.background = `linear-gradient(135deg, ${getComputedStyle(document.documentElement).getPropertyValue('--color-primary')}, ${getComputedStyle(document.documentElement).getPropertyValue('--color-secondary')})`;
    
    // Actualizar hora actual en el footer
    updateCurrentTime();
});

// Exportar funciones para uso global
window.addToOrder = addToOrder;
window.searchMenu = searchMenu;
window.filterByPrice = filterByPrice;
window.getRecommendations = getRecommendations;

// Ejemplo de uso de las funciones:
// console.log(searchMenu('chocolate')); // Busca items con chocolate
// console.log(filterByPrice(80)); // Filtra items menores a $80
// console.log(getRecommendations(['chocolate', 'fruta'])); // Recomendaciones basadas en preferencias