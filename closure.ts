
function counter(n : number = 1) {
    let number = n;


    return () => {
        console.log("Hola " + number++);
    }
}


const myClosure = counter();

myClosure();
myClosure();
myClosure();





