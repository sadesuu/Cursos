
//Funcion de suma
function addNumbers(a:number,b:number){
    return a + b
}
//Funcion flecha, el simbolo $ con las comillas `` se usa para definir que se esta utilizando una variable.
const addNumbersArrow = (a:number, b:number):string =>{return `${a + b}`}
//Funcion flecha con variables opcionales
const multiply = (firstNumber:number, secondNumber?:number, base:number = 2) =>{return firstNumber * base}

// const result = addNumbers(1,2)
// const result2 = addNumbersArrow(3,4)
// console.log({result})
// console.log({result2})  
// console.log(multiply(7))



//Interfaz de personaje
interface character{
    name:string;
    hp:number;
    showHp: () => void;
}


//Funcion que permite aumentar la vida
const healCharacter = (character:character, amount:number) =>{


    character.hp += amount;

}

const hugo:character = {
    name:'Hugo',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(hugo, 10)
healCharacter(hugo, 50)

hugo.showHp()


export{}