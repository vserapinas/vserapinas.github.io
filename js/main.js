const firstNavIconLine = document.querySelector('.a.first');
const secondNavIconLine = document.querySelector('.a.second');
const thirdNavIconLine = document.querySelector('.a.third');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn svg');
const menu = document.getElementById('menu');
const main = document.getElementById('main');
const body = document.querySelector('body');

menuBtn.addEventListener('mouseover', () => {
  firstNavIconLine.setAttribute("x2", "50");
  firstNavIconLine.setAttribute("transform", "translate(50.5 77.5)");
  secondNavIconLine.setAttribute("x2", "50");
  secondNavIconLine.setAttribute("transform", "translate(50.5 58.5)");

})

menuBtn.addEventListener('mouseleave', () => {
  firstNavIconLine.setAttribute("x2", "50");
  firstNavIconLine.setAttribute("transform", "translate(65.5 77.5)");
  secondNavIconLine.setAttribute("x2", "50");
  secondNavIconLine.setAttribute("transform", "translate(75.5 58.5)");
})

menuBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  menu.style.zIndex = "999";
  menu.style.top = "0";
  menu.style.opacity = "1";
  main.style.marginTop = '100vh';
});

closeBtn.addEventListener('click', () => {
  menu.style.zIndex = "-1";
  menu.style.top = "-100vh";
  menu.style.opacity = "1";
  main.style.marginTop = '0';
});