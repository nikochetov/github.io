const btn = document.querySelectorAll('.item_btn'),
      modal = document.querySelector('.modal');  

btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        btn[i] = switchModal();
    })
})

const switchModal = () => {
    const btn = document.createElement('button');        
    modal.style.display = 'block';
    btn.textContent = 'Закрыть';
    modal.appendChild(btn);
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
        btn.remove();
    })
}