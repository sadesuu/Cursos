
//Interfaz de super Heroe.
interface SuperHero{
    name:string,
    age:number,
    address: Address
    showAddress: () => string
}

//Interfaz de direccion.
interface Address {
        street: string
        country:string
        city:string
}

//Interfaz de super heroe que contiene dentro la interfaz de direccion.
const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHero.showAddress();
console.log(address)




export{}