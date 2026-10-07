import { expect } from "chai";
import { add, subtract, multiply, divide } from "../mylib.js";
describe("mylib arithmetic functions", function () {

    before(function () {
        console.log("Starting mylib tests...");
    });

    after(function () {
        console.log("Finished mylib tests.");
    });

    it("should add two numbers", function () {
        expect(add(2, 3)).to.equal(5);
    });

    it("should subtract two numbers", function () {
        expect(subtract(10, 4)).to.equal(6);
    });

    it("should multiply two numbers", function () {
        expect(multiply(3, 4)).to.equal(12);
    });

    it("should divide two numbers", function () {
        expect(divide(10, 2)).to.equal(5);
    });

    it("should throw an error when dividing by zero", function () {
        expect(() => divide(10, 0)).to.throw("Cannot divide by zero");
    });

});