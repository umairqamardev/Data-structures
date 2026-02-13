let arr = [5, 8, 2, 4, 7]
let target = 13;
let flag = false;

// now we need two elements from this array on which if they are added together make the number which is stored in target variable

for(let i = 0; i < arr.length; i++){

    for (let j = i + 1; j<arr.length ; j++){

        if(arr[i] + arr[j] == target){
            console.log(i, j);
            flag = true;
            break;
        }
    }
    if(flag == true) {
        break;
    }
}