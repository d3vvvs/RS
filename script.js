/* ----------------------------------------------------------
   Simple panel toggle logic
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  let activePanel = null;

  // Close any open panel when clicking outside it
  document.body.addEventListener('click', e => {
    if (activePanel && !e.target.closest('.panel')) {
      hidePanel(activePanel);
    }
  });

  // Button click handler
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const panel   = document.getElementById(targetId);

      if (panel === activePanel) {            // toggle off
        hidePanel(panel);
        activePanel = null;
      } else {
        if (activePanel) hidePanel(activePanel);  // close previous
        showPanel(panel);
        activePanel = panel;
      }
    });
  });

  function showPanel(el) { el.classList.remove('hidden'); }
  function hidePanel(el) { el.classList.add('hidden');   }
});
