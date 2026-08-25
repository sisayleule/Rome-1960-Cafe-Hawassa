/* Rome 1960 Cafe — Menu Filtering */
(function(){
  'use strict';
  var tabs = document.querySelectorAll('.filter-tab');
  var categories = document.querySelectorAll('.menu-category');

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      tab.classList.add('active');
      var filter = tab.getAttribute('data-filter');

      categories.forEach(function(cat){
        if(filter === 'all' || cat.getAttribute('data-category') === filter){
          cat.style.display = 'block';
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });
})();
