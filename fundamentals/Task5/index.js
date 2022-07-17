let admin = {
   name: "Person",
   age: 123,
   salary: 1542.33,
   contacts: {
   phone: "112",
   email: "email@domain.com"
 },
   address: "Moldova"
   }
   Object.assign(admin,{phone: "+37312345678`"} )
    delete admin.address
   console.log(admin)
