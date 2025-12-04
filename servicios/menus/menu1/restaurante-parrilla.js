// Datos del menú del restaurante La Parrilla
const menuData = {
    cortes: [
        {
            id: 1,
            name: "Bife de Chorizo",
            price: "$450",
            description: "Corte premium de 400g, jugoso y lleno de sabor. Servido con chimichurri casero.",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Premium", "400g"],
            details: ["Angus", "Madurado 21 días", "A la parrilla"]
        },
        {
            id: 2,
            name: "Asado de Tira",
            price: "$380",
            description: "Corte tradicional argentino, crujiente por fuera y tierno por dentro.",
            image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZWYlMjByaWJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
            badges: ["Tradicional"],
            details: ["Corte criollo", "Cocción lenta", "Sabor ahumado"]
        },
        {
            id: 3,
            name: "Lomo Premium",
            price: "$520",
            description: "El corte más tierno, seleccionado especialmente para los paladares más exigentes.",
            image: "https://mrpork.cl/cdn/shop/files/lomo-vetado-de-vacuno-importado-premium-9087423.jpg?v=1761163581",
            badges: ["Premium", "Extra Tierno"],
            details: ["Corte fino", "Máxima calidad", "Punto exacto"]
        },
        {
            id: 4,
            name: "Vacío Argentino",
            price: "$420",
            description: "Corte marmolado con grasa intramuscular que le da un sabor incomparable.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DehmAdc8eE7wjYQ7rr3fRcUdZ01l0TK6Sg&s",
            badges: ["Tradicional"],
            details: ["Marmolado", "Sabor intenso", "Corte grueso"]
        },
        {
            id: 5,
            name: "Entraña",
            price: "$350",
            description: "Corte fino y sabroso, ideal para quienes buscan intensidad de sabor.",
            image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Especialidad"],
            details: ["Corte fino", "Sabor intenso", "Cocción rápida"]
        },
        {
            id: 6,
            name: "Matambre a la Parrilla",
            price: "$320",
            description: "Corte delgado relleno o a la pizza, una delicia argentina.",
            image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Relleno"],
            details: ["Corte delgado", "Versátil", "Tradicional"]
        }
    ],
    hamburguesas: [
        {
            id: 7,
            name: "La Parrilla Clásica",
            price: "$180",
            description: "Carne 100% res, queso cheddar, lechuga, tomate y salsa especial.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Recomendada"],
            details: ["Carne res", "Queso cheddar", "Salsa casa"]
        },
        {
            id: 8,
            name: "BBQ Bacon",
            price: "$220",
            description: "Doble carne, bacon crocante, cebolla caramelizada y salsa BBQ.",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbWJ1cmd1ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Doble Carne"],
            details: ["Bacon", "BBQ", "Cebolla caramelizada"]
        },
        {
            id: 9,
            name: "Parrillera Especial",
            price: "$250",
            description: "Triple carne, huevo, jamón, queso y todas las salsas de la casa.",
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbWJ1cmd1ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Triple", "Especial"],
            details: ["Triple carne", "Huevo", "Jamón"]
        }
    ],
    guarniciones: [
        {
            id: 10,
            name: "Papas Fritas Clásicas",
            price: "$80",
            description: "Papas golden fritas en aceite de girasol, crujientes por fuera.",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Clásica"],
            details: ["Golden", "Crujientes", "Porción grande"]
        },
        {
            id: 11,
            name: "Papas Bravas",
            price: "$120",
            description: "Papas fritas con salsa brava picante y alioli casero.",
            image: "https://content-cocina.lecturas.com/medio/2025/02/12/papas-bravas-mexicanas1-308927562_9f01a292_250212105238_1200x1200.webp",
            badges: ["Picante"],
            details: ["Salsa brava", "Alioli", "Especiadas"]
        },
        {
            id: 12,
            name: "Ensalada César",
            price: "$120",
            description: "Lechuga romana, crutones, queso parmesano y aderezo césar casero.",
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Flc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Fresca"],
            details: ["Romana", "Parmesano", "Aderezo casa"]
        },
        {
            id: 13,
            name: "Puré de Papas",
            price: "$90",
            description: "Puré cremoso de papas con mantequilla y nuez moscada.",
            image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzaGVkJTIwcG90YXRvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Cremoso"],
            details: ["Casero", "Mantequilla", "Nuez moscada"]
        }
    ],
    bebidas: [
        {
            id: 14,
            name: "Vino Malbec Reserve",
            price: "$280",
            description: "Malbec argentino de bodega premium, cosecha 2020.",
            image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Premium"],
            details: ["Malbec", "Cosecha 2020", "750ml"]
        },
        {
            id: 15,
            name: "Cerveza Artesanal",
            price: "$90",
            description: "Selección de cervezas artesanales locales, IPA y Honey.",
            image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Artesanal"],
            details: ["IPA", "Honey", "500ml"]
        },
        {
            id: 16,
            name: "Refrescos",
            price: "$40",
            description: "Coca-Cola, Sprite, Fanta, Agua Mineral y Jugos Naturales.",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Variedad"],
            details: ["500ml", "Fría", "Con hielo"]
        },
        {
            id: 17,
            name: "Agua Fresca",
            price: "$35",
            description: "Jamaica, Horchata o Limón, preparadas al momento.",
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFndWElMjBmcmVzY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Natural"],
            details: ["Jamaica", "Horchata", "Limón"]
        }
    ],
    postres: [
        {
            id: 18,
            name: "Volcán de Chocolate",
            price: "$150",
            description: "Bizcocho de chocolate con corazón líquido, acompañado de helado.",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Especialidad"],
            details: ["Chocolate", "Corazón líquido", "Helado"]
        },
        {
            id: 19,
            name: "Flan Casero",
            price: "$100",
            description: "Flan tradicional con caramelo y crema batida.",
            image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Tradicional"],
            details: ["Casero", "Caramelo", "Crema batida"]
        },
        {
            id: 20,
            name: "Cheesecake de Frutos Rojos",
            price: "$130",
            description: "Tarta de queso cremosa con coulis de frutos rojos.",
            image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
            badges: ["Cremoso"],
            details: ["Queso", "Frutos rojos", "Base galleta"]
        }
    ]
};

