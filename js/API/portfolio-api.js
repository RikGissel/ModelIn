Promise.all([
    fetch('https://modelin.webmcdm.dk/portfolios', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(portfolioData) {

            let portfolioPics = "";
            for (let i = 0; i < 4; i++) {
            portfolioPics += `
            <div class='portfolio'>
            <a href='../html/portfolio_subpage_${i+1}.html'>
                <div class='portfolio-overlay'></div>
                <img class='portfolio-image' src='../${portfolioData[i].teaser}'>
                <div class='portfolio-details fadeIn-bottom'>
                  <h3 class='portfolio-heading'><i class="fa-solid fa-plus"></i></h3>
                  <p class='portfolio-text'>${portfolioData[i].headline}</p>
                </div>
            </a>
            </div>`
            }
            document.getElementById("portfolio-images").innerHTML = portfolioPics;
        },
    ),
]);