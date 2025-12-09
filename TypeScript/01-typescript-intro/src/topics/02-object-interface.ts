

//Variable mutable que contiene un Array de habilidades.
let skills = ['Bash', 'Counter', 'Healing']


//Interfaz de personaje(Molde para crear un personaje)
interface Character {
    name: string;
    hp: number;
    skills: string[];
    //? significa opcional/undefind
    hometown?: string;
}


//Constante de tipo Personaje la cual contiene los atributos de la interfaz
const strider: Character = {
    name: 'Strader',
    hp: 100,
    skills: ['Bash', 'Counter']
};


strider.hometown = 'Rivendell'

console.table(strider)


export{}