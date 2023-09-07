export class Contact {
    constructor(private name: string, private email: string, private phone: number) { }
    getName() { return this.name; }
}

export class ContactBook {
    private contacts: Contact[] = [];

    addContact(newContact: Contact): void {
        this.contacts.push(newContact)
    }
    findOneContact(nombre: string): Contact[] {
        return this.contacts.filter((contacto) => contacto.getName().toLocaleLowerCase() === nombre.toLocaleLowerCase());
    }
    getContactList():any{
        return this.contacts.map((contacto) => contacto.getName())
    }
}

// ejemplo de uso // copiar en index.ts
// const contacto1 = new Contact("manolo","correo1@yahoo",123456789)
// const contacto2 = new Contact("renata","correo1@yahoo",987654321)

// const agenda=new ContactBook()

// agenda.addContact(contacto1)
// agenda.addContact(contacto2)

// console.log(agenda);
// console.log(agenda.findOneContact("manolo"));
// console.log(agenda.getContactList());