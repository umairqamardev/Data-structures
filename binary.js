let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 11;
let left = 0;
let right = arr.length - 1;

while(left <= right){
    let mid = Math.floor((left + right) / 2);
    
    if(target == arr[mid]){
        console.log("Found at index:", mid);
        break;
    } else if(target > arr[mid]){
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}