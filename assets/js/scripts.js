// CREO CLASE USUARIO CON LOS ATRIBUTOS EN SU CONSTRUCTOR
class Usuario {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password
  }
  // GETTERS
  getName() {
    return `Usuario: ${this.name}`
  }
  getEmail() {
    return `Email: ${this.email}`
  }
  getPassword() {
    return `Contraseña: ${this.password}`
  }
}

// CREO UNA CLASE QUE HEREDA LA ESTRUCTURA DE LA CLASE PADRE
class NormalUser extends Usuario {
  saludar() {
    return `Bienvenido ${this.getName()}\n ${this.getEmail()} ${this.getPassword()}`
  }
}
class VipUser extends Usuario {
  saludar() {
    return `Bienvenido ${this.getName()}\n ${this.getEmail()} ${this.getPassword()}`
  }
}

const createNormalUser = () => {
  // OBTENER NOMBRE RANDOM
  let email = document.getElementById('formEmail').value
  let password = document.getElementById('formPassword').value
  const randomName = (email.substring(0, email.indexOf('@')) + Math.floor((Math.random() * 100) + 1))
  // CREO EL OBJETO QUE ALMACENA LOS DATOS DEL USUARIO NORMAL
  const normal = new NormalUser(randomName, email, password)
  console.log(normal)
  alert(normal.saludar())
}

const createVipUser = () => {
// CAPTURO DATOS DEL FORM VIP
  let nameVip = document.getElementById('formNameVip').value
  let emailVip = document.getElementById('formEmailVip').value
  let passwordVip = document.getElementById('formPasswordVip').value

// CREO EL OBJETO QUE ALMACENA LOS DATOS DEL USUARIO VIP
  const vip = new VipUser(nameVip, emailVip, passwordVip)
  console.log(vip)
  alert(vip.saludar())
}
