function persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`)

}
 function estudiante(nombre, edad, genero, curso, grupo){
    persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
 }

 estudiante.prototype = Object.create(persona.prototype);
 estudiante.prototype.constructor = estudiante;

 estudiante.prototype.registrar = function(){
    console.log(`Estudiante ${this.nombre} registrado en el curso ${this.curso}.`);
 }
  
 function profesor(nombre, edad, genero, asignatura, nivel){
    persona.call(this, nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
 }

  profesor.prototype = Object.create(persona.prototype);
  profesor.prototype.constructor = profesor;

  profesor. prototype.asignar = function(){
    console.log(`Profesor ${this.nombre} asignado a ${this.asignatura} (${this.nivel}).`)
  }

  const alumno = new estudiante ("lucas", 20, "masculino", "programacion", "A" );
  const profe = new profesor ("Ana", 45, "femenino", "Matematicas", "superior");

  alumno.obtDetalles();
  alumno.registrar();

  profe.obtDetalles();
  profe.asignar();
