//EJERCICIO 1
//Un maestro desea saber qué porcentaje de hombres y qué porcentaje de 
//mujeres hay en un grupo de estudiantes. 
//Elaborar un programa que permita ingresar la cantidad de varones y mujeres y 
// muestre el porcentaje de estos para su grupo de estudiantes.

let num =parseInt(prompt("ingresar la cantidad de varones "));
let num2 =parseInt(prompt("ingresar la cantidad de mujeres"));
let total =num+num2
alert(`el porcentaje de estos es :  ${(num/(total)*100)}% y ${((num2/(total))*100)}%`);