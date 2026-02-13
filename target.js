let arr = [2,4,6,7,9];
let tar = 12;
let flag = false;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == tar){
        console.log("found");
        flag = true;
        break;
    }
}
if(flag == false){
    console.log("not found");
}