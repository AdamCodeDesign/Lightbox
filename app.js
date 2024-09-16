const lightbox = {
  gallery: document.querySelector(".gallery"),
  init: function () {
    this.container = document.createElement("div");
    this.container.id = "lightbox";
    document.body.appendChild(this.container);
    this.lightboxImg = document.createElement("img");
    this.container.appendChild(this.lightboxImg);
    this.loadImages();
  },

  loadImages: function (keywordsArr, imgSize = "300/300") {
    let keywords = [
      "car",
      "forest",
      "dog",
      "sunset",
      "flower",
      "stars",
      "ocean",
      "game"
    ];

    if (keywordsArr) keywords = keywordsArr;

    let htmlCode = "";

    for (let keyword of keywords) {
      keyword = keyword.trim().toLowerCase();
      const url = `https://loremflickr.com/${imgSize}/${keyword}`;
      htmlCode += `<img src='${url}'>`;
    }

    this.gallery.innerHTML = htmlCode
  },
};

lightbox.init();
