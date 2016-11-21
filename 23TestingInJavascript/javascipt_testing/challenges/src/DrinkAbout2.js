whatCanIDrink = function(number) {
    if (number<0){
    alert("Sorry. I can’t tell what drink because that age is incorrect!");
    }
    else if (number<14){
    alert("Drink Toddy");
    }
    else if (number<18){
    alert("Drink Coke");
    }
    else if (number<21){
        alert("Drink Beer");
        return("Drink Beer");
    }
    else if (number<130){
    alert("Drink Whisky");
    }
    else alert("Sorry. I can't tell what drink because the age is incorrect!");
};
    