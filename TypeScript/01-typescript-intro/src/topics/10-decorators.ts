
//Decorador, son funciones que permiten implementar funcionalidades a demas funciones, por ejemplo el decorador 'module' en Angular.
function classDecorator<T extends { new (...args:any[]):{} }>(
    constructor: T
){

    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override'
    }
}

//Indica que esta funcion esta usando ese decorador.
@classDecorator
class SuperClass{


    public myProperty:string = 'Abc123'
    print(){
        console.log('Hola mundo')
    }
}

console.log(SuperClass)

const clase = new SuperClass()
console.log(clase)


