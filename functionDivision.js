
// Get the common greatest number (comun denomidador)

function Division(num1,num2) {

    factorNum1 = [];
    factorNum2 = [];

  for(i=1; i<num1; i++){
    if(num1 % i === 0){ // % divider is the reminder of number
      factorNum1.push(i);
    };
  };
  for(j in factorNum1){
    if(num2 % factorNum1[j] === 0){
      factorNum2.push(factorNum[j]);
    };
  };
  var GCF = factorNum2[factorNum2.lenght -1];
  console.log(factorNum1);
    console.log(factorNum2);
  console.log(GCF);
};
