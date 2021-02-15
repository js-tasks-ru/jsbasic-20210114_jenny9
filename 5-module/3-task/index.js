function initCarousel() {
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const inner = document.querySelector('.carousel__inner');
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let currentSlide = 0;

  arrowLeft.addEventListener("click", onArrowLeftClick);
  arrowRight.addEventListener("click", onArrowRightClick);
  disableButtons();

  function onArrowLeftClick() {
    currentSlide--;
    inner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    disableButtons();
  }

  function onArrowRightClick() {
    currentSlide++;
    inner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    disableButtons();
  }

  function disableButtons() {
    if (currentSlide === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
    if (currentSlide === 3) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }
}
