function tabs() {
    //Tabs
    
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabsContent();
    showTabsContent();
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item === target) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}
export default tabs;