const header = document.querySelector("header");
const secectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-150px"
};

const secectionOneObserver = new IntersectionObserver(function(
  entries,
  secectionOneObserver
) {
  entries.forEach(entry => {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

secectionOneObserver.observe(secectionOne);
