document.addEventListener('DOMContentLoaded', function() {
    // Элементы шапки
    const header = document.getElementById('main-header');
    const burgerBtn = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Бургер-меню
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Блокировка прокрутки тела при открытом меню
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие меню при клике на ссылку
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Фиксированная шапка при скролле
    let lastScroll = 0;
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Для верхней части страницы
        if (currentScroll <= 100) {
            header.style.transform = 'translateY(0)';
            return;
        }
        
        // Прокрутка вниз - скрываем шапку
        if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } 
        // Прокрутка вверх - показываем шапку
        else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Корректировка высоты для body
    document.body.style.paddingTop = headerHeight + 'px';
});