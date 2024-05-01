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
        Username : "ceusterscleaning@gmail.com",
        Password : "1DBB31CA017524F191F629820F682F4DEA53",
        To : 'ceusterscleaning@gmail.com',
        From : "ceusterscleaning@gmail.com",
        Subject : "Ramenwasser",
        Body : bodyMessage
    }).then(
      message => {
          if (message == "OK") {
              Swal.fire({
                  title: "Succesvol verstuurd",
                  text: "Wij antwoorden zo snel mogelijk op uw vragen",
                  icon: "success"
                });
          }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
