// Esta función verifica si es posible obtener el valor requerido, dado por parametro,
// al sumar dos elementos del array que tambien es pasado como parametro.

const isPossibleToSum = (arrayNums, requiredSum)=>{

    if(arrayNums.length<2) return false; // Si el array ni siquiera cuenta con 2 elementos, retornamos falso.

    for (let i = 0; i < arrayNums.length; i++) {
        for (let j = i+1; j < arrayNums.length; j++) {          /*  Usamos bucles anidados para comprobar 
                                                                    todas las combinaciones de pares posibles. */
            if(arrayNums[i]+arrayNums[j] === requiredSum){  
                // Verificamos si la suma de valores actuales es igual a la requerida.
                return true;
            }
        }
    }
    return false; // si no se encuentra combinacion que coincida con la suma requerida, retornamos falso.
};

const result = isPossibleToSum([1,4,3,9], 8);

console.log(result);