function changeMode (size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let text = document.createElement('p');
  text.textContent = 'The Fitness Gram Pacer Test is a multi-stage aerobic capacity test that gets more difficult as time continues.';
  document.body.append(text);

  let spookyButt = document.createElement('button');
  spookyButt.textContent = 'Spoopy';
  document.body.append(spookyButt);
  spookyButt.addEventListener('click', spooky);

  let darkButt = document.createElement('button');
  darkButt.textContent = 'Dark mode';
  document.body.append(darkButt);
  darkButt.addEventListener('click', darkMode);

  let screamButt = document.createElement('button');
  screamButt.textContent = 'Scream mode';
  document.body.append(screamButt);
  screamButt.addEventListener('click', screamMode);
}

main();
