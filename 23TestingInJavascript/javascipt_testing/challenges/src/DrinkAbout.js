whatCanIDrink = function() {
 	this.age = 0;
};

whatCanIDrink.prototype.add = function(number) {
	if (this.age+number<0){
    alert("Sorry. I can’t tell what drink because that age is incorrect!");
	}
   	else if (this.age+number<14){
    alert("Drink Toddy");
    }
    else if (this.age+number<18){
    alert("Drink Coke");
    }
    else if (this.age+number<21){
    alert("Drink Beer");
    }
    else if (this.age+number<130){
    alert("Drink Whisky");
    }
    else alert("Sorry. I can't tell what drink because the age is incorrect!");
};

