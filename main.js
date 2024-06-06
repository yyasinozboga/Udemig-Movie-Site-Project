const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
const movieList = document.querySelectorAll(".movie-list");
const images = movieList[0].children.length;
const imageWidth =
  document.querySelectorAll(".movie-image")[0].offsetWidth + 50;
let imageCount = parseInt(movieList[0].offsetWidth / imageWidth);

let count = 0;

if (imageCount < 1) {
  imageCount = 1;
}

nextBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    count++;
    movieList[i].scrollLeft += imageWidth;

    const prev = btn.previousElementSibling;

    if (imageCount + count >= images) {
      btn.style.display = "none";
      movieList[i].scrollLeft = images * imageWidth;
    } else {
      btn.style.display = "block";
    }

    prev.style.display = "block";
  });
});

prevBtn.forEach((btn, i) => {
  btn.style.display = "none";
  btn.addEventListener("click", () => {
    count--;
    movieList[i].scrollLeft -= imageWidth;

    const next = btn.nextElementSibling;

    if (count <= 0) {
      btn.style.display = "none";
      movieList[i].scrollLeft = 0;
    } else {
      btn.style.display = "block";
    }

    next.style.display = "block";
  });
});

//! Dark Mode
const roundBtn = document.querySelector(".round-btn");
const eleList = document.querySelectorAll(
  ".header, .aside, .main, .movie-title, .select, .res-menu-btn, .res-menu, .arrow",
);

roundBtn.addEventListener("click", () => {
  eleList.forEach((ele) => {
    ele.classList.toggle("active");
  });
});

const resMenuBtn = document.querySelector(".res-menu-btn");
const resMenu = document.querySelector(".res-menu");

resMenuBtn.addEventListener("click", () => {
  resMenu.classList.toggle("show");
});
