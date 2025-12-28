/* --------------------------------------------------
   Simple state machine: only one info box open at a time.
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const btnStudio = document.getElementById('btn-studio');
    const btnGallery = document.getElementById('btn-gallery');
    const infoBox   = document.getElementById('info-box');
    const infoText  = document.getElementById('info-content');

    let current = null; // 'studio' | 'gallery' | null

    function openInfo(type, content) {
        if (current === type) return;
        closeInfo(); // close previous
        infoText.textContent = content;
        infoBox.classList.remove('hidden');
        current = type;
    }

    function closeInfo() { 
        infoBox.classList.add('hidden'); 
        current = null; 
    }

    btnStudio.addEventListener('click', () => {
        openInfo('studio',
            'STUDIO content goes here. Replace this text later.'
        );
    });

    btnGallery.addEventListener('click', () => {
        openInfo('gallery',
            'GALLERY content goes here. Images will be added later.'
        );
    });

    // clicking anywhere closes the box
    infoBox.addEventListener('click', closeInfo);
});
