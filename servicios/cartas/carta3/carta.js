 // CÓDIGO JAVASCRIPT
        document.addEventListener('DOMContentLoaded', function() {
            const card = document.getElementById('card');
            const heartsContainer = document.getElementById('hearts');
            const sendBtn = document.getElementById('sendBtn');
            
            // Función para abrir/cerrar la carta
            card.addEventListener('click', function() {
                this.classList.toggle('open');
                
                // Si la carta está abierta, crear corazones
                if (this.classList.contains('open')) {
                    createHearts();
                }
            });
            
            // Función para crear corazones flotantes
            function createHearts() {
                // Limpiar corazones existentes
                heartsContainer.innerHTML = '';
                
                // Crear nuevos corazones
                for (let i = 0; i < 15; i++) {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '<i class="fas fa-heart"></i>';
                    
                    // Posición aleatoria
                    heart.style.left = Math.random() * 100 + '%';
                    
                    // Variables CSS aleatorias para animación
                    heart.style.setProperty('--x', Math.random() * 2 - 1);
                    heart.style.setProperty('--rotation', Math.random() * 60 - 30);
                    
                    // Retraso aleatorio
                    heart.style.animationDelay = Math.random() * 5 + 's';
                    
                    heartsContainer.appendChild(heart);
                }
            }
            
            // Función para enviar la carta (simulado)
            sendBtn.addEventListener('click', function() {
                // Efecto visual al hacer clic
                this.innerHTML = '<i class="fas fa-check"></i> Carta enviada!';
                this.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
                
                // Crear efecto de confeti
                createHearts();
                
                // Restaurar después de 2 segundos
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar esta carta';
                    this.style.background = 'linear-gradient(45deg, #ff5252, #ff7eb3)';
                }, 2000);
            });
            
            // Inicializar algunos corazones al cargar la página
            createHearts();
        });