  class Address {
    constructor(zip, street) {
      this.zip = zip
      this.street = street
    }
  }
  class student {
    constructor( age ,phone){
        this.age = age
        this.phone = phone
    }
  }
  class User {
    constructor(name) {
      this.name = name
    }
  }
  
  class User_Address{
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age){
        this.user.age = age
        return this
    }
    setPhone(phone) {
        this.user.phone = phone
        return this
      }
    
    setAddress(address) {
        this.user.address = address
        return this
    }
    build() {
        return this.user
    } 
  }

  const build = new User_Address('aaaaa')
  console.log(build)
  const user = build.setAddress(new Address('12345', 'nguyen hue')).build()
  console.log(user)
  const uusers = build.setPhone(new student('12345')).build()
  console.log(uusers)