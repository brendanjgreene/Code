describe("Calculator", function() {
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            expect(addition(2, 2)).toBe(4);
        });

        it("should not return 4 if the parameters given don't add up to 4", function(){
        	expect(addition(7, 19)).toBe(26);
        });
    });
});