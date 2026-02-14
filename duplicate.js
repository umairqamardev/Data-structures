let arr = [5, 3, 5, 1, 3, 2];
let arr1 = [];
for(let i = 0; i < arr.length; i++){
    let flag = false;
    for(let j = 0; j < arr1.length; j++){
        if(arr[i] == arr1[j]){
            flag = true;
            break;
        }
    }
    
    if(flag == false){
        arr1.push(arr[i]);
    }
}
console.log(arr1);