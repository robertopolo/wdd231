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
    console.table(member);

    const divMember = document.createElement('div');
    divMember.setAttribute('class', 'home-cards');
    divMember.innerHTML = `
    <div class="home-cards">
    <h4>${member.name}</h4>
    <p>${member.info}</p>
    <img src=${member.image} alt=${member.name.toLowerCase().replace(' ', '-')}>
    <p><span>EMAIL:</span> ${member.email}</p>
    <p><span>PHONE:</span> ${member.phone}</p>
    <p><span>URL:</span> ${member.website}</p>
    </div>`

    cardContainer.appendChild(divMember);
    // const sect = document.createElement('section');
    // const logo = document.createElement('img');
    // const foundedDate = document.createElement('p');
    // const address = document.createElement('p');
    // const phone = document.createElement('p');
    // const website = document.createElement('a');

    // sect.setAttribute('class', 'directory-section');

    // logo.setAttribute('src', member.image);
    // logo.setAttribute('alt', `${member.name.toLowerCase()} logo`);
    // logo.setAttribute('loading', 'lazy');

    // foundedDate.textContent = `Founded: ${member.founded}`;

    // address.textContent = member.address;

    // phone.textContent = member.phone;

    // website.textContent = member.website;
    // website.setAttribute('href', member.website);
    // website.setAttribute('target', 'blank');

    // sect.appendChild(logo);
    // sect.appendChild(foundedDate);
    // sect.appendChild(address);
    // sect.appendChild(phone);
    // sect.appendChild(website);

    // cardContainer.appendChild(sect);
}

getData();