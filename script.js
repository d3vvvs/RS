
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const studioBtn = document.getElementById('studio-btn');
    const galleryBtn = document.getElementById('gallery-btn');
    const studioInfoBox = document.getElementById('studio-info-box');
    const galleryInfoBox = document.getElementById('gallery-info-box');

    function closeInfoBoxes() {
        studioInfoBox.style.display = 'none';
        galleryInfoBox.style.display = 'none';
    }

    studioBtn.addEventListener('click', () => {
        closeInfoBoxes();
        studioInfoBox.classList.add('active');
    });

    galleryBtn.addEventListener('click', () => {
        closeInfoBoxes();
        galleryInfoBox.classList.add('active');
    });

    document.addEventListener('click', (event) => {
        if (!studioInfoBox.contains(event.target) && 
!galleryInfoBox.contains(event.target)) {
            studioInfoBox.style.display = 'none';
            galleryInfoBox.style.display = 'none';
        }
    });
});
```
