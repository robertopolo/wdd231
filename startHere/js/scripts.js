const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Appoinmet for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} temple</p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>Your email is: ${myInfo.get('email')}</p>
`
