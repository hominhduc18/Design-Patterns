class Address {
    constructor(zip, address) {
        this.zip = zip;
        this.address = address;
    }
}

class User {
    constructor(name, age, phone, address) {
      this.name = name
      this.age = age
      this.phone = phone
      this.address = address
    }
  }
  
  const user = new User('Bob')
  console.log(user)
  // tạo như này thì nhin ra những giá trị mà user ko có thì nó sẽ hiển thị undefined




  