let header = document.querySelector("header");
let scroll1 = window.scrollY;

document.addEventListener("scroll", () => {
  if (this.scrollY >= 160 && this.screenY <= 1500) {
    if (scroll1 > this.scrollY) {
      header.style.top = "0px";
      scroll1 = this.scrollY;
    } else {
      header.style.top = "-100px";
      scroll1 = this.scrollY;
    }
  }
});
