
function isPalindrome(word)
{
 var x = word.length;
 var  cInvertida = "";
 while (x>=0) {
  cInvertida = cInvertida + word.charAt(x);
  x--;
 }
 if(cInvertida.upper()===word.upper())
   return true;
 else
   return false;
}
var word = readline();
print(isPalindrome(word))