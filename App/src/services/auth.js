const Auth = () => {
  const userList = [
    {
      id: 0,
      username: "admin",
      email: "admin@civ.com",
      cpf: "123.456.789-10",
      address: "Trabalhador são carlense, 200 - São Carlos, SP",
      password: "admin",
      admin: true
    },
    {
      id: 1,
      username: "user",
      email: "user@civ.com",
      cpf: "123.456.789-10",
      address: "Trabalhador são carlense, 200 - São Carlos, SP",
      password: "user",
      admin: false
    }
  ]

  localStorage.setItem('userList', JSON.stringify(userList));
}

export default Auth;