const accordionContainer = document.querySelectorAll('.accordion-container'); 




accordionContainer.forEach(container => {
    const accordionTitle = container.querySelector('.accordion-title');
    const accordionContent = container.querySelector('.accordion-content');
    const plusSign = accordionTitle.querySelector('.plus-sign');
    const minusSign = accordionTitle.querySelector('.minus-sign');

    accordionTitle.addEventListener('click', () => {
        //Toggle the active class on the title
        accordionTitle.classList.toggle('active');

        

        //toggle the display property of accordion content
        if (accordionContent.style.display === 'block' ) {
            accordionContent.style.display = 'none'; 
            plusSign.style.display = 'block';
            minusSign.style.display = 'none';

        } else {
            accordionContent.style.display = "block";
            plusSign.style.display = 'none';
            minusSign.style.display = 'block';

                    
        }


    })
    
})




document.addEventListener("DOMContentLoaded", function() {
  const accordionContainer = document.querySelectorAll('.accordion-container');

  accordionContainer.forEach(container => {
    const title = container.querySelector('.accordion-title');
    const content = container.querySelector('.accordion-content');
    

    title.addEventListener('click', () => {
      toggleAccordion(container, title, content);
    });

    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(container, title, content);
      }else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusPreviousAccordion(title);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusNextAccordion(title);
      }
    });
  });
});

function toggleAccordion(container, title, content) {
    const isExpanded = title.getAttribute('aria-expanded') === 'true';
     const plusSign = container.querySelector('.plus-sign');
    const minusSign = container.querySelector('.minus-sign');


  // Toggle aria-expanded attribute on title
  title.setAttribute('aria-expanded', !isExpanded);

  // Toggle aria-hidden attribute on content
  content.setAttribute('aria-hidden', isExpanded);

  // Toggle the active class on title
  title.classList.toggle('active');

  // Toggle the display property of content
  if (isExpanded) {
      content.style.display = 'none';
      plusSign.style.display = 'block';
      minusSign.style.display = 'none';   
  } else {
      content.style.display = 'block';
      plusSign.style.display = 'none';
      minusSign.style.display = 'block';
  }
}

function focusNextAccordion(currentTitle) {
  const accordionItems = document.querySelectorAll('.accordion-title');
  const currentIndex = Array.from(accordionItems).indexOf(currentTitle);
  const nextIndex = (currentIndex + 1) % accordionItems.length;
  accordionItems[nextIndex].focus();
}

function focusPreviousAccordion(currentTitle) {
  const accordionItems = document.querySelectorAll('.accordion-title');
  const currentIndex = Array.from(accordionItems).indexOf(currentTitle);
  const previousIndex = (currentIndex - 1 + accordionItems.length) % accordionItems.length;
  accordionItems[previousIndex].focus();
}
