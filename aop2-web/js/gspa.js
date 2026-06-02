// no momento esta sendo executado pelo darkmode.js



// Inicializa o Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        init: function () {
            // animação inicial do slide ativo
            animateSlide(this.slides[this.activeIndex]);
        },
        slideChangeTransitionStart: function () {
            animateSlide(this.slides[this.activeIndex]);
        }
    }
});

// Função para animar o slide ativo
function animateSlide(slide) {
    const img = slide.querySelector("img");
    const caption = slide.querySelector("p");

    gsap.fromTo(img,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    if (caption) {
        gsap.fromTo(caption,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
        );
    }
}



gsap.from(".grid > div", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".scroll-animate", {
    scrollTrigger: ".scroll-animate", // dispara quando o elemento aparece na tela
    opacity: 0,
    y: 100,
    duration: 1
});

