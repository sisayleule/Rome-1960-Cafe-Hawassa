/* Rome 1960 Cafe — Main JavaScript */

(function(){
  'use strict';

  // ========== Header Scroll ==========
  const header = document.querySelector('.header');
  const scrollTop = document.querySelector('.scroll-top');

  window.addEventListener('scroll', function(){
    if(window.scrollY > 50){ header && header.classList.add('scrolled'); }
    else { header && header.classList.remove('scrolled'); }
    if(scrollTop){
      if(window.scrollY > 400){ scrollTop.classList.add('visible'); }
      else { scrollTop.classList.remove('visible'); }
    }
  });

  if(scrollTop){
    scrollTop.addEventListener('click', function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  // ========== Mobile Menu ==========
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileLinks.forEach(function(link){
      link.addEventListener('click', function(){
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ========== Smooth Scroll ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        var offset = target.offsetTop - 80;
        window.scrollTo({top:offset,behavior:'smooth'});
      }
    });
  });

  // ========== Active Nav Link ==========
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', function(){
    var current = '';
    sections.forEach(function(section){
      var top = section.offsetTop - 200;
      if(window.scrollY >= top){ current = section.getAttribute('id'); }
    });
    navLinks.forEach(function(link){
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current){ link.classList.add('active'); }
    });
  });

  // ========== Scroll Reveal ==========
  if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .stagger-children').forEach(function(el){
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .stagger-children').forEach(function(el){
      el.classList.add('visible');
    });
  }

})();
