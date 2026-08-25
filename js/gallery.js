/* Rome 1960 Cafe — Gallery Filtering & Lightbox */
(function(){
  'use strict';
  var tabs = document.querySelectorAll('.filter-tab');
  var items = document.querySelectorAll('.gallery-page-grid__item');
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var closeBtn = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  var prevBtn = lightbox ? lightbox.querySelector('.lightbox__nav--prev') : null;
  var nextBtn = lightbox ? lightbox.querySelector('.lightbox__nav--next') : null;
  var currentIndex = 0;
  var visibleItems = [];

  function updateVisibleItems(){
    visibleItems = [];
    items.forEach(function(item){
      if(item.style.display !== 'none'){
        visibleItems.push(item);
      }
    });
  }

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      tab.classList.add('active');
      var filter = tab.getAttribute('data-filter');
      items.forEach(function(item){
        if(filter === 'all' || item.getAttribute('data-category') === filter){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      updateVisibleItems();
    });
  });

  items.forEach(function(item){
    item.addEventListener('click', function(){
      updateVisibleItems();
      currentIndex = visibleItems.indexOf(item);
      openLightbox();
    });
  });

  function openLightbox(){
    if(!lightbox || !visibleItems[currentIndex]) return;
    var src = visibleItems[currentIndex].querySelector('img').src;
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    if(!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if(closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLightbox();
  });
  if(prevBtn) prevBtn.addEventListener('click', function(e){
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox();
  });
  if(nextBtn) nextBtn.addEventListener('click', function(e){
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox();
  });

  document.addEventListener('keydown', function(e){
    if(!lightbox || !lightbox.classList.contains('active')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft'){ currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; openLightbox(); }
    if(e.key === 'ArrowRight'){ currentIndex = (currentIndex + 1) % visibleItems.length; openLightbox(); }
  });

  updateVisibleItems();
})();
