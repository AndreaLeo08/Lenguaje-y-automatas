console.log("TODAS LAS PALABRAS QUE TENGAN UNA LONGITUD DE 7 O MAS LETRAS");

let texto = "Rememora y transmite las interesantes historias que contienen los cuentos";
let newMensaje = texto.replace(/[a-z]{7,}/g," ");
console.log(newMensaje);


console.log("EXPRESIONES QUE NO FINALICEN CON UNA VOCAL");

let newMensaje2 =(/[^aeiou]$/g);
console.log("loro");
console.log(newMensaje2.test("loro"));
console.log("fresas");
console.log(newMensaje2.test("fresas"));


console.log("LAS PALABRAS QUE INICIEN CON M DONDE LA SEGUNDA LETRA NO SEA VOCAL");

let newMensaje3 =/(M|m)[^aeiou+][a-z](\w{0,})/;
console.log("mango");
console.log(newMensaje2.test("mango"));
console.log("McDonald´s");
console.log(newMensaje2.test("McDonald´s"));


console.log( "EXPRESIONES ENCERRADAS ENTRE COMILLAS"); 

var historia = "\ Joe vuela un 'papalote' en las afueras \
de la 'calle' en donde hay mucho viento y 'frio' pero depues vuelve a su 'casa'";
var expresion = /"([^"]*)"|'([^']*)'/g;
result = historia.match(expresion);
console.log(result);


console.log("IP´s");

var texto4 = "las direcciones de las redes 192.168.1.2 y 20.0.1.1";
var newMensaje4 = /([0-9](\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3}))/g;
ip = texto4.match(newMensaje4);
console.log(ip);


console.log("HORAS");

var texto5 = " \ El 31 de Diciembre a las 12:59pm se celebra año viejo y 1 de Enero \
a las 12:01am año nuevo";
var newMensaje5 = /([0-9](\d{1,2})[:](\d{1,2})( |)(pm|am))/g;
hora = texto5.match(newMensaje5);
console.log(hora);


console.log("TELEFONOS");

var texto6 = " \ numero de llamada de telefonos 985 111 166 \
               numero de llamada de telefonos  985 104 56284 ";
var newMensaje6 = /([0-9]((\d{1,3})( |)(\d{1,3})( |)(\d{1,4})))/g;
numero = texto6.match(newMensaje6);
console.log(numero);


console.log("CORREOS ELECTRONCOS");

let entradaCorreo = /(\W{0,}|\w{0,})(@)(gmail|outlook|hotmail)(.com|.es|.mx)/;
console.log(entradaCorreo.test("Correo que uso es andreaG@outlook.com"));


console.log( "Url´s");

let entradaURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log(entradaURL.test("http://w3chools.aprende.com/libros.html"));


console.log( "CODIGO POSTAL");

let entradaCP = /[0-9]{5,}/;
console.log(entradaCP.test("Codigo postal de valladold es el 97780"));