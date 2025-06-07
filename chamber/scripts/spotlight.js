/*  */

const url = './data/members.json';
const cardContainer = document.querySelector('#spotlight');

async function getData(){
    const response = await fetch(url);
    const data = await response.json(response);
    const dataFiltered = data.filter(item => item.membership_level > 1)
    const randomData = getRandomElements(dataFiltered);

    randomData.forEach(m => {
        displayMembers(m);
    });
}

function getRandomElements(arr) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function displayMembers(member){
    const divMember = document.createElement('div');
    divMember.setAttribute('class', 'home-cards');
    divMember.innerHTML = `
    <div class="spotlight-title">
    <h4>${member.name}</h4>
    <p>${member.info}</p>
    </div>
    <div class="spotlight-info">
    <img src=${member.image} alt=${member.name.toLowerCase().replace(' ', '-')}>
    <p><span>EMAIL:</span> ${member.email}</p>
    <p><span>PHONE:</span> ${member.phone}</p>
    <p><span>URL:</span> ${member.website}</p>
    </div>`

    cardContainer.appendChild(divMember);
}

getData();