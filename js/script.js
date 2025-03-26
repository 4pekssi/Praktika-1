
// код для слайдер-карусели

const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        setInterval(nextSlide, 5000);


        // код для обработки клика по кнопке гамбургера 

        document.querySelector('.gamb-ico').addEventListener('click', function() {
            document.body.classList.toggle('no-scroll');
            const menu = document.querySelector('.right-side-header-ul-li');
            if (menu.style.display === 'flex') {
                menu.style.display = '';
            } else {
                menu.style.display = 'flex';
            }
            menu.classList.toggle('active');
        });
        