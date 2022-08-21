function cards() {
    //Cards

    class MenuCards {
        constructor(src, alt, title, descr, price, parent, ...classes)  {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.course = 27;
            this.parent = document.querySelector(parent);
            this.classes = classes;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.course;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(everyClass => element.classList.add(everyClass));
            }
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element);
        }
        
    }
    new MenuCards (
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню 'Фитнес'",
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        '.menu__field .container'
    ).render();
    new MenuCards (
        "img/tabs/elite.jpg",      
        "elite",
        "Меню 'Премиум'",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        15,
        '.menu__field .container'
    ).render();
    new MenuCards (
        "img/tabs/post.jpg",
        "post",
        "Меню 'Постное'",
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        20,
        '.menu__field .container'
    ).render();

}
export default cards;