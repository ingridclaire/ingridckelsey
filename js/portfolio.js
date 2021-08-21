const projects = [
  {
    company: 'Doulas By The Bay',
    category: 'web development',
    title: 'Doulas By The Bay website design',
    expertise: 'full-stack web development',
    tech: 'React, Redux, Node.js, MongoDB',
    deliverables: 'complete website, database design, ui screens, ux flow',
    website: 'www.doulasbythebay.com',
    github: '',
    id: '',
    image: '',
    description: ''
  },
  {
    company: "The Illustrated Enby",
    category: 'shopify store set-up',
    title: "The Illustrated Enby - Shopify Store Set-Up",
    expertise: "Shopify store set-up, theme customization, and custom code",
    tech: 'Shopify, JavaScript',
    deliverables: 'Shopify store',
    website: 'www.theillustratedenby.com',
    github: '',
    id: '',
    image: '',
    description: "This Shopify store highlights the artist's original work, and makes prints available as well."
  }
]

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

renderHeader();