"use strict";
 
describe("Counter tests", function () {
 
    it("Add gives the correct result", function () {
        // Arrange
        var num1 = 1;
        var num2 = 3;
        var expected = 4;
 
        // Act
        var result = counter.add(num1, num2);
 
        // Assert
        expect(result).toBe(expected);
    });
});