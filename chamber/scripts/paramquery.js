const myInfo = new URLSearchParams(window.location.search);

console.log(myInfo);

document.querySelector('#results').innerHTML = `
<h2>Success</h2>
<p><span>Applicant name</span>: ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
<p><span>Email</span>: ${myInfo.get('email')}</p>
<p><span>Phone number</span>: ${myInfo.get('phone')}</p>
<p><span>Business name</span>: ${myInfo.get('bizname')}</p>
<p><span>Submited at</span>: ${myInfo.get('appdate')}</p>
`
