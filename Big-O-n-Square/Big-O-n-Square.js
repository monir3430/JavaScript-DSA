function nestedLoop(n){
    for(let i=0; i<n; i++){
        console.log(i);
        for(let j=0; j<n; j++){
            console.log(`Nested: ${j}`);
        }
    }
}
// Time Complexity of O(n)
nestedLoop(10);