
let nombre: string = "RCR"
// nombre = 35

let datos:string|number=95
datos = "IDGS123"
let vivo:boolean=true

console.log(vivo)


// objetos, arreglos, interfaces
let mascotas = ['perro','gato',100,true]
let tem:(boolean|number|string)[]=['aaaa',100]
let nombres:string[]=['Juan','Pedro','Mario']
interface Persona{
    nombre:string;
    grupo:string;
    edad:number;
    materias:string[];
    activo?:string;
}

const alumno:Persona={
    nombre: 'Mario',
    grupo: 'IDGS123',
    edad: 23,
    materias: ['Español'],
    grupoo: function (): void {
        throw new Error("Function not implemented.")
    }
}
alumno.activo='inscrito'
console.table(alumno)

let vector: number[]=[1,4,3];
vector[2]=8
vector.push(9)
for(let elemento of vector)
console.log(elemento)



  