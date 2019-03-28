
const alumnos = [
    { nombre: 'German David Neira Rivera', edad: 23 },
    { nombre: 'Santiago Pascual Plaus', edad: 32 },
    { nombre: 'Santiago Canosa', edad: 40 },
    { nombre: 'Francisco Campos', edad: 46 },
    { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
    { nombre: 'Juanse Calviño', edad: 28 },
    { nombre: 'Jorge Roldan', edad: 31 },
    { nombre: 'Leymar Gutierrez', edad: 42 },
    { nombre: 'Juan Jose Diaz', edad: 27 },
    { nombre: 'Matias Fernandez', edad: 29 },
    { nombre: 'Leandro Amaro', edad: 26 },
    { nombre: 'Franco Carini', edad: 31 },
    { nombre: 'Francisco Escobar Sabio', edad: 28 },
    { nombre: 'Pilar Castro', edad: 27 },
    { nombre: 'Sebastian Rodriguez', edad: 31 },
    { nombre: 'Carlos Martin Rodriguez', edad: 28 },
    { nombre: 'Pablo Aramayo', edad: 33 },
  ]
  
  // DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
  
// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

const arrString = alumnos.map(({nombre}) => nombre )
console.log("Ejer 1", arrString)
  
// 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()
  
const arrString30 = alumnos.filter(alumno => {
    return alumno.edad > 30
})
console.log("Ejer 2", arrString30)

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)

const arrStringReduce = alumnos.reduce((contador, alumno)=> {
    return alumno.edad + contador
},0)

console.log("Ejer 3", arrStringReduce)
   
// 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado

const arrAlumno = alumnos.find(alumno =>  alumno.nombre === 'Leandro Amaro')
if(arrAlumno){
  const {edad} = arrAlumno
  console.log("Ejer 4: Edad", edad)
}
 
// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
 const [primerAlumno,...restoAlumnos] = alumnos
 const { nombre : nombrePrimerAlumno } = primerAlumno
 console.log("Ejer 5: Nombre primer alumno:", nombrePrimerAlumno)
  
 // 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()
  const alumnosFArray = alumnos.filter(alumnoF => {
  return alumnoF.nombre[0] == 'F'
  })
  console.log("Ejer 6:",alumnosFArray)
  
  // 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const alumnosMasProp = alumnos.map(alumno => {
  return {...alumno,sexo:'M'}
})

console.log("Ejer 7:",alumnosMasProp)