import { places } from '../data/places.mjs';
const placesDiv = document.querySelector('#places-discover');

function displayPlace(p){
    const d = document.createElement('div');
    const title = document.createElement('h2');
    const pic = document.createElement('figure');
    const addr = document.createElement('address');
    const desc = document.createElement('p');
    const btn = document.createElement('button');

    d.setAttribute('class', 'place-discover');

    d.innerHTML = `
    <h2>${p.title}</h2>
    <picture><img src="${p.image}" loading="lazy" alt="${p.title.toLowerCase().replaceAll(' ', '-')}-pic"/></picture>
    <address>${p.address}</address>
    <p>${p.description}</p>
    <button>Learn more</button>
    `

    placesDiv.appendChild(d);
}

places.forEach((place)=>{ displayPlace(place)});