export class Contact {
    constructor(private name: string, private email: string, private phone: number) { }
    getName() { return this.name; }
}

export class ContactBook {
    contacts: Contact[] = [];

    constructor() { this.contacts = []; }

    addContact(newContact: Contact): void {
        this.contacts.push(newContact)
    }
    findOneContact(nombre: string): Contact | undefined {
        return this.contacts.find((contacto) => contacto.getName().toLocaleLowerCase() === nombre.toLocaleLowerCase());
    }
    getContactList():Array<string>{
        const list:string[]=[];
        this.contacts.forEach(e => {
            list.push(e.getName());
        });
        return list;
    }
}

// ejemplo de uso
// const contacto1 = new Contact("manolo","aasdf",123456789)
// const contacto2 = new Contact("renata","aasdf",123456789)

// const agenda=new ContactBook()

// agenda.addContact(contacto1)
// agenda.addContact(contacto2)

// console.log(agenda);
// console.log(agenda.findOneContact("manolo"));
// console.log(agenda.getContactList());