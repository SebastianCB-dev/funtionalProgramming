
function getTotalCurry(t: number) {
    
    let tax: number = t;
    
    return (amount: number) => amount + ( amount + tax )
}

const getTotal = ( amount: number, tax: number ) => {
   return amount + (amount * tax);
}

console.log( getTotal(100, 0.16) );

const calc = getTotalCurry(0.16);

console.log( calc(100) );

console.log(getTotalCurry(0.16)(200));




