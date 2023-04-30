fetch('./navbar.html')
  .then(response => response.text())
  .then(html => {
    const container = document.querySelector('.nav');
    container.innerHTML = html;
    // console.log(a);
});
