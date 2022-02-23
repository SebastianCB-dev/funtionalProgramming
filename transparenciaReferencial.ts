

const numbers: number[] = [5,6,4,2,1,8,9,4,22];

function sort( list: number[] ) {
    return list.sort();
}

console.log( sort(numbers) );
console.log( numbers );

const numbers2: readonly number[] = [1,2,3,4,5,0,9,18];
// numbers2.push(5); => error

function sort2( list: readonly number[] ) {
    return [...list].sort();
}


