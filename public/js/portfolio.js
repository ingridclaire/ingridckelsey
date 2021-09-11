const portfolioContainer = document.getElementById('home-portfolio-container');

const renderCards = () => {
  let htmlString = '';
  htmlString += ` <div class="w-dyn-list">
  <div role="list" class="w-dyn-items">
    <div data-w-id="97932281-e035-7c9e-881e-ab1db1868fe6" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" role="listitem" class="last-project-wrapper w-dyn-item">
      <a data-w-id="6de037cf-7862-72b4-aeee-5312f523dddf" href="detail_portfolio.html" id="project-${projects[0].id}" class="last-project-section w-inline-block portfolio-card">
        <div class="image-wrapper last-project"><img src=${projects[0].image} alt="" class="image card-portfolio featured"></div>
        <div class="card last-project">
          <div class="portfolio-category-wrapper">
            <div class="portfolio-category">${projects[0].category}</div>
          </div>
          <h3 class="title card-portfolio">${projects[0].title}</h3>
          <p class="card-potrfolio-paragraph">${projects[0].description}</p>
          <div class="card-portfolio-case-study-link">
            <div>view case study</div>
            <div class="card-portfolio-link-arrow-wrapper">
              <div></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>`

for (let i = 1; i < projects.length; i += 1) {
  const proj = projects[i];
  htmlString += `<div class="w-dyn-list">
  <div role="list" class="portfolio-section-cards-grid w-dyn-items">
    <div data-w-id="4b20c8ab-101a-e0ba-0ffe-5dab83daa140" style="-webkit-transform:translate3d(-60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" role="listitem" class="w-dyn-item">
      <a href="detail_portfolio.html" class="card card-portfolio w-inline-block portfolio-card" id="project-${proj.id}">
        <div class="image-wrapper card-portfolio"><img src=${proj.image} alt="" class="image card-portfolio"></div>
        <div class="card-portfolio-content">
          <div class="portfolio-category-wrapper">
            <div class="portfolio-category">${proj.category}</div>
          </div>
          <div class="portfolio-content-case-study-link">
            <h3 class="title card-portfolio">${proj.title}</h3>
            <p class="card-potrfolio-paragraph">${proj.description}</p>
            <div class="card-portfolio-case-study-link">
              <div>view case study</div>
              <div class="card-portfolio-link-arrow-wrapper">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>`;
}

portfolioContainer.innerHTML = htmlString
}

const addEventListeners = () => {
  const cards = document.querySelectorAll('.portfolio-card');
  console.log(cards);
  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    card.addEventListener('mouseenter', (e) => {
      console.log('mouse enter', e.target);
      localStorage.setItem('selectedProj', e.target.id);
    })
  }
}

renderCards();
addEventListeners();