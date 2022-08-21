function modal() {
    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]'),
          modalWindow = document.querySelector('.modal');
    
    function openModal() {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';    
        clearTimeout(timerInterval);
    }
    const timerInterval = setTimeout(openModal, 5000);
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    function closeModal() {
        modalWindow.style.display = 'none';
        document.body.style.overflow = ''; 
    }
    modalClose.addEventListener('click', closeModal);
    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.style.display === 'block') {
            closeModal();
        }
    });
    
    function showModal() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            removeEventListener('scroll', showModal);
        }
    }
    window.addEventListener('scroll', showModal);
}
export default modal;