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
  }, 1500)
}

setTimeout(animateHeader, 1000);