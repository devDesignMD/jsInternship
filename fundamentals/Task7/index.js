let person = {
    name: 'Person',
    get Name(){
        return this.name;
    },
    age: 123,
    get Age(){
        return this.age;
    },
    salary: 1538.55,
    contacts: {

        phone: '112',
        email: 'admin@mail.ru',

        get fullContacts(){
            return `${this.phone} ${this.email}`;
        }
    },
    adress: 'Moldova',
    get Adress(){
        return this.adress;
    }
}
console.log(person.contacts.fullContacts)
console.log(person.Adress)