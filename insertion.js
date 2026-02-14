let arr = [5,3,8,1,4];
for(let i = 1; i < arr.length; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr);

// left wala sorted part hai aur right wala unsorted part hai
// har baar unsorted part ka pehla element uthao aur usse 
// sorted part mein sahi jagah pe insert karo!