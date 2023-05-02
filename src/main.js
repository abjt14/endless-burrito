const wrapper = document.querySelector(".wrapper");
const imgParent = document.querySelector(".content");

class imageElement {
  constructor() {
    this.repeatNumber = this.repeatImageNumber();
    this.src = `images/repeat-${this.repeatNumber}.png`;
    this.alt = `repeating section type ${this.repeatNumber}`;

    this.createElement();
  }

  createElement() {
    let e = document.createElement("img");

    e.setAttribute("src", this.src);
    e.setAttribute("alt", this.alt);
    e.setAttribute("loading", "lazy");
    e.setAttribute("class", "repeat");
    e.setAttribute("width", "320");
    e.setAttribute("height", "640");

    imgParent.appendChild(e);
  }

  repeatImageNumber() {
    return Math.floor(Math.random() * 3 + 1);
  }
}

window.addEventListener("scroll", (e) => {
  if ((window.scrollY + window.innerHeight) / wrapper.getBoundingClientRect().height > .9) {
    new imageElement();
  }
});