free coder camp:

Bonfire: Sum All Odd Fibonacci Numbers
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var fib0 = 1
var fib1 = 1
var sum = Odd
function sumFibs(num) {
  for(var i=0 t=1; i+t<= newNum.lenght; i++)
    i.lenght + (i.lenght -1) = newNum;
    

  return num;
}

sumFibs(4);

Jeremy's  soloution'
-----------------------------------------
function sumFibs(num) {
  var lastNum = 2;
  var nums = [1,1];
  var lastIndex = 1;
  while(lastNum<=num){
    nums.push(nums[lastIndex] + nums[lastIndex -1]);
    lastNum = nums[lastIndex];
  }
  //this part is to remove a number greater than the number use to check the code. example, we use 4 here, so we pop out 5.
  if(lastNum > num) nums.pop();
  for(var i=0; i<nums.lenght; i++{
      if(nums[i] % 2 !== 0) sum += nums[i];
      })
  return num;
}

sumFibs(4);
