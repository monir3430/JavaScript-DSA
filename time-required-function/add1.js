function add(n){
    let total = 0;
    for(let i=0; i<n; i++){
        total +=i;
    }
    return total;
}
let time1 = performance.now();
add(10000000);
let time2 = performance.now();
console.log(`Time Required = ${(time2-time1)/1000} seconds`);