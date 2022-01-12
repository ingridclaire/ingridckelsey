const portfolioContainer = document.getElementById('portfolio-container');

const renderCards = () => {
  let htmlString = '';
  

for (let i = 0; i < projects.length; i += 1) {
  const proj = projects[i];
  htmlString += `   <div data-w-id="fd08a8fe-f1cf-9723-788e-d157a98becff" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" role="listitem" class="w-dyn-item portfolio-card" id="project-2">
  <a href="detail_portfolio.html" class="card card-portfolio portfolio-card w-inline-block" id="project-${proj.id}">
    <div class="image-wrapper card-portfolio"><img src=${proj.image} alt="doulas by the bay" class="image card-portfolio"></div>
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