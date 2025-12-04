// Funcionalidades comunes para todas las páginas

document.addEventListener('DOMContentLoaded', function() {
    // ===== MENÚ TOGGLE PARA MÓVILES =====
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // ===== FILTROS DE GALERÍA (solo para index.html) =====
    const filterButtons = document.getElementById('filterButtons');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons && galleryItems.length > 0) {
        // Ocultar botones de filtro al hacer scroll hacia abajo
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll hacia abajo
                filterButtons.style.transform = 'translateY(-100%)';
            } else {
                // Scroll hacia arriba
                filterButtons.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
        
        // Funcionalidad de filtrado
        filterButtons.addEventListener('click', function(e) {
            if (e.target.classList.contains('filter-btn')) {
                // Quitar clase active de todos los botones
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Añadir clase active al botón clickeado
                e.target.classList.add('active');
                
                const filterValue = e.target.getAttribute('data-filter');
                
                // Filtrar elementos de la galería
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    }
    
    // ===== CATEGORÍAS STICKY DEL MENÚ (solo para menu.html) =====
    const menuCategories = document.getElementById('menuCategories');
    
    if (menuCategories) {
        // Ocultar categorías al hacer scroll hacia abajo
        let lastScrollTopMenu = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTopMenu && scrollTop > 100) {
                // Scroll hacia abajo
                menuCategories.style.transform = 'translateY(-100%)';
            } else {
                // Scroll hacia arriba
                menuCategories.style.transform = 'translateY(0)';
            }
            
            lastScrollTopMenu = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
        
        // Navegación suave entre categorías
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuSections = document.querySelectorAll('.menu-section');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Quitar clase active de todos los botones
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                // Obtener el destino del enlace
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                // Desplazamiento suave al destino
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Actualizar categoría activa al hacer scroll
        function updateActiveCategoryOnScroll() {
            let currentSection = '';
            
            menuSections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                if (window.scrollY >= (sectionTop - headerHeight - 100) && 
                    window.scrollY < (sectionTop + sectionHeight - headerHeight - 100)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            // Actualizar botón activo
            categoryButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('href') === `#${currentSection}`) {
                    button.classList.add('active');
                }
            });
        }
        
        // Llamar a la función al cargar y al hacer scroll
        updateActiveCategoryOnScroll();
        window.addEventListener('scroll', updateActiveCategoryOnScroll, { passive: true });
    }
    
    // ===== BOTÓN VOLVER ARRIBA =====
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Mostrar/ocultar botón al hacer scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });
        
        // Desplazamiento suave al hacer clic
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== SISTEMA DE PEDIDOS PARA MENÚ =====
    const orderButtons = document.querySelectorAll('.order-btn');
    const orderModal = document.getElementById('orderModal');
    const modalClose = document.getElementById('modalClose');
    const cancelOrderBtn = document.getElementById('cancelOrder');
    const confirmOrderBtn = document.getElementById('confirmOrder');
    const selectedItemElement = document.getElementById('selectedItem');
    const quantityInput = document.getElementById('quantity');
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const orderTotalElement = document.getElementById('orderTotal');
    
    if (orderModal) {
        // Variables para el pedido actual
        let currentItem = '';
        let currentPrice = 0;
        
        // Abrir modal al hacer clic en botón de pedido
        orderButtons.forEach(button => {
            button.addEventListener('click', function() {
                currentItem = this.getAttribute('data-item');
                
                // Obtener precio del elemento (simulado)
                const priceMatch = this.closest('.menu-item').querySelector('.menu-item-price').textContent;
                currentPrice = parseFloat(priceMatch.replace('€', '').replace(',', '.'));
                
                // Actualizar modal con la información del producto
                selectedItemElement.textContent = currentItem;
                quantityInput.value = 1;
                updateOrderTotal();
                
                // Mostrar modal
                orderModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Cerrar modal
        function closeModal() {
            orderModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (cancelOrderBtn) cancelOrderBtn.addEventListener('click', closeModal);
        
        // Cerrar modal al hacer clic fuera del contenido
        orderModal.addEventListener('click', function(e) {
            if (e.target === orderModal) {
                closeModal();
            }
        });
        
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && orderModal.classList.contains('active')) {
                closeModal();
            }
        });
        
        // Control de cantidad
        if (decreaseQtyBtn) {
            decreaseQtyBtn.addEventListener('click', function() {
                if (quantityInput.value > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                    updateOrderTotal();
                }
            });
        }
        
        if (increaseQtyBtn) {
            increaseQtyBtn.addEventListener('click', function() {
                if (quantityInput.value < 10) {
                    quantityInput.value = parseInt(quantityInput.value) + 1;
                    updateOrderTotal();
                }
            });
        }
        
        // Actualizar total al cambiar cantidad manualmente
        if (quantityInput) {
            quantityInput.addEventListener('change', function() {
                let value = parseInt(this.value);
                if (value < 1) this.value = 1;
                if (value > 10) this.value = 10;
                updateOrderTotal();
            });
        }
        
        // Función para actualizar el total del pedido
        function updateOrderTotal() {
            const quantity = parseInt(quantityInput.value);
            const total = currentPrice * quantity;
            orderTotalElement.textContent = `€${total.toFixed(2)}`;
        }
        
        // Confirmar pedido
        if (confirmOrderBtn) {
            confirmOrderBtn.addEventListener('click', function() {
                const quantity = parseInt(quantityInput.value);
                const notes = document.getElementById('notes').value;
                
                // Simular envío de pedido
                alert(`¡Pedido confirmado!\n\n${quantity}x ${currentItem}\nTotal: €${(currentPrice * quantity).toFixed(2)}\n\nNotas: ${notes || 'Ninguna'}\n\nGracias por tu pedido.`);
                
                // Cerrar modal
                closeModal();
                
                // Resetear formulario
                document.getElementById('notes').value = '';
            });
        }
    }
    
    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }
            
            // Simular envío
            alert('¡Mensaje enviado con éxito!\n\nGracias por contactarnos. Te responderemos en breve.');
            
            // Resetear formulario
            contactForm.reset();
        });
    }
    
    // ===== MEJORAR EXPERIENCIA TÁCTIL =====
    // Evitar zoom en inputs en iOS
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Mejorar feedback táctil en botones
    const touchElements = document.querySelectorAll('button, .btn, .order-btn, .filter-btn, .category-btn, .nav-link');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    });
});