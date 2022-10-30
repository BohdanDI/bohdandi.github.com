const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    logo = document.querySelector('.menu__item'),
    homeSection = document.querySelector('.menu__home'),
    aboutSection = document.querySelector('.menu__about'),
    whatwedoSection = document.querySelector('.menu__whatwedo'),
    historySection = document.querySelector('.menu__history'),
    contactSection = document.querySelector('.menu__contact'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
    homeSection.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
    aboutSection.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
    whatwedoSection.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
    contactSection.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
$(document).ready(function(){     
    function validateForms(forms) {
        $(forms).validate({
            rules: {
                name: "required",
                company: "required",
                phone: {
                    required: true,
                    phone: true
                },
                email: {
                    required: true,
                    email: true
                },
                text: {
                    required: true,
                    minlength: 10
                }
        },
            messages: {
                name: "Full Name is required",
                company: "Company Name is required",
                phone: {
                    required: "Phone Number is required",
                    phone: "Phone Number is invalid"
                },
                email: {
                    required: "Email is required",
                    phone: "Email is invalid"
                },
                text: {
                    required: "Please enter the text",
                    minlength: jQuery.validator.format("At least {0} symbols")
                },
            }
        });
    };
    validateForms('#send-form');

    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        }
      });
});