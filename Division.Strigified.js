function DivisionStringified(num1,num2) {

  // Divide numbers, Round, Store in variable
	var answer = Math.round(num1/num2);

	//Return as string
	answer = answer.toString();

	//Split each digit into an array
	answer = answer.split("");

	var index = -3;

	//Check if it's less than 3 digits
	while (answer.length > 3){

	//splice a comma in
	answer.splice(index, 0, ",")
	//increment through array 3 digits
	index -= 4;

	}

	console.log(answer);

}

DivisionStringified(100000, 2);
