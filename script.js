const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

//auto play.slider
let runAutoPlay = setTimeout(() => {
  next.click();
}, 5000);

// auto play musik
window.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");
  audio.play();
});

// Event listener untuk tombol next
next.addEventListener("click", () => {
  initSlider("next");
});

// Event listener untuk tombol prev
prev.addEventListener("click", () => {
  initSlider("prev");
});

// Fungsi untuk memindahkan slider
const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    // Pindahkan elemen pertama ke akhir
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else if (type === "prev") {
    // Pindahkan elemen terakhir ke awal
    const lastSliderItem = sliderItems[sliderItems.length - 1];
    const lastThumbnailItem = thumbnailItems[thumbnailItems.length - 1];

    list.prepend(lastSliderItem);
    thumbnail.prepend(lastThumbnailItem);
    slider.classList.add("prev");
  }

  // Hapus kelas animasi setelah selesai
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 500); // Durasi sesuai animasi CSS

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click();
  }, 5000);
};
