function add2(n){
let total = n*(n+1)/2;
return total;
}

let t1 = performance.now();
add2(10000000);
let t2 = performance.now();

console.log(`Time required = ${t2-t1} seconds`);