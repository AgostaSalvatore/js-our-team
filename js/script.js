const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

//recupero gli elementi del DOM
const nameField = document.getElementById("nameInput");
const roleField = document.getElementById("roleInput");
const emailField = document.getElementById("emailInput");
const imageField = document.getElementById("imageInput");
const sendButton = document.getElementById("send");

//ciclo per stampare i dati dei team
const createMemberCard = (member) => {
  //destrutturazione dell'oggetto
  const {name, role, email, img} = member;

  //creo il template
  const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="team-card mt-5">
                    <div class="card d-flex flex-row">
                      <img src="${img}" alt="" class="me-3" id="image">
                      <div>
                        <h3 class="mb-1 mt-3" id="name">${name}</h3>
                        <p class="mb-1" id="role">${role}</p>
                        <a href="" id="email" class="mb-0">${email}</a>
                      </div>
                    </div>
                  </div>
                </div>`
  return card;
}

//funzione che mi renderizza il contenuto
const renderTeamMembers = (array) => {
  let cards = '';
  //ciclo per stampare i dati dei team
  for (let i = 0; i < array.length; i++) {
    cards += createMemberCard(array[i]);
  }
  //aggiungo il template al DOM
  document.getElementById("team-members").innerHTML = cards;
}

// Richiamo la funzione per stampare i dati dei team
renderTeamMembers(teamMembers);

//aggiungo evento al bottone
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = nameField.value;
  const roleValue = roleField.value;
  const emailValue = emailField.value;
  const imageValue = imageField.value;

  if(!nameValue || !roleValue || !imageValue){
    alert('Compilare tutti i campi');
    return;
  }

  const newMember = {
    name: nameValue,
    role: roleValue,
    email: emailValue,
    img: imageValue
  }

  teamMembers.push(newMember);

  //rendo il form vuoto
  nameField.value = '';
  roleField.value = '';
  emailField.value = '';
  imageField.value = '';

  renderTeamMembers(teamMembers);
})
