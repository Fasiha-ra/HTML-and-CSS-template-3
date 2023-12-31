// -------MENU-BUTTON-------
document.querySelector('.btn-menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('active');
});

// -------FAQs-------
var faq = document.getElementsByClassName("faq-btn");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//  ---------SLICK SLIDER
$('.customer-detail').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<span class="prevArrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="nextArrow"><i class="fa-solid fa-angle-right"></i></span>',
  responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 2,
        //     centerMode: false
        //   }
        // },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    
});





//------------HREF Target
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});





			






