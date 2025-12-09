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
    const howManyChildren = passenger.children?.length || 0
    const noNullOperator = passenger.children!.length

    console.log(passenger.name,howManyChildren)
    return howManyChildren + noNullOperator;
}

printChildren(passenger2)
printChildren(passenger1)
