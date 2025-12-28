document.addEventListener('DOMContentLoaded', () => {
    const studioBtn = document.getElementById('studio-btn');
    const galleryBtn = document.getElementById('gallery-btn');
    const infoBox = document.getElementById('info-box');

    [studioBtn, galleryBtn].forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!infoBox.classList.contains('hidden')) {
                infoBox.classList.add('hidden');
            }
            setTimeout(() => {
                infoBox.textContent = e.target.id === 'studio-btn' ? 'Studio Info Here...' : 'Gallery Info Here...';
                infoBox.classList.remove('hidden');
            }, 300);
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-bar')) {
            infoBox.classList.add('hidden');
        }
    });
});
