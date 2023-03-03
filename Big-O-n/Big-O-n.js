function countUpAndDown(n){
    console.log("Down to up");
    for(let i=0; i<n; i++){
        console.log(i);
    }

    console.log("Up to down\n");
    for(let i=n-1; i>=0; i--){
        console.log(i);
    }
}

// Time complexity is O(n)

countUpAndDown(10);