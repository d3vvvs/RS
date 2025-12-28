/* ------------------------------------------------------------------
   Toggle info boxes on button click
-------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');
    const boxes = {
        studio: document.getElementById('box-studio'),
        gallery: document.getElementById('box-gallery')
    };

    // Dummy content – replace later
    boxes.studio.innerHTML = `<h2>Studio Information</h2><p>This is where you will add your text.</p>`;
    boxes.gallery.innerHTML = `
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <!-- Add images here -->
        <img src="Assets/placeholder1.jpg" alt="Image 1">
        <img src="Assets/placeholder2.jpg" alt="Image 2">
      </div>
    `;

    // Helper to close all boxes
    const hideAll = () => Object.values(boxes).forEach(b => b.style.display = 'none');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            const target = e.currentTarget.dataset.target;
            const box   = boxes[target];

            // If the clicked box is already open, close it
            if (box.style.display === 'block') {
                hideAll();
                return;
            }

            hideAll();               // close any other open box
            box.style.display = 'block';
        });
    });

    /* ------------------------------------------------------------------
       Close box when clicking anywhere outside of it
    -------------------------------------------------------------------*/
    document.addEventListener('click', e => {
        const isInsideBox = Object.values(boxes).some(b => b.contains(e.target));
        if (!isInsideBox && !e.target.classList.contains('menu-btn')) {
            hideAll();
        }
    });
});
