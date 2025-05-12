/**
 * ANIMACIONES PROFESIONALES PARA PANADERÍA DELICIA
 * Efectos aplicados a todas las páginas (index, productos, carrito, checkout)
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===================== EFECTOS GENERALES =====================
    // 1. Animación de carga suave al entrar a la página
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 2. Efecto "scroll reveal" para secciones
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                el.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar

    // 3. Efecto hover para tarjetas de producto (3D tilt)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
            card.style.transition = 'all 0.5s ease';
        });
    });

    // ===================== EFECTOS ESPECÍFICOS =====================
    // 4. Animación para el botón de WhatsApp (pulso constante)
    const whatsappBtn = document.querySelector('.whatsapp-fixed');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 500);
        }, 2000);
    }

    // 5. Efecto "glow" para precios
    const prices = document.querySelectorAll('.card-text');
    prices.forEach(price => {
        price.addEventListener('mouseover', () => {
            price.style.textShadow = '0 0 8px rgba(212, 167, 106, 0.8)';
            price.style.transition = 'text-shadow 0.3s ease';
        });
        price.addEventListener('mouseout', () => {
            price.style.textShadow = 'none';
        });
    });

    // 6. Parallax effect para el hero section
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            hero.style.backgroundPositionY = `${scrollValue * 0.5}px`;
        });
    }

    // 7. Animación para íconos de redes sociales (rotate on hover)
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(15deg) scale(1.2)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });
});