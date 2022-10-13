/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
function myFunction() {
  let x;
  let y;
  let z;
  let m;
  let t;
  let h;

  m = document.querySelector('body');
  x = document.getElementById('toggle');
  y = document.getElementById('toggle-btn');
  t = document.getElementById('shape');
  z = document.getElementById('change-icon1');
  h = document.getElementById('change-icon2');

  m.classList.toggle('body-dark');
  x.classList.toggle('toggle-dark');
  y.classList.toggle('span-dark');
  t.classList.toggle('shape-style');

  z.classList.toggle('moon-icon');
  h.classList.toggle('sun-icon');
}
