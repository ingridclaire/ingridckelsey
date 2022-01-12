const testimonialGrid = document.querySelector('.testimonial-grid');

const testimonialGridItems = testimonials.map((item, i) => {
  const translateSpec = i === 0 ? "60PX, 0, 0" : i ===1 ? "-60PX, 0, 0" : i === 2 ? "0, 60PX, 0" : "0, -60px, 0";
  
  return `<div id="w-node-fd25c120-962f-cc01-180f-66ef850d4e80-9ec4e610" data-w-id="fd25c120-962f-cc01-180f-66ef850d4e80" style="-webkit-transform:translate3d(${translateSpec}) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(${translateSpec}) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(${translateSpec}) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(${translateSpec}) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="card testimonial">
<p class="paragraph testimonial">“${item.content}”</p>
<div class="about-testimonial-wrapper"><img src=${item.img} alt="" class="testimonial-image">
  <div>
    <div class="testimonial-name">${item.name}</div>
    <div class="testimonial-work">${item.role}</div>
  </div>
</div>
</div>`
}).join('');

const testimonialSection = `<div class="testimonial-title-wrapper">
<div data-w-id="5d45b0d3-a50a-2d5c-e0cb-36212cf1aa92" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="accent testimonial"></div>
<h2 data-w-id="97d8d541-3c41-97af-15f7-ba8c104462f9" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Don&#x27;t Take My Word for It</h2>
<p data-w-id="28dd4383-af8c-f4ab-c679-359350355e82" style="-webkit-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 60PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" class="paragraph-large">Here's what some of my past clients have to say</p>
</div>` + testimonialGridItems;

testimonialGrid.innerHTML = testimonialSection;

