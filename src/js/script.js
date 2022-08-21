import tabs from'./modules/tabs';
import timer from'./modules/timer';
import modal from'./modules/modal';
import cards from'./modules/cards';
import calc from'./modules/calc';
window.addEventListener('DOMContentLoaded', () => {
    tabs();
    timer('2022-08-18');
    modal();
    cards();
    calc();
});

