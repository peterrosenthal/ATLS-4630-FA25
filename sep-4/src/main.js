import './style.css';

fetch('https://meowfacts.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json));

const baseUrl = 'https://meowfacts.herokuapp.com/';

const fetchCatFactButton = document.getElementById('fetchCatFactButton');
const catFactTarget = document.getElementById('catFactTarget');

fetchCatFactButton.addEventListener('click', async () => {
  const response = await fetch(baseUrl);
  const json = await response.json();
  catFactTarget.innerText = json.data[0];
});

const catFactsCount = document.getElementById('catFactsCount');
const fetchCatFactsButton = document.getElementById('fetchCatFactsButton');
const catFactsTarget = document.getElementById('catFactsTarget');

fetchCatFactsButton.addEventListener('click', async () => {
  try {
    const count = catFactsCount.value;
    if (count < 1) {
      return;
    }

    const response = await fetch(`${baseUrl}?count=${count}&lang=esp`);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const json = await response.json();
    catFactsTarget.innerHTML = '';
    for (const catFact of json.data) {
      // don't do this! XSS!
      // catFactsTarget.innerHTML += `<li>${catFact}</li>`;
      const li = document.createElement('li');
      li.innerText = catFact;
      catFactsTarget.appendChild(li);
    }
  } catch (e) {
    console.error(e);
  }
});
