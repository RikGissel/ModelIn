Promise.all([
  fetch("https://modelin.webmcdm.dk/portfolios", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (subpage) {
        for (let i = 0; i < 4; i++) {
            if (window.location.href.indexOf(`subpage_${i+1}`) != -1) {
            
      const subpageImage = document.querySelector(".subpage-hero");
      const subpageText = document.querySelector(".subpage-texts");
      const subpageInfo = document.querySelector(".subpage-infos");

      subpageImage.innerHTML += `<div class='subpage-hero-wrapper'>
                    <div class='subpage-hero-items'>
                        <h1 class='subpage-hero-title'>${subpage[i].title}</h1>
                        <a href='#subpage-texts'><i class='fa-solid fa-chevron-down fa-3x'></i></a>
                    </div>
                    <img class='subpage-hero-img' src='../${subpage[i].cover}'>
                </div>`;

      subpageText.innerHTML += `<h1>${subpage[i].headline}</h1>
                <p>${subpage[i].description}</p>`;

      subpageInfo.innerHTML += `<h1>Year</h1>
                <p>${subpage[i].placement.year}</p>
                <h1>Area</h1>
                <p>${subpage[i].placement.area}</p>
                <h1>Address</h1>
                <p>${subpage[i].placement.address}</p>`;

      let galleryImgs = "";
      for (let j = 0; j < subpage[i].gallery.length; j++) {
        galleryImgs += `<div class='masonry-grid-item'><a href="#"><img class="gallery-imgs" src="../${subpage[i].gallery[j].image}"/></a></div>`;
      }

      document.getElementById("subpage-gallery").innerHTML = galleryImgs;
    }
}
    }),
]);