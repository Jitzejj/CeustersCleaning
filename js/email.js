const form = document.querySelector('form');

const naam = document.getElementById("Naam");
const email = document.getElementById("Email");
const telefoon = document.getElementById("Telefoon");
const bericht = document.getElementById("Bericht");

function sendEmail() {

    const bodyMessage = `Full name: ${naam.value}<br> Email: ${email.value}<br>
     Telefoon: ${telefoon.value}<br> Bericht: ${bericht.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jitze.1ceusters@gmail.com",
        Password : "47F5FC26C4D5AFBEEEE0B59B38132D9C95A3",
        To : 'jitze.1ceusters@gmail.com',
        From : "jitze.1ceusters@gmail.com",
        Subject : "Ramenwasser",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});