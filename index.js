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

function reverseString(string){
  if(!string.length){return ""}
  return  reverseString(string.substring(1, string.length)) + string[0]
}

function isPalindrome(string) {
  let l = string.length;

  if (l < 2) {
    return true;
  } else if (string[l - 1] === string[0]) {
    return isPalindrome(string.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(array,index){
  return index ? array[index] + addUpTo(array,index-1) : array[index]
}


function maxOf(array){
  if(array.length ===1){ 
    return array[0]
  }
  return Math.max(array.pop(),maxOf(array))
}

function includesNumber(array,num) {
  alert(array)
  if(!array.length){
    return false
  }
  if(array.shift() === num){
    return true
  }
  return includesNumber(array,num)
}