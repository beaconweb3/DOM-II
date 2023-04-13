import './less/index.less'
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach( a => a.addEventListener('mouseover', (event) => {a.style = 'color: blue'}));

const firstPar = Array.from(document.getElementsByTagName('p'), p => p.textContent = "I Changed all the text content with one line");
console.log(firstPar);