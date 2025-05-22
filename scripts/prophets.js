const url =
  'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();

  // console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDay = document.createElement('p');
    const birthPlace = document.createElement('p');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    birthDay.textContent = `Day of birth: ${prophet.birthdate}`;
    
    birthPlace.textContent = `Day of birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name}-${prophet.lastname}-pic`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340px');
    portrait.setAttribute('height', '440px');

    card.appendChild(fullName);
    card.appendChild(birthDay);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};