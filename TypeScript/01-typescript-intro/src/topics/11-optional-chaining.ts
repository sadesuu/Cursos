export interface Passenger {
    name:string;
    children?:string[];
}

const passenger1:Passenger = {
    name:'Hugo'
}

const passenger2:Passenger = {
    name:'Adrian',
    children: ["Misael", "Figueroa"]
}

const printChildren = (passenger:Passenger):number => {

    //Optiona Chaining permite encadenar comprobaciones
    
    //Indicamos que si se encuentran hijos se diga el numero de hijos sino(||) diga 0.
    const howManyChildren = passenger.children?.length || 0
    //Indicamos que siempre va ha encontrar hijos.
    const noNullOperator = passenger.children!.length

    console.log(passenger.name,howManyChildren)
    return howManyChildren + noNullOperator;
}

printChildren(passenger2)
printChildren(passenger1)
