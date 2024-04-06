let guests = [
  {
    name: "Mayk Brito",
    email: "mayk@gmail.com",
    registrationDate: new Date(2024, 2, 22, 19, 20),
    checkIn: new Date(2024, 2, 25, 22, 10)
  },
  {
    name: "Diego Fernandes",
    email: "diego@gmail.com",
    registrationDate: new Date(2024, 2, 27, 19, 20),
    checkIn: new Date(2024, 2, 28, 20, 10)
  },
  {
    name: "Fulano de Tal",
    email: "fulano@gmail.com",
    registrationDate: new Date(2024, 3, 1, 15, 30),
    checkIn: new Date(2024, 3, 2, 12, 45)
  },
  {
    name: "Ciclano da Silva",
    email: "ciclano@gmail.com",
    registrationDate: new Date(2024, 3, 5, 10, 15),
    checkIn: new Date(2024, 3, 6, 8, 0)
  },
  {
    name: "Beltrano Oliveira",
    email: "beltrano@gmail.com",
    registrationDate: new Date(2024, 3, 8, 20, 5),
    checkIn: new Date(2024, 3, 9, 18, 30)
  },
  {
    name: "Ana Souza",
    email: "ana@gmail.com",
    registrationDate: new Date(2024, 3, 12, 9, 40),
    checkIn: new Date(2024, 3, 13, 10, 20)
  },
  {
    name: "José Pereira",
    email: "jose@gmail.com",
    registrationDate: new Date(2024, 3, 15, 17, 55),
    checkIn: new Date(2024, 3, 16, 15, 45)
  },
  {
    name: "Maria Silva",
    email: "maria@gmail.com",
    registrationDate: new Date(2024, 3, 18, 12, 0),
    checkIn: new Date(2024, 3, 19, 14, 30)
  },
  {
    name: "Luiza Oliveira",
    email: "luiza@gmail.com",
    registrationDate: new Date(2024, 3, 22, 14, 20),
    checkIn: new Date(2024, 3, 23, 16, 10)
  },
  {
    name: "Paulo Santos",
    email: "paulo@gmail.com",
    registrationDate: new Date(2024, 3, 25, 8, 45),
    checkIn: new Date(2024, 3, 26, 11, 20)
  }
]

const newGuest = (guest) => {
  const registrationDate = dayjs(Date.now()).to(guest.registrationDate)
  const checkIn = dayjs(Date.now()).to(guest.checkIn)

  return `
    <tr>
        <td>
          <strong>
            ${guest.name}
          </strong>
        </td>
        <br>
        <small>
          ${guest.email}
        </small>
        <td>
          ${registrationDate}
        </td>
        <td>
          ${checkIn}
        </td>
    </tr>
  
  `
}

const listUpdate = (guests) => {
  let output = ''

  for(let guest of guests) {
    output = output + newGuest(guest)
  }
  document
  .querySelector('tbody')
  .innerHTML = output
  
  }

listUpdate(guests)

const addGuest = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const guest = {
    name: formData.get('name'),
    email: formData.get('email'),
    registrationDate: new Date(),
    checkIn: null
  }

  guests = [guest, ...guests]
  listUpdate(guests)
}