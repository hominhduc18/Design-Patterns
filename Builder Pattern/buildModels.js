class Address {
    constructor(zip, street) {
      this.zip = zip
      this.street = street
    }
  }
  
  class User {
    constructor(name, { age, phone = '1234567890', address } = {}) {
      this.name = name
      this.age = age
      this.phone = phone
      this.address = address
    }
  }
  
  let user = new User('Bob', { address: new Address('12345', 'fdssdff.') })
  console.log(user)