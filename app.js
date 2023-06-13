
/*scroll*/

const containerWrappers = document.querySelectorAll('.container-wrapper');

containerWrappers.forEach((containerWrapper) => {
  const spaceHolder = containerWrapper.querySelector('.space-holder');
  const horizontal = containerWrapper.querySelector('.horizontal');
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150; 
  }

  window.addEventListener('scroll', () => {
    const sticky = containerWrapper.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
  });

  window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });
});


//frozen

const sampleCards = document.querySelectorAll('.sample-card');

sampleCards.forEach((sampleCard) => {
  sampleCard.addEventListener('mouseenter', () => {
    // Centraliza o elemento na tela
    const windowWidth = window.innerWidth;
    const targetLeft = (windowWidth - sampleCard.offsetWidth) / 2;

    window.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });

    // Desabilita a rolagem do scroll
    document.body.style.overflow = 'hidden';

    // Reabilita a rolagem após 5 segundos
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 5000); // 5 segundos em milissegundos
  });
});


/*effects*/
AOS.init();


/*list effects*/
const itemLists = document.getElementsByClassName('slide-in-items');

function showItemsWithDelay() {
  for (let i = 0; i < itemLists.length; i++) {
    const itemList = itemLists[i];
    const items = itemList.getElementsByTagName('li');
    itemList.style.visibility = 'visible'; 

    for (let j = 0; j < items.length; j++) {
      const item = items[j];
      const delay = j * 1000; 
      setTimeout(() => {
        item.classList.add('visible'); 
      }, delay);
    }
  }
}

showItemsWithDelay(); //effects






/*typewriter*/
const typewriterElements = document.querySelectorAll('.typewriter');

function typewriterEffect() {
  typewriterElements.forEach((element) => {
    const text = element.innerText;
    let currentIndex = 0;
    let displayText = '';

    const typingInterval = setInterval(() => {
      displayText += text[currentIndex];
      element.textContent = displayText;
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, 100); 
  });
}

window.addEventListener('load', typewriterEffect);

//effects

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var slideInElements = document.getElementsByClassName('slide-in-content');
  var slideLeftElements = document.getElementsByClassName('slide-in-left');
  var slideLeftAltElements = document.getElementsByClassName('slide-in-left-alt'); 
  var fadeElements = document.getElementsByClassName('fade-in-out'); 
  var zoomElements = document.getElementsByClassName('zoom-in'); 
  var slideRightElements = document.getElementsByClassName('slide-in-right');
   var slideRightAltElements = document.getElementsByClassName('slide-in-right-alt');


  var delay = 1000; // Adjust the delay value (in milliseconds) as needed

  for (var i = 0; i < slideInElements.length; i++) {
    if (isElementInViewport(slideInElements[i])) {
      slideInElements[i].classList.add('visible');
    } else {
      slideInElements[i].classList.remove('visible');
    }
  }

  for (var j = 0; j < slideLeftElements.length; j++) {
    if (isElementInViewport(slideLeftElements[j])) {
      slideLeftElements[j].style.transitionDelay = `${j * delay}ms`;
      slideLeftElements[j].classList.add('visible');
    } else {
      slideLeftElements[j].style.transitionDelay = '0ms';
      slideLeftElements[j].classList.remove('visible');
    }
  }

  for (var k = 0; k < slideLeftAltElements.length; k++) { 
    if (isElementInViewport(slideLeftAltElements[k])) {
      slideLeftAltElements[k].style.transitionDelay = `${k * delay}ms`; 
      slideLeftAltElements[k].classList.add('visible');
    } else {
      slideLeftAltElements[k].style.transitionDelay = '0ms';
      slideLeftAltElements[k].classList.remove('visible');
    }
  }

  for (var l = 0; l < fadeElements.length; l++) {
    if (isElementInViewport(fadeElements[l])) {
      fadeElements[l].classList.add('visible');
    } else {
      fadeElements[l].classList.remove('visible');
    }
  }

  for (var m = 0; m < zoomElements.length; m++) {
    if (isElementInViewport(zoomElements[m])) {
      zoomElements[m].classList.add('visible');
    } else {
      zoomElements[m].classList.remove('visible');
    }
  }

  for (var n = 0; n < slideRightElements.length; n++) { 
    if (isElementInViewport(slideRightElements[n])) {
      slideRightElements[n].style.transitionDelay = `${n * delay}ms`; 
      slideRightElements[n].classList.add('visible');
    } else {
      slideRightElements[n].style.transitionDelay = '0ms';
      slideRightElements[n].classList.remove('visible');
    }
  }

  for (var n = 0; n < slideRightAltElements.length; n++) {
    if (isElementInViewport(slideRightAltElements[n])) {
      slideRightAltElements[n].style.transitionDelay = `${n * delay}ms`;
      slideRightAltElements[n].classList.add('visible');
    } else {
      slideRightAltElements[n].style.transitionDelay = '0ms';
      slideRightAltElements[n].classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', handleScroll);


// Parallaz effect
const parallaxElement = document.querySelector('.parallax-quote');
const parallaxInstance = new Tilt(parallaxElement, {
  scale: 1.2, // Adjust the scale value as needed
  perspective: 1000, // Adjust the perspective value as needed
});



var contentLegend = document.querySelector('.content-legend');

contentLegend.innerHTML += contentLegend.innerHTML;


// Background

window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.section');
  
  sections.forEach(function(section) {
    var bounding = section.getBoundingClientRect();
    if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
      section.classList.add('active'); 
    } else {
      section.classList.remove('active'); 
    }
  });
}); 



// Pop-up

function mostrarPopUp() {
    document.getElementById("popUp").style.display = "block";
}

function fecharPopUp() {
    document.getElementById("popUp").style.display = "none";
}


