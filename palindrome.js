let str = "mate";
let left = 0;
let right = str.length - 1;
while(left < right){
    if(str[left] == str[right]){
        left++;
        right--;
    }
    else{
      console.log("not a palindrome");
      break;
    }
}

if(left >= right){
    console.log("its a palindrome");
}
