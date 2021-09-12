const testimonialContainer = document.querySelector('.testimonial-slider-mask');

const testimonialHtml = testimonials.map(item => `<div class="testimonial-slide-wrapper w-slide">
<div class="card testimonial">
  <p class="paragraph testimonial">“${item.content}”</p>
  <div class="about-testimonial-wrapper"><img src=${item.img} alt="" class="testimonial-image">
    <div>
      <div class="testimonial-name">${item.name}</div>
      <div class="testimonial-work">${item.role}</div>
    </div>
  </div>
</div>
</div>`).join('');

testimonialContainer.innerHTML = testimonialHtml;