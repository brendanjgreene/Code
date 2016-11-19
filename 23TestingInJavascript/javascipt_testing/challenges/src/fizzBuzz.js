fizzBuzz = function() {
 	this.value=0;
};

fizzBuzz.prototype = function(number) {
	if (number % 3 && number %5) {
		return "FizzBuzz";
	}
	
};
