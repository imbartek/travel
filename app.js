const items = document.querySelectorAll('.gallery__item');
const shadows = document.querySelectorAll('.shadowContainer')

const prevColor = 'rgba(0, 0, 0, 0.596)';
const newColor = '#ba402db7';

items.forEach( item => {
    item.addEventListener('mouseover', () =>{
        item.children[0].style.backgroundColor = newColor;
    })
    item.addEventListener('mouseout', () =>{
        item.children[0].style.backgroundColor = prevColor;
    })
})
