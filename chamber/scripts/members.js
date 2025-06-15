const url = './data/members.json';
const cardContainer = document.querySelector('#cards-container');

async function getData(){
    const response = await fetch(url);
    const data = await response.json(response);

    data.forEach(m => {
        displayMembers(m);
    });
}

function displayMembers(member){
    const sect = document.createElement('section');
    const logo = document.createElement('img');
    const foundedDate = document.createElement('p');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('a');

    sect.setAttribute('class', 'directory-section');

    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `${member.name.toLowerCase().replaceAll(' ', '-')} logo`);
    logo.setAttribute('loading', 'lazy');

    foundedDate.textContent = `Founded: ${member.founded}`;

    address.textContent = member.address;

    phone.textContent = member.phone;

    website.textContent = member.website;
    website.setAttribute('href', member.website);
    website.setAttribute('target', 'blank');

    sect.appendChild(logo);
    sect.appendChild(foundedDate);
    sect.appendChild(address);
    sect.appendChild(phone);
    sect.appendChild(website);

    cardContainer.appendChild(sect);
}

getData();