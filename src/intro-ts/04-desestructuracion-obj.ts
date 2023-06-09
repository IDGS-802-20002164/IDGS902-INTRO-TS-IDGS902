interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;

}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:12345,
    nombre:"mario",
    edad: 23,
    correo: 'mario@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023,
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`el año del grupo es: ${alumno2.grupo.year}`)

const {matricula1,grupo:xx}= alumno2
const{grupo}= xx

//destructuracion de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

const[a,,b]=gps;
console.log(`grupo 1: ${a}`)