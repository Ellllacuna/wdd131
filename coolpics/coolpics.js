document.querySelector('.menu').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('hide');
})

function handleResize () {
    const nav = document.querySelector('nav');
    if (window.innerWidth > 1000) {
        nav.classList.remove('hide');
    }
    else {
        nav.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);

const gallery = document.querySelector('.gallery');
const modalImage = document.querySelector('#modal-img');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#close-viewer');

function showImage(event) {
    const clickedImage = event.target.closest('img');

    if (!clickedImage) return;

    const src = clickedImage.getAttribute('src');
    const alt = clickedImage.getAttribute('alt');

    const fullSrc = src.split('-')[0] + '-full.jpeg';

    modalImage.setAttribute('src', fullSrc);
    modalImage.setAttribute('alt', alt);

    modal.showModal();
}

gallery.addEventListener('click', showImage);

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})