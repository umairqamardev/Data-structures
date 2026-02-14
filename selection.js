// Har baar sabse chota element dhundho poore array mein — phir usse sahi jagah pe rakho!

let arr = [5, 3, 8, 1, 4];

for(let i = 0; i < arr.length; i++){
    let minIndex = i; // assume karo i hi sabse chota hai
    
    for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j; // naya chota mila!
        }
    }
    
    // swap karo i aur minIndex
    let swap = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = swap;
}

console.log(arr);