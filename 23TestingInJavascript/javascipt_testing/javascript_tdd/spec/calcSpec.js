describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe('Subtraction function', function() {
        it('should subtract the smaller number from the larger number and return the result', function() {
            calc.add(4);
            calc.subtract(2);
            expect(calc.value).toBe(2);
        });

        it("should not return 2 if difference between the numbers given isn't 2", function() {
            calc.add(12);
            calc.subtract(7);
            expect(calc.value).toBe(5);
        });

        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.subtract();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe("Multiply function", function() {
        it("should multiply two numbers given and return the result", function() {
            calc.add(4);
            calc.multiply(3);
            expect(calc.value).toBe(12);
        });

        it("Should not return 12 if the numbers given don't multiply to 12", function() {
            calc.add(4);
            calc.multiply(4);
            expect(calc.value).toBe(16);
        });

        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.multiply();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe("Divide function", function() {
        it("should divide two numbers given and return the result", function() {
            calc.add(12);
            calc.divide(3);
            expect(calc.value).toBe(4);
        });

        it("Should not return 4 if the numbers given don't divide to 4", function() {
            calc.add(4);
            calc.divide(4);
            expect(calc.value).toBe(1);
        });

        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.divide();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number and not Zero");
        });
    });
});