const renderHeader = () => {
  document.querySelector('.container-header').innerHTML = `<div class="logo-container">
  <a href="index.html" aria-current="page" class="brand w-nav-brand w--current logo-link">
    <p class="alt-header-logo"><span>ICK</span></p>
  </a>
  <span class="logo-fullname">ingrid c<span class="the-period">.</span> kelsey</span>
</div>
<div class="header-menu-wrapper">
  <nav role="navigation" class="nav-menu w-nav-menu">
    <ul role="list" class="header-navigation">
      <li class="nav-item-wrapper">
        <a href="index.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item-wrapper">
        <a href="about.html" class="nav-link">About</a>
      </li>
      <li class="nav-item-wrapper">
        <a href="portfolio.html" aria-current="page" class="nav-link w--current">Portfolio</a>
      </li>
    </ul>
  </nav>
  <div class="menu-button w-nav-button">
    <div data-w-id="7f24f62d-2c49-944b-8d8e-90e7bc2d57dd" data-animation-type="lottie" data-src="documents/icon-menu-designer-template.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="3" data-duration="0" class="icon-menu-mobile"></div>
  </div>
</div>
<a href="contact.html" class="button-primary header-button w-button">talk to me</a>`
}

const renderFooter = () => {
  document.querySelector('footer').innerHTML = `<div class="container-default">
  <div data-w-id="7ffc4760-c7d0-5091-8c2a-5c6bc9626f89" class="divider footer-divider"></div>
  <div class="w-layout-grid footer-menu-grid">
    <div data-w-id="d8f300d9-139e-a836-acaa-c2827df50c34" class="newsletter-wrapper">
      <h3 class="title footer-newsletter">Where to find me</h3>
      <p class="paragraph newsletter">Come hang out with me online.</p>
      <div class="w-layout-grid footer-social-media-grid">
        <a href="https://twitter.com/ingrizzlebear" target="_blank" class="social-media-link twitter small w-inline-block"><img src="images/icon-social-media-02-designer-template.svg" alt="" class="image social-media"></a>
        <a href="https://www.instagram.com/ingridclaire" target="_blank" class="social-media-link instagram small w-inline-block"><img src="images/icon-social-media-03-designer-template.svg" alt="" class="image social-media"></a>
        <a href="https://www.linkedin.com/in/ingridclaire" target="_blank" class="social-media-link linkedin small w-inline-block"><img src="images/icon-social-media-04-designer-template.svg" alt="" class="image social-media"></a>
        <a href="https://www.github.com/ingridclaire" target="_blank" class="social-media-link linkedin small w-inline-block github-link"><i class="fab fa-github-alt"></i></a>
      </div>
    </div>
    

   
  </div>
  <div data-w-id="70cf9c9c-7f53-328d-f5c4-55ca3675c3fe" class="small-print copyright">Copyright © Ingrid C Kelsey 2021</div>
</div>`
}

renderHeader();
renderFooter();