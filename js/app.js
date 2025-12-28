/* ----------------------------------------------------
   Helper: close any open info box
---------------------------------------------------- */
function closeInfoBox() {
  const box = document.getElementById('info-box');
  box.classList.remove('open');
  box.innerHTML = '';          // clear previous content
}

/* ----------------------------------------------------
   Open a new info box with placeholder text
---------------------------------------------------- */
function openInfoBox(content) {
  const box = document.getElementById('info-box');
  box.innerHTML = `<p>${content}</p>`;
  box.classList.add('open');
}

/* ----------------------------------------------------
   Event listeners for menu buttons
---------------------------------------------------- */
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.currentTarget.dataset.target;

    // If the same button is clicked again, toggle off
    if (e.currentTarget.classList.contains('active')) {
      closeInfoBox();
      e.currentTarget.classList.remove('active');
      return;
    }

    // Close any open box first
    closeInfoBox();

    // Mark this button active & open its content
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');

    const placeholder = target === 'studio'
      ? '<strong>Studio</strong><br>More details coming soon.'
      : '<strong>Gallery</strong><br>Image gallery will appear here.';

    openInfoBox(placeholder);
  });
});

/* ----------------------------------------------------
   Close the info box when clicking anywhere else
---------------------------------------------------- */
document.getElementById('info-box').addEventListener('click', () => {
  closeInfoBox();
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
});
