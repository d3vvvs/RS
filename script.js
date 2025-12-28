// Get references to DOM elements
const studioBtn = document.querySelector('.studio-btn');
const galleryBtn = document.querySelector('.gallery-btn');
const infoBox = document.getElementById('info-box');

// Function to show the info box with content for STUDIO
function showStudioInfo() {
    // Close any currently open info box
    closeInfoBox();

    // Create and append content for Studio button
    const studioContent = `
        <div class="info-box-content">
            <h2>STUDIO</h2>
            <p>This is the information about your STUDIO. You can add more details here.</p>
            <!-- Gallery section for STUDIO images -->
            <div class="gallery-section">
                <img src="Assets/studio-image1.jpg" alt="Studio Image 1" />
                <img src="Assets/studio-image2.jpg" alt="Studio Image 2" />
                <img src="Assets/studio-image3.jpg" alt="Studio Image 3" />
            </div>
        </div>
    `;
    
    infoBox.innerHTML = studioContent;
    infoBox.style.display = 'block';
}

// Function to show the info box with content for GALLERY
function showGalleryInfo() {
    // Close any currently open info box
    closeInfoBox();

    // Create and append content for Gallery button
    const galleryContent = `
        <div class="info-box-content">
            <h2>GALLERY</h2>
            <p>This is the information about your GALLERY. You can add more details here.</p>
            <!-- Gallery section for GALLERY images -->
            <div class="gallery-section">
                <img src="Assets/gallery-image1.jpg" alt="Gallery Image 1" />
                <img src="Assets/gallery-image2.jpg" alt="Gallery Image 2" />
                <img src="Assets/gallery-image3.jpg" alt="Gallery Image 3" />
            </div>
        </div>
    `;
    
    infoBox.innerHTML = galleryContent;
    infoBox.style.display = 'block';
}

// Function to close the info box
function closeInfoBox() {
    // Clear content and hide the box
    infoBox.innerHTML = '';
    infoBox.style.display = 'none';
}

// Add click event listeners for buttons
studioBtn.addEventListener('click', showStudioInfo);
galleryBtn.addEventListener('click', showGalleryInfo);

// Add click event listener to the info box itself to close it when clicked anywhere inside
infoBox.addEventListener('click', function(event) {
    // Check if the click target is not a button or link, then close the box
    if (!event.target.closest('.studio-btn') && !event.target.closest('.gallery-btn')) {
        closeInfoBox();
    }
});
