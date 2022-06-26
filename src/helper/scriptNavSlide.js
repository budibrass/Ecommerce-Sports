//banner slides
export const navSlide = () => {
    let slideIndex = 0;
    let i;
    const slides = document.getElementsByClassName("banner-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";
    setTimeout(navSlide, 5000);
}

// showSlides();