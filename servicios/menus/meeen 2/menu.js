// Datos del menú con URLs de imágenes reales
const menuData = {
    boneless: [
        {
            name: "Boneless Clásicos",
            price: "$180",
            description: "Crujientes trozos de pollo empanizado bañados en nuestra salsa especial de la casa.",
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvbmVsZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Boneless BBQ",
            price: "$190",
            description: "Deliciosos boneless bañados en salsa BBQ ahumada, acompañados de bastones de apio.",
            image: "https://images.unsplash.com/photo-1604503468725-acc20c53c5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvbmVsZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Boneless Habanero",
            price: "$200",
            description: "Para los amantes del picante, preparados con nuestra exclusiva salsa de habanero extremo.",
            image: "https://images.unsplash.com/photo-1599487488172-d11d8ddd8542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvbmVsZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Boneless Mango Habanero",
            price: "$195",
            description: "La combinación perfecta entre dulce y picante, con salsa de mango y toque de habanero.",
            image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvbmVsZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ],
    alitas: [
        {
            name: "Alitas Búfalo",
            price: "$170",
            description: "Clásicas alitas bañadas en auténtica salsa búfalo picante, servidas con aderezo ranch.",
            image: "https://images.unsplash.com/photo-1567620836588-69138bb05dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsaXRhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Alitas BBQ",
            price: "$175",
            description: "Alitas horneadas a la perfección con salsa barbacoa casera y un toque de miel.",
            image: "https://images.unsplash.com/photo-1599487488172-d11d8ddd8542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFsaXRhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Alitas Teriyaki",
            price: "$185",
            description: "Alitas glaseadas con salsa teriyaki casera y espolvoreadas con ajonjolí tostado.",
            image: "https://images.unsplash.com/photo-1626645735466-3c6d10de5f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFsaXRhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Alitas Lemon Pepper",
            price: "$180",
            description: "Alitas crujientes sazonadas con limón y pimienta, acompañadas de nuestro dip de ajo.",
            image: "https://images.unsplash.com/photo-1626645735466-3c6d10de5f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFsaXRhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ],
    hamburguesas: [
        {
            name: "Hamburguesa Clásica",
            price: "$120",
            description: "Carne de res 100% premium, queso americano, lechuga fresca, jitomate y cebolla.",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Hamburguesa BBQ",
            price: "$140",
            description: "Carne de res, queso cheddar derretido, tocino crujiente, cebolla caramelizada y salsa BBQ.",
            image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3Vlc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Hamburguesa Doble",
            price: "$160",
            description: "Doble carne, doble queso, lechuga fresca, jitomate y nuestra salsa especial.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91YmxlJTIwaGFtYnVyZ3Vlc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Hamburguesa Hawaiana",
            price: "$150",
            description: "Carne de res, queso, piña caramelizada, jamón y nuestra salsa agridulce especial.",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ],
    papas: [
        {
            name: "Papas a la Francesa",
            price: "$70",
            description: "Papas golden seleccionadas, fritas a la perfección: crujientes por fuera y suaves por dentro.",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Papas con Chili",
            price: "$90",
            description: "Papas fritas cubiertas con nuestro chili con carne especial y queso derretido.",
            image: "https://images.unsplash.com/photo-1643071287805-725a5eba2c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWxpJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Papas con Cheddar y Tocino",
            price: "$95",
            description: "Papas fritas bañadas en queso cheddar derretido y trozos de tocino crujiente.",
            image: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Papas Ranch",
            price: "$85",
            description: "Papas fritas sazonadas con nuestras especias ranch y acompañadas de aderezo ranch.",
            image: "https://images.unsplash.com/photo-1633896949678-1b4f11d6f7ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        }
    ],
    micheladas: [
        {
            name: "Michelada Clásica",
            price: "$85",
            description: "Cerveza bien fría, limón recién exprimido, salsa inglesa, salsa picante y sal en el borde.",
            image: "https://images.unsplash.com/photo-1618477388957-7b5c2f7ace5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY2hlbGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Michelada Cubana",
            price: "$110",
            description: "Cerveza, limón, diversas salsas, Worcestershire, clamato y especias secretas.",
            image: "https://images.unsplash.com/photo-1592417817030-2ed8075eef0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pY2hlbGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Michelada de Mango",
            price: "$120",
            description: "Cerveza, puré de mango natural, limón, chamoy, tajín y nuestro toque especial.",
            image: "https://images.unsplash.com/photo-1618477388957-7b5c2f7ace5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY2hlbGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Michelada Picosa",
            price: "$100",
            description: "Cerveza, limón, salsa valentina, chile de árbol en polvo y trozos de chipeotle.",
            image: "https://images.unsplash.com/photo-1592417817030-2ed8075eef0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pY2hlbGFkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ],
    bebidas: [
        {
            name: "Refrescos",
            price: "$35",
            description: "Coca-Cola, Sprite, Fanta, Dr. Pepper y más. Servidos con hielo y limón.",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Aguas Frescas",
            price: "$40",
            description: "Horchata, jamaica, limón o tamarindo. Preparadas al momento con ingredientes naturales.",
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFndWElMjBmcmVzY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Cervezas",
            price: "$55",
            description: "Variedad de cervezas nacionales e importadas. Servidas bien frías.",
            image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Café",
            price: "$45",
            description: "Americano, capuchino, expresso o latte. Preparado con granos seleccionados.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
    ]
};

// Cargar items al hacer clic en categorías
document.querySelectorAll(".category-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        // Remover clase 'active' de todos los botones
        document.querySelectorAll(".category-buttons button").forEach(btn => {
            btn.classList.remove("active");
        });
        // Añadir clase 'active' al botón clickeado
        button.classList.add("active");
        // Cargar items de la categoría seleccionada
        loadMenuItems(button.getAttribute("data-category"));
    });
});

// Función para cargar items
function loadMenuItems(category) {
    const menuItemsContainer = document.getElementById("menu-items");
    menuItemsContainer.innerHTML = "";

    menuData[category].forEach(item => {
        menuItemsContainer.innerHTML += `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <div class="price">${item.price}</div>
                    <p class="description">${item.description}</p>
                    <button class="order-btn">Ordenar ahora</button>
                </div>
            </div>
        `;
    });

    // Añadir event listeners a los botones de ordenar
    document.querySelectorAll(".order-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const itemName = this.parentElement.querySelector("h3").textContent;
            alert(`¡Has ordenado: ${itemName}! Será preparado en breve.`);
        });
    });
}

// Cargar primera categoría al inicio
document.addEventListener("DOMContentLoaded", function() {
    loadMenuItems("boneless");
});