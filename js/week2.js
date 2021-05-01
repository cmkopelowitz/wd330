function checkPalindrome(){
  //get word from input and sanitze it
  const word = document.getElementById("input-word").value.trim().toLowerCase();
  
  if (word == "") { //if nothing was typed into input
    alert("please type a word")
    return;
  }

  //split the string into a char array, reverse it, and rejoin it into a string
  const revWord = word.split('').reverse().join('');

  if (word == revWord) { //word is a palidrome 
    //alert("it is a palindrome!");
    document.getElementById("response").innerHTML = 
    `<div>\"${word}\" is a palindrome</div>`;
  } else { //word is not a palindrome
    document.getElementById("response").innerHTML = 
    `\"${word}\" is not a palindrome`;
  }
  return;
}