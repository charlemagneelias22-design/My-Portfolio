// Handles Canva, MS Word, and MS Excel clicks
        function highlightCreatives() {
            const canvaCard = document.getElementById('canva-project-card');
            const wordCard = document.getElementById('word-project-card');
            const excelCard = document.getElementById('excel-project-card');
            
            if(canvaCard) canvaCard.classList.remove('flash-glow');
            if(wordCard) wordCard.classList.remove('flash-glow');
            if(excelCard) excelCard.classList.remove('flash-glow');
            
            setTimeout(() => {
                if(canvaCard) canvaCard.classList.add('flash-glow');
                if(wordCard) wordCard.classList.add('flash-glow');
                if(excelCard) excelCard.classList.add('flash-glow');
            }, 100);
        }
        ocument.addEventListener('DOMContentLoaded', () => {
        // Select all anchor links in your header navbar
        const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault(); // Stop the default browser top-jumping behavior
                    
                    // Smoothly scroll the exact center of the section to the center of the viewport
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // Update the URL browser bar cleanly without making the page jump
                    history.pushState(null, null, `#${targetId}`);
                }
            });
        });
    });