// Elementos del DOM
const menuItemsContainer = document.getElementById('menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');
const categoriesNav = document.querySelector('.menu-categories');

// Variables para control de scroll
let lastScrollTop = 0;
let scrollTimeout;

// Función para generar los items del menú
function generateMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    const items = menuData[category];
    
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
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
                <button class="order-btn" onclick="addToOrder(${item.id})" aria-label="Agregar ${item.name} al pedido">
                    <i class="fas fa-shopping-cart"></i>
                    Agregar al Pedido
                </button>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItem);
        
        // Animación de aparición
        setTimeout(() => {
            menuItem.classList.add('visible');
        }, index * 100);
    });
}

// Función para cambiar categoría
function changeCategory(category, button) {
    // Remover clase active de todos los botones
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir clase active al botón clickeado
    button.classList.add('active');
    
    // Generar items de la categoría seleccionada
    generateMenuItems(category);
    
    // Mostrar categorías después de cambiar
    showCategories();
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
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
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
                    font-size: 14px;
                }
                .notification-price {
                    margin-left: auto;
                    font-weight: bold;
                }
            `;
            document.head.appendChild(styles);
        }
    }
}

// Función para mostrar categorías
function showCategories() {
    categoriesNav.classList.remove('hidden');
}

// Función para ocultar categorías
function hideCategories() {
    categoriesNav.classList.add('hidden');
}

// Función para manejar el scroll
function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Limpiar timeout anterior
    clearTimeout(scrollTimeout);
    
    // Si se está haciendo scroll hacia abajo y no está en la parte superior
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        hideCategories();
    } 
    // Si se está haciendo scroll hacia arriba
    else if (currentScroll < lastScrollTop) {
        showCategories();
    }
    
    // Actualizar última posición de scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    
    // Mostrar categorías después de dejar de hacer scroll
    scrollTimeout = setTimeout(() => {
        if (currentScroll <= 50) {
            showCategories();
        }
    }, 150);
}

// Función para inicializar el menú
function initMenu() {
    // Generar categoría inicial (cortes)
    generateMenuItems('cortes');
    
    // Agregar event listeners a los botones de categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const category = this.getAttribute('data-category');
            changeCategory(category, this);
        });
        
        // Mejorar accesibilidad táctil
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Mejorar interacción táctil para botones de orden
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    
    // Evento de scroll para mostrar/ocultar categorías
    window.addEventListener('scroll', handleScroll);
    
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
        margin-top: 10px;
        opacity: 0.7;
        font-size: 12px;
        padding: 0 10px;
    `;
    
    const footer = document.querySelector('.restaurant-footer .container');
    footer.appendChild(timeElement);
    
    // Actualizar cada minuto
    setInterval(() => {
        const newTime = new Date();
        timeElement.textContent = `🕒 Hora actual: ${newTime.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        })}`;
    }, 60000);
}

// Función para buscar items en el menú (opcional - para futuras mejoras)
function searchMenu(query) {
    const results = [];
    for (const category in menuData) {
        menuData[category].forEach(item => {
            if (item.name.toLowerCase().includes(query.toLowerCase()) || 
                item.description.toLowerCase().includes(query.toLowerCase())) {
                results.push(item);
            }
        });
    }
    return results;
}

// Manejar cambios de orientación en móviles
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Exportar funciones para uso global
window.addToOrder = addToOrder;
window.searchMenu = searchMenu;