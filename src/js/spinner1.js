
window.addEventListener('load', () => {
    refs.mask.classList.add('hide');
    setTimeout(() => {
        refs.mask.remove();
    }, 600);
});