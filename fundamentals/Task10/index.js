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

let admin2 = {
    name: 'Admin',
    age: 123,
    salary: 2500,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

for(let admin in admin2){
    console.log(admin)
}