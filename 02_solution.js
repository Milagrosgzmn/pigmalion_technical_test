
const isPossibleToSum = (arrayNums, requiredSum)=>{

    if(arrayNums.length<2) return false;

    const alreadySeenNums = new Set(); // Creamos un conjunto de valores unicos 
                                        //para almacenar los números ya evaluados
    for (let i = 0; i < arrayNums.length; i++) {
        
        const num = arrayNums[i];
        const difference = requiredSum-num;

        if(alreadySeenNums.has(difference)) return true;    // Verificamos si el conjunto de numeros tiene
                                                            // la pareja necesaria para formar el valor requerido.
        alreadySeenNums.add(num);
    }
    return false;
};

const result = isPossibleToSum([1,2,4,4], 8);