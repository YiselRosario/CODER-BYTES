in FREECODERCAMP PAGE:

Coder Byte: Latin pig


function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1;
}

function translate(str) {
  var latinPig = str.split('');
  if (isVowel(latinPig[0]) === true){
      latinPig.push("way");
      str= latinPig.join("");
  }else{
      if(isVowel(latinPig[0]) === false && isVowel(latinPig[1]) === false && isVowel(latinPig[latinPig.length -1]) === true){
       latinPig.push(latinPig[0] +latinPig[1]+ "ay");
       latinPig.splice(0,2);
      str= latinPig.join("");
      }else{
      latinPig.push(latinPig[0] + "ay");
      latinPig.splice(0,1);
      str= latinPig.join("");
      }
  }
 return str;
}
translate("consonant");
