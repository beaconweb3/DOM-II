import './less/index.less'
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach( a => a.addEventListener('mouseover', (event) => {a.style = 'color: blue'}));

