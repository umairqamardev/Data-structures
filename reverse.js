let arr = [1,2,3,4,5];
let swap;
let left = 0;
let right = arr.length - 1;
while(left < right){
    swap = arr[left];
    arr[left] = arr[right];
    arr[right] = swap;
    left++;
    right--;
}
console.log(arr);