/**Obtiene la diferencia de años */
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

/**Calcula el total a pagar segun la marca */
export function calcularMarca(marca) {
    let incremtento;

   switch (marca) {
        case 'Europeo':
            incremtento = 1.30;
           break;
        case 'Americano':
            incremtento = 1.15;
            break;
        case 'Asiatico':
            incremtento = 1.05;
            break
       default:
           break;
   }

   return incremtento;
}

//calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primer letra mayuscula

export function primerMayusula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}