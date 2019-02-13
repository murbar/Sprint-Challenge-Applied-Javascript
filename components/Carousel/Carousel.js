class Carousel {
  // assuming all imgs are of same dimensions
  constructor(pageEl) {
    this.pageEl = pageEl;
    this.leftBtn = pageEl.querySelector('.left-button');
    this.rightBtn = pageEl.querySelector('.right-button');
    this.images = pageEl.querySelectorAll('img');

    this.leftBtn.addEventListener('click', () => this.showPrevImg());
    this.rightBtn.addEventListener('click', () => this.showNextImg());
    const currentImg = this.images[this.currentImgIndex];
    // currentImg.style.display = 'flex';
    // currentImg.style.position = 'absolute';
    // this.images.forEach(i => {
    //     i.style.display = 'flex';
    // });

    this.currentIndex = 3;
    const viewPort = pageEl.querySelector('.carousel-slide');
    const carouselWidth = this.images[0].width;
    viewPort.style.transform = `translateX(${-carouselWidth *
      this.currentIndex}px)`;
  }
  showNextImg() {
    this.currentIndex++;
  }
  showPrevImg() {}
}

let carousel = document.querySelector('.carousel');
const c = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
