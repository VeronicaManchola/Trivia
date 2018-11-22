const inputName  = document.getElementById ("nameExample");
const oculto = document.getElementById ("oculto")
let score =0


function respuestaCorrecta(){
   score++
}
function jugar(){
   let name = inputName.value
   oculto.innerHTML= `¡Hola ${name} ! Selecciona que categoria deseas jugar : <br></br>
   <button onClick=" Refranes()">Refranes</button><br></br>
   <button onClick=" desafioMusical()">Desafio Musical</button>`
}
function Refranes(){
score=0
oculto.innerHTML = `Pregunta 1 de 3: <br><br>
A palabras necias oidos... <br></br>
<button onClick="resp1()">Gordos</button><br></br>
<button onClick="respuestaCorrecta(); resp1()">Sordos</button><br></br>
<button onClick="resp1()">Limpios</button>`
}
function resp1(){
   oculto.innerHTML = `Pregunta 2 de 3: <br><br>
   A quien madruga ... <br></br>
   <button onClick="resp2()">Le da sueño</button><br></br>
   <button onClick="respuestaCorrecta(); resp2()">Dios le Ayuda</button><br></br>
   <button onClick="resp2()">Alcanza a tomar desayuno</button>`
}
function resp2(){
   oculto.innerHTML = `Pregunta 3 de 3 : <br><br>
    A caballo Regalado... <br></br>
   <button onClick="totales()">Hay que amaestrarlo</button>  <br></br>
   <button onClick="respuestaCorrecta(); totales()">No se le miran los dientes</button><br></br>
   <button onClick="totales()">Dale las gracias a quien te lo regalo</button><br></br>`
}
function totales(){
   let name=inputName.value
   oculto.innerHTML = `${name} : ¿Quieres ver tus resultados? <br></br>
   <button onClick="resultados()">Calcular!</button>`
}
function resultados(){
   oculto.innerHTML = `Tu puntaje es ${score}<br></br>
   <button onClick="jugar()"> Comenzar Nuevamente </button><br></br>
   <button onClick="jugar()"> Cambiar Categoria </button><br></br>`
}
function desafioMusical(){
   score=0
   oculto.innerHTML = `Pregunta 1 de 3 :<br><br>
    Si no supieste amar... <br></br>
   <button onClick="respuestaCorrecta(); com1()">Ahora te puedes marchar</button><br></br>
   <button onClick="com1()">Vete y date la vuelta</button><br></br>
   <button onClick="com1()">Me rompiste el corazon</button>`
}function com1(){
       oculto.innerHTML = `Pregunta 2 de 3: <br><br>
       Que hace rato esta mi corazon ...<br></br>
   <button onClick="com2()">Enamorado de ti</button><br></br>
   <button onClick="com2()">Sufriendo por ti</button><br></br>
   <button onClick="com2();"respuestaCorrecta()">Latiendo por ti</button><br></br>`
}
function com2(){
       oculto.innerHTML = `Pregunta 3 de 3 :<br><br>
       Mañana voy a caer ... <br></br>
   <button onClick="com3()">A tus brazos</button><br></br>
   <button onClick="com3();"respuestaCorrecta()">A tus pies</button><br></br>
   <button onClick="com3()">A tus manos</button><br></br>`
}
function com3(){
   let name=inputName.value
   oculto.innerHTML = `${name} ¿Quieres ver tus resultados? <br></br>
   <button onClick="result2()"> Calcular!</button>`
}
function result2(){
   oculto.innerHTML = `Tu puntaje es ${score} <br></br>
   <button onClick="jugar()"> Comenzar Nuevamente </button><br></br>
   <button onClick="jugar()"> Cambiar Categoria </button><br></br>`
}