Spinal- freeCodeCamp
Bonfire: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.replace()


function spinalCase(str) {
  str = str.replace(/_/g, " ");
  str = str.replace(/[A-Z]/g, function($1) { return " " + $1.toLowerCase();});
  str = str.replace(/\s\s/g, " ");
  str = str.trim();
  str = str.split(' ').join('-');
  return str;
}

spinalCase('The_Andy_Griffith_Show');
-------------------------------------------

function spinalCase(str) {
 str.replaceAll("^+|+$|(?<=)", " ").replaceAll(" ", "-").join().toLowerCase();

  return str;
}

spinalCase('This Is Spinal Tap');
---------------------------------------
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');
