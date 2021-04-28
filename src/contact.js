const contact = document.createElement("div");
contact.id = "contact";
contact.className = "invis";

const headline = document.createElement("h1");
headline.textContent = "Contact Us!";

const phone = document.createElement("p");
phone.textContent = `Phone: (555)555-5555`;
const eMail = document.createElement("p");
eMail.textContent = `E-mail: Sandwiches@bmail.com`
const twitter = document.createElement("p");
twitter.textContent = `twitter: @sandwichesrest`;

contact.appendChild(headline);
contact.appendChild(phone);
contact.appendChild(eMail);
contact.appendChild(twitter);

export default contact;
