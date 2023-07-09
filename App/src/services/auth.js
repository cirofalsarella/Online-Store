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

  if(localStorage.getItem('userList') === null) {
    localStorage.setItem('userList', JSON.stringify(userList));
  }

  if (localStorage.getItem('userId') === null) {
    localStorage.setItem('userId', "none");
  }
} 

export default Auth;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const authenticate = async event => {
  try {
    await delay(1000);
  }
  catch (e) {
      console.log(e)
  }
}




