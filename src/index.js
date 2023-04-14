import './less/index.less'
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach( a => a.addEventListener('mouseover', (event) => {a.style = 'color: blue'}));

const firstPar = Array.from(document.getElementsByTagName('p'), p => p.textContent = "I Changed all the text content with one line");
const img = document.querySelectorAll('img');

img.forEach(i => i.addEventListener('mouseover', (event) => {i.src = ''}));
img.forEach(i => i.addEventListener('mouseout', (event) => {i.src = 'https://picsum.photos/200/300'}));