// EJERCICIO 2
// La municipalidad de Pueblo Libre piensa invertir cierto monto 
// dinero en la reparación de las pistas en las avenidas principales.
// Desarrollar un pseudocódigo que permita ingresar un monto de inversión en soles y
// lo reparta en la refacción de cinco avenidas de la siguiente manera: 

// a. Avenida La Mar - 35% del monto 
// b. Avenida Abancay - 25% del monto 
// c. Avenida 28 de Julio - 10% del monto 
// d. Avenida Aviación - 15% del monto 
// e. Avenida Tacna - restante del monto 

let num=prompt("ingresar un monto de inversión en soles");
let rest= 100-((num*.35)+(num*.25)+(num*0.1)+(num*.15));
alert(`la refacción de cinco avenidas de la siguiente manera: ${num*.35}% para Av La mar
,${num*.25}% para Av Abancay,${num*0.1}% para Av 28 de Julio , ${num*.15}% para Av Aviacion, 
 ${rest}% para Av Tacna)]`);