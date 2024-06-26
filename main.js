let guests = [
  {
    name: "Paulo Santos",
    email: "paulo@gmail.com",
    registrationDate: new Date(2024, 2, 22, 19, 20),
    checkIn: null,
  },
  {
    name: "Luiza Oliveira",
    email: "luiza@gmail.com",
    registrationDate: new Date(2024, 2, 27, 19, 20),
    checkIn: new Date(2024, 2, 28, 20, 10),
  },
  {
    name: "Fulano de Tal",
    email: "fulano@gmail.com",
    registrationDate: new Date(2024, 3, 1, 15, 30),
    checkIn: new Date(2024, 3, 2, 12, 45),
  },
  {
    name: "Ciclano da Silva",
    email: "ciclano@gmail.com",
    registrationDate: new Date(2024, 3, 5, 10, 15),
    checkIn: null,
  },
  {
    name: "Beltrano Oliveira",
    email: "beltrano@gmail.com",
    registrationDate: new Date(2024, 3, 8, 20, 5),
    checkIn: new Date(2024, 3, 9, 18, 30),
  },
  {
    name: "Ana Souza",
    email: "ana@gmail.com",
    registrationDate: new Date(2024, 3, 12, 9, 40),
    checkIn: new Date(2024, 3, 13, 10, 20),
  },
  {
    name: "José Pereira",
    email: "jose@gmail.com",
    registrationDate: new Date(2024, 3, 12, 9, 40),
    checkIn: new Date(2024, 3, 13, 10, 20),
  },
  {
    name: "Maria Silva",
    email: "maria@gmail.com",
    registrationDate: new Date(2024, 3, 12, 9, 40),
    checkIn: new Date(2024, 3, 13, 10, 20),
  },
];

const newGuest = (guest) => {
  const registrationDate = dayjs(Date.now()).to(guest.registrationDate);
  let checkIn = dayjs(Date.now()).to(guest.checkIn);

  if (guest.checkIn == null) {
    checkIn = `
      <button
        data-email="${guest.email}"
        onclick="checkinConfirmed(event)"
      >
        Confirmar check-in
      </button>
    `;
  }

  return `
    <tr>
        <td>
          <strong>
            ${guest.name}
          </strong>
        
        <br>
        
        <small>
          ${guest.email}
        </small>
        </td>

        <td>
          ${registrationDate}
        </td>
        <td>
          ${checkIn}
        </td>
    </tr>
  
  `;
};

const listUpdate = (guests) => {
  let output = "";

  for (let guest of guests) {
    output = output + newGuest(guest);
  }
  document.querySelector("tbody").innerHTML = output;
};

listUpdate(guests);

const addGuest = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const guest = {
    name: formData.get("name"),
    email: formData.get("email"),
    registrationDate: new Date(),
    checkIn: null,
  };

  const guestAlreadyRegistered = guests.find((g) => {
    return g.email == guest.email;
  });

  if (guestAlreadyRegistered) {
    alert("E-mail já cadastrado!");
    return;
  }

  guests = [guest, ...guests];
  listUpdate(guests);

  event.target.querySelector("[name=name]").value = "";
  event.target.querySelector("[name=email]").value = "";
};

const checkinConfirmed = (event) => {
  const confirmMessage = "Tem certeza que deseja confirmar o check-in?";
  if (confirm(confirmMessage) == false) {
    return;
  }

  const guest = guests.find((g) => {
    return g.email == event.target.dataset.email;
  });

  guest.checkIn = new Date();
  listUpdate(guests);
};
