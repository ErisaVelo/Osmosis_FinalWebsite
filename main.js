// Footer year
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple contact form (front-end only)
const contactForm = document.querySelector('#contactForm');
if (contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thank you! Your message has been noted.');
    contactForm.reset();
  });
}

// Highlight active page link + highlight "Products" when in a product subpage
(function(){
  let file = location.pathname.split('/').pop();
  if (!file) file = 'index.html';

  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
    if (a.getAttribute('data-page') === file) a.classList.add('active');
  });

  // ✅ përdor emrin që ke realisht në projektin tënd
  const productFiles = ['automotives.html','waterslides.html','ornamentals.html','various_composites.html'];
  if (productFiles.includes(file)){
    const productsBtn = document.querySelector('.drop-trigger[data-group="products"]');
    if (productsBtn) productsBtn.classList.add('active');
  }
})();

// Mobile: open/close dropdown on click, desktop still works with hover
document.querySelectorAll('.drop-trigger').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const li = btn.closest('.dropdown');
    if (!li) return; // ✅ guard në rast strukture të ndryshuar

    const isOpen = li.classList.contains('open');

    // close others
    document.querySelectorAll('.dropdown.open').forEach(d=>{
      if (d !== li) d.classList.remove('open');
    });

    li.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

// close dropdown when clicking outside
document.addEventListener('click', (e)=>{
  if (!e.target.closest('.dropdown')){
    document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
    document.querySelectorAll('.drop-trigger[aria-expanded="true"]').forEach(b=>b.setAttribute('aria-expanded','false'));
  }
});

// ✅ Fade-in on scroll (version i vetëm, pa dublikime)
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  fadeEls.forEach(el => observer.observe(el));
}


