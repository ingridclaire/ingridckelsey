
const animateHeader = () => {
  const whoAmI = ['web developer', 'shopify partner', 'javascript tutor'];
  const rolesContainer = document.getElementById('who-am-i');
    rolesContainer.innerText = whoAmI[0];
  let i = 1;
  let interval = setInterval(() => {
    i = i >= whoAmI.length ? 0 : i;
    for (let el of whoAmI) {
      rolesContainer.innerText = whoAmI[i];
    }
    i++;
  }, 1000)
}

setTimeout(animateHeader, 1500);



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