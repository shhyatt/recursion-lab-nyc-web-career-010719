// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === ""){
    return ""
  } else {
    return reverseString(myString.substring(1)) + myString.charAt(0);
  }
}

function palindrome(myString) {
  let strLen = myString.length;
  if(strLen === 0 || strLen === 1){
    return true;
  }
    if (myString[0] === myString[strLen - 1]){
      return palindrome(myString.slice(1, strLen - 1));
    }
    return false;
  }
