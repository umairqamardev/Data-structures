let str = "Pakistan";
let arr = str.split("");
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
console.log(arr.join(""));


// string to array "carzone" -> "carzone".split("") = ['c','a','r','z','o','n','e']
// array to string "['c','a','r','z','o','n','e']" -> ['c','a','r','z','o','n','e'].join("") = "carzone"

// JS me strings immutable yani changable nahi hoti hum arr[0] = 'X' toh karkste hai per str[0] = 'S' ni krskte kabhi bhi.