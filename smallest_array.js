let arr = [8, 3, 11, 1, 6];
let small = arr[0];
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] < small){
     small = arr[i];
    }
}
console.log(small);

