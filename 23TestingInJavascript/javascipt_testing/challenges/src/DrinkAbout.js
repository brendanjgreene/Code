whatCanIDrink = function() {
    this.value = 0;
};
 
whatCanIDrink.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};