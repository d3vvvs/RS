/* ---------- Toggle Info Boxes ---------- */
const buttons = document.querySelectorAll('.navBtn');
let currentBox = null;

buttons.forEach(btn=>{
  btn.addEventListener('click', e=>{
    const targetId = btn.dataset.target;
    const box = document.querySelector(targetId);

    // close currently open box
    if(currentBox && currentBox !== box){
      currentBox.style.display='none';
    }

    // toggle the clicked one
    if(box.style.display==='block'){
        box.style.display='none';
        currentBox=null;
    }else{
        box.style.display='block';
        currentBox=box;
    }
  });
});

/* ---------- Close when clicking outside ---------- */
document.addEventListener('click', e=>{
  // ignore clicks on nav buttons
  if(e.target.classList.contains('navBtn')) return;

  // if an info box is open, close it
  if(currentBox){
    currentBox.style.display='none';
    currentBox=null;
  }
});
