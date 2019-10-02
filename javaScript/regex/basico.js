let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc"); //true
console.log(result);
result = re2.test("aniversario en 1985");
console.log(result); //true

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13/7/1991"));//true
console.log(re3.test("18-06-1999"));//true

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

var re6 = /[aeiou]/;
console.log(re6.test("start"));//true

//Remplaza todas las vocales en la palabra correcamonos
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]/g,"*");
console.log(newMensaje);

let mensaje2 = "el 20 de enero de 2019 se dio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[0-9]{4}/g,"0");
console.log(newMensaje2);

var historia= "\ Este método tiene 2 parámetros que estan en los mas lejos del rio \ ";

var expresion = /[A-Z][a-z]+/g
result = historia.match(expresion);
console.log(result)


var expresion = /[A-Z][^aeiou ][a-z]+/g
result = historia.match(expresion);
console.log(result)

