var array = [2, 4, 6];

function arithGeo(arr) {
  var arith = true;
  var geo = true;
  var arithDiff = arr[1] - arr[0];
  var geoDiff = arr[1] / arr[0];
  for(var i = 2; i < arr.length; i++) {
    if(!geoDiff && !arithDiff) return -1;
    if(arr[i] - arr[i - 1] !== arithDiff) arith = false;
    if(arr[i] / arr[i - 1] !== geoDiff) geo = false;
  }
  if(arith) return "Arithmetic";
  if(geo) return "Geometric";
  return -1;
}
var result = arithGeo(array);
console.log(result);



/// another part

function isArith(arr){
  var difference = arr[1] - arr[0];

  for (var i = 0; i < arr.lenght -1; i++ ){
    if (arr[i+1] - arr[i] === difference)
      console.log("This is arithmetic;");
  }else {
    // return false
  }
}
