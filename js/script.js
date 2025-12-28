// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const studioBtn   = document.getElementById('studioBtn');
    const galleryBtn  = document.getElementById('galleryBtn');
    const infoBox     = document.getElementById('infoBox');
    const infoText    = document.getElementById('infoText');
    const gallerySec  = document.getElementById('gallerySection');

    // Dummy content – replace later
    const studioInfo   = 'Welcome to the Studio. Here we create art!';
    const galleryTitle = 'Gallery coming soon…';

    // Helper: close all overlays
    function closeAll() {
        infoBox.classList.add('hidden');
        gallerySec.classList.add('hidden');
    }

    // Toggle Info Box
    studioBtn.onclick = () => {
        if (!infoBox.classList.contains('hidden')) { /* already open */
            return;
        }
        closeAll();
        infoText.textContent = studioInfo;
        infoBox.classList.remove('hidden');
    };

    galleryBtn.onclick = () => {
        if (!gallerySec.classList.contains('hidden')) {
            return;
        }
        closeAll();
        // For now just show a title – replace with real images later
        gallerySec.innerHTML = `<h2>${galleryTitle}</h2>`;
        gallerySec.classList.remove('hidden');
    };

    // Close overlay when clicking anywhere outside the button
    document.body.addEventListener('click', (e) => {
        if (!infoBox.contains(e.target) && !studioBtn.contains(e.target)) {
            infoBox.classList.add('hidden');
        }
        if (!gallerySec.contains(e.target) && !galleryBtn.contains(e.target)) {
            gallerySec.classList.add('hidden');
        }
    });

});
