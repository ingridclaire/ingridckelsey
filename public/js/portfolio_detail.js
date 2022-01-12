// following container only exists on detail page
const container = document.querySelector('.detail-container');

const renderProject = (proj) => {
  
  document.getElementById('selected-proj').innerHTML = ` <div class="container-default w-container">
  <div data-w-id="7fcab334-d8f6-33f7-4d18-2975184f87da" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="portfolio-project-client page">${proj.company}</div>
  <h1 data-w-id="b354f5d0-e24b-693c-6915-bf613e985cda" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="title portfolio-project">${proj.title}</h1>
  <p data-w-id="a4fa57c0-b085-9f34-03cd-3ec55cbe5326" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="paragraph-large portfolio-project">${proj.description}</p>
  <div class="w-layout-grid about-portfolio-project-grid">
    <div data-w-id="5d75512f-a882-2e3b-0a2a-f138c323926d" style="-webkit-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="about-project-wrapper">
      <h4 class="title about-project">Expertise</h4>
      <div class="about-project-info-text">
        ${proj.expertise.map(item => `<p>${item}</p>`).join('')}
      </div>
    </div>
    
    <div data-w-id="8bf477c5-3cea-20b3-d8b5-61ea6fb98eec" style="-webkit-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="about-project-wrapper">
      <h4 class="title about-project">Deliverables</h4>
      <div class="about-project-info-text">
      ${proj.deliverables.map(item => `<p>${item}</p>`).join('')}
      </div>
    </div>
    <div data-w-id="48ef6d7e-2214-16b0-1210-2a2e706ebee3" style="-webkit-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(60PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="about-project-wrapper">
      <h4 class="title about-project">Website</h4>
      <a href=${proj.website} target="_blank">Visit website</a>
    </div>
  </div><img src=${proj.laptopImg} style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" data-w-id="04c2e4fa-80b9-f62b-1191-f78c28c70cee" alt="" class="image portfolio-project-image">

</div>`
}

if (container) {
  const projFromStorage = localStorage.getItem('selectedProj')
  const id = projFromStorage ? projFromStorage.split('-')[1] : '';
  if (id) {
    const displayProj = projects.filter(proj => proj.id == id)[0];
    renderProject(displayProj);
  } else {
    window.location.href = "http://127.0.0.1:5500/public/portfolio.html"
  }
}
