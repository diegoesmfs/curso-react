var nombre = "diego morales";
var altura = 167;


/* datos.innerHTML = `

    <h1> Soy el div de datos </h1>
    <h2> mi nombre es: ${nombre} </h2>
    <h3>mido: ${altura} </h3>
`;

if(altura >= 180){

    datos.innerHTML += `

    <h2> mi nombre es: ${nombre} </h2>
    <h3> eres alto wow: ${altura} </h3>
`;

}
else if(altura < 170 ){

    datos.innerHTML += `

    <h2> mi nombre es: ${nombre} </h2>
    <h3> eres enano: ${altura} </h3>
`;

}

for(var i = 2000; i <= 2025; i++){

    datos.innerHTML += ` <h1> Año: ` + i;

} */

function showMyName(nombre, altura) {

    var misDatos = `

    <h1> Soy el div de datos </h1>
    <h2> mi nombre es: ${nombre} </h2>
    <h3>mido: ${altura} </h3>
    `;

    return misDatos

}

function show(){

    var datos = document.getElementById("datos");

    datos.innerHTML = showMyName("Diego Morales", 167);

}

show();

var nombres = ["aja", "diego", "luigui"];
/*
for(i = 0; i < nombres.length; i++){

    document.writeln(nombres[i] + '<br>');

}
*/

nombres.forEach((nombre) =>{

    document.writeln(nombre + '<br>');

});

var coche = {

    modelo: 'mercedez clase A',
    maxima: 500,
    annioEnsamblaje: 2020,
    showData(){

        console.log(this.modelo, this.maxima, this.annioEnsamblaje);

    },
    propiedad: "cualquier cosa"

};

document.writeln("<h1>" + coche.annioEnsamblaje + "</h1>");
coche.showData();

//promises
var salute = new Promise((resolve, reject) => {

    setTimeout(() => {

        let saludo = "Muy buenas tardes";
        saludo = false;
        if(saludo){

            resolve(saludo);

        } else{

            reject("no hay saludo");

        }

    }, 2000);

});

salute.then(result => {

    alert(result);

}).catch(err => {

    alert(err);

});