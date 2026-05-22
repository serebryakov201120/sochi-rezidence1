// Простая обработка формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Останавливаем перезагрузку страницы
    
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Отправляем...';
    button.disabled = true;
    
    // Имитация отправки
    setTimeout(() => {
        alert('✅ Заявка успешно отправлена! 🎉\n\nВ реальной работе здесь будет отправка на Telegram или email.');
        
        // Очищаем форму
        this.reset();
        
        // Возвращаем кнопку
        button.textContent = originalText;
        button.disabled = false;
    }, 1200);
});