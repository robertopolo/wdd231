const info = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML =
`
<p><span>Name</span>: ${info.get('fname')} ${info.get('lname')}</p>
<p><span>Email</span>: ${info.get('email')}</p>
<p><span>Phone number</span>: ${info.get('phone')}</p>
<p><span>Submited at</span>: ${info.get('appdate')}</p>
`;