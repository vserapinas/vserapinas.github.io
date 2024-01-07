const title1 = document.getElementById('titleOne');
const title2 = document.getElementById('titleTwo');
const title3 = document.getElementById('titleThree');
const title4 = document.getElementById('titleFour');
const title5 = document.getElementById('titleFive');

const hidden1 = document.getElementById('hidden-text-one');
const hidden2 = document.getElementById('hidden-text-two');
const hidden3 = document.getElementById('hidden-text-three');
const hidden4 = document.getElementById('hidden-text-four');
const hidden5 = document.getElementById('hidden-text-five');


if (w > 1024) {

  title1.addEventListener('click', () => {
    title1.classList.toggle('clicked');
    hidden1.classList.toggle('visible');
  });
  title2.addEventListener('click', () => {
    title2.classList.toggle('clicked');
    hidden2.classList.toggle('visible');
  });
  title3.addEventListener('click', () => {
    title3.classList.toggle('clicked');
    hidden3.classList.toggle('visible');
  });
  title4.addEventListener('click', () => {
    title4.classList.toggle('clicked');
    hidden4.classList.toggle('visible');
  });
  title5.addEventListener('click', () => {
    title5.classList.toggle('clicked');
    hidden5.classList.toggle('visible');
  });
}
