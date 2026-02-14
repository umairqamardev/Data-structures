let arr = [5, 3, 8, 1, 4];
let swap;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[j+1]){
            swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}

console.log(arr);

// saath wale 2 compare karta rehta hai