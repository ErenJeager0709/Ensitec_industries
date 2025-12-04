// Datos del menú (puedes reemplazarlos con una API o JSON)
const menuData = {
    bebidas: [
        {
            name: "Café Espresso",
            price: "$2.50",
            description: "Café negro intenso.",
            image: "https://via.placeholder.com/300x200?text=Café+Espresso"
        },
        {
            name: "Jugo Natural",
            price: "$3.00",
            description: "Jugo de naranja recién exprimido.",
            image: "https://via.placeholder.com/300x200?text=Jugo+Natural"
        }
    ],
    entradas: [
        {
            name: "Bruschetta",
            price: "$5.00",
            description: "Pan tostado con tomate y albahaca.",
            image: "https://via.placeholder.com/300x200?text=Bruschetta"
        }
    ],
    // ... Agrega más categorías y items
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
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
                <p class="description">${item.description}</p>
            </div>
        `;
    });
}

// Cargar primera categoría al inicio
loadMenuItems("bebidas");