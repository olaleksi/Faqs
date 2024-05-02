const accordionContainer = document.querySelectorAll('.accordion-container'); 
// const questionSubContainer = document.querySelectorAll('.question-sub-container');



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

        // if (plusSign.style.display === 'block') {
        //     plusSign.style.display = 'none';
        //     minusSign.style.display = 'block';
        // } else {
        //     plusSign.style.display = 'block';
        //     minusSign.style.display = 'none';
        // }



    })
    
})


    
