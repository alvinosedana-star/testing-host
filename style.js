/* ========================================
   VALENTINE THEME JAVASCRIPT
   Interactive & Beautiful Effects
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       FLOATING HEARTS ON CLICK
       ======================================== */
    const heartElements = document.querySelectorAll('.heart');
    
    heartElements.forEach(heart => {
        heart.addEventListener('click', function(e) {
            createFloatingHeart(e.clientX, e.clientY);
            showLoveMessage();
        });
    });

    /* ========================================
       CAT SVG INTERACTIONS
       ======================================== */
    const catSvg = document.querySelector('.cat-svg');
    
    if (catSvg) {
        catSvg.addEventListener('click', function() {
            // Change cat color temporarily
            const originalColor = catSvg.querySelector('ellipse').getAttribute('fill');
            const circles = catSvg.querySelectorAll('circle, ellipse, polygon');
            
            circles.forEach(element => {
                element.setAttribute('fill', '#FF69B4');
            });
            
            setTimeout(() => {
                circles.forEach(element => {
                    element.setAttribute('fill', originalColor || '#FFA500');
                });
            }, 500);
            
            // Show romantic message
            showSweetMessage('Kucing ini bucin sama kamu juga! 😻💕');
        });
    }

    /* ========================================
       CREATE FLOATING HEART FUNCTION
       ======================================== */
    function createFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = getRandomHeart();
        heart.className = 'floating-heart';
        heart.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: 2em;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 2s ease-out forwards;
            color: #e91e63;
        `;
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    /* ========================================
       GET RANDOM HEART EMOJI
       ======================================== */
    function getRandomHeart() {
        const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘', '💝'];
        return hearts[Math.floor(Math.random() * hearts.length)];
    }

    /* ========================================
       SHOW LOVE MESSAGE
       ======================================== */
    function showLoveMessage() {
        const messages = [
            'Aku sayang kamu! 💕',
            'Love you! 💖',
            'Kamu yang terbaik! 💗',
            'Forever yours! 💓',
            'My heart is yours! 💞'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create message bubble
        const bubble = document.createElement('div');
        bubble.innerHTML = randomMessage;
        bubble.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 20px 40px;
            border-radius: 20px;
            font-family: 'Dancing Script', cursive;
            font-size: 1.5em;
            color: #e91e63;
            box-shadow: 0 10px 40px rgba(233, 30, 99, 0.4);
            z-index: 1000;
            animation: popIn 0.5s ease-out, fadeOut 1s ease-out 2s forwards;
            pointer-events: none;
        `;
        
        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 3000);
    }

    /* ========================================
       SHOW SWEET MESSAGE
       ======================================== */
    function showSweetMessage(message) {
        // Create custom alert with sweet styling
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease-out;
        `;
        
        const alertBox = document.createElement('div');
        alertBox.innerHTML = `
            <div style="
                background: white;
                padding: 30px 50px;
                border-radius: 20px;
                text-align: center;
                font-family: 'Poppins', sans-serif;
                box-shadow: 0 20px 60px rgba(233, 30, 99, 0.4);
            ">
                <div style="font-size: 3em; margin-bottom: 10px;">💕</div>
                <div style="font-size: 1.3em; color: #e91e63; margin-bottom: 20px;">${message}</div>
                <button onclick="this.closest('[style*=\'z-index: 2000\']').remove()" 
                    style="
                        background: linear-gradient(135deg, #e91e63, #ff4081);
                        color: white;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 25px;
                        font-size: 1em;
                        cursor: pointer;
                        transition: transform 0.3s;
                    "onmouseover="this.style.transform='scale(1.05)'" 
                    onmouseout="this.style.transform='scale(1)'">
                    Sayang 💖
                </button>
            </div>
        `;
        
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay);
        
        // Close on click outside
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    /* ========================================
       BUTTON INTERACTIONS
       ======================================== */
    const button = document.querySelector('.button');
    
    if (button) {
        button.addEventListener('click', function() {
            // Create celebration effect
            createCelebration();
            
            // Show special message
            setTimeout(() => {
                showSweetMessage('Aku juga sayang kamu! 💕🤍');
            }, 500);
        });
    }

    /* ========================================
       CREATE CELEBRATION EFFECT
       ======================================== */
    function createCelebration() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createParticle(x, y);
            }, i * 50);
        }
    }

    /* ========================================
       CREATE PARTICLE FUNCTION
       ======================================== */
    function createParticle(x, y) {
        const particle = document.createElement('div');
        const emojis = ['❤️', '💕', '💖', '💗', '💓', '✨', '🌸', '💘'];
        
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: ${Math.random() * 2 + 1}em;
            pointer-events: none;
            z-index: 1000;
            animation: particleFall ${Math.random() * 2 + 1}s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    /* ========================================
       ADD CSS ANIMATIONS DYNAMICALLY
       ======================================== */
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(1.5);
            }
        }
        
        @keyframes popIn {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }
            70% {
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes particleFall {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(100px) rotate(360deg);
            }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
    `;
    
    document.head.appendChild(style);

    /* ========================================
       BACKGROUND HEARTS AUTOMATIC
       ======================================== */
    function addBackgroundHeart() {
        const heartsBg = document.querySelector('.hearts-bg');
        if (heartsBg) {
            const heart = document.createElement('div');
            heart.className = 'heart-bg';
            heart.innerHTML = getRandomHeart();
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsBg.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
    }
    
    // Add new heart every 3 seconds
    setInterval(addBackgroundHeart, 3000);

    /* ========================================
       MESSAGE HOVER EFFECT
       ======================================== */
    const message = document.querySelector('.message');
    if (message) {
        message.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        message.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    /* ========================================
       AUDIO PLAYER ENHANCEMENT
       ======================================== */
    const audio = document.querySelector('audio');
    if (audio) {
        audio.addEventListener('play', function() {
            console.log('Playing romantic music 💕');
        });
        
        audio.addEventListener('ended', function() {
            // Loop is already set in HTML, but just in case
            this.play();
        });
    }

    /* ========================================
       SCROLL EFFECTS
       ======================================== */
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            // Add subtle parallax or other effects
            document.querySelector('.container').style.transform = 
                `translateY(${currentScroll * 0.05}px)`;
        }
        
        lastScroll = currentScroll;
    });

    /* ========================================
       KEYBOARD EFFECTS (Easter Egg)
       ======================================== */
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            createCelebration();
            showSweetMessage('Tekan Enter untuk cinta! 💕');
        }
    });

    /* ========================================
       INITIAL WELCOME EFFECT
       ======================================== */
    setTimeout(() => {
        // Subtle welcome effect on page load
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '0';
            container.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                container.style.opacity = '1';
            }, 100);
        }
    }, 500);

    console.log('💕 Valentine Theme JavaScript Loaded 💕');
    console.log('Made with love for you! ❤️');
});
