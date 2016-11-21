describe("whatCanIDrink", function() {
 
    beforeEach(function() {
        number=new whatCanIDrink();
    });
    describe('under 0 function', function() {
        it('should return "Sorry. I can’t tell what drink because that age is incorrect!"', function() {
            spyOn(window, "alert");
            whatCanIDrink(-5);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
    describe('under 14 function', function() {
        it('should return "Drink Toddy"', function() {
            spyOn(window, "alert");
            whatCanIDrink(11);
            expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
        });
    });
    describe('under 18 function', function() {
        it('should return "Drink Coke"', function() {
            spyOn(window, "alert");
            whatCanIDrink(16);
            expect(window.alert).toHaveBeenCalledWith("Drink Coke");
        });
    });
    describe('under 21 function', function() {
        it('should return "Drink Beer"', function() {
            spyOn(window, "alert");
            whatCanIDrink(19);
            expect(window.alert).toHaveBeenCalledWith("Drink Beer");
        });
    });
    describe('under 130 function', function() {
        it('should return "Drink Whisky"', function() {
            spyOn(window, "alert");
            whatCanIDrink(45);
            expect(window.alert).toHaveBeenCalledWith("Drink Whisky");
        });
    });
    describe('too Old function', function() {
        it('should return "Sorry etc...."', function() {
            spyOn(window, "alert");
            whatCanIDrink(132);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can't tell what drink because the age is incorrect!");
        });
    });


});