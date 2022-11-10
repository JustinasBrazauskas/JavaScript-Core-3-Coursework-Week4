let add = require("./calculator");
describe("requirement one", () => {
    test("return 0 if number is an empty string", function(){
        let numbers = "",
        let result = add(numbers);
        let expected = 0;
        expect(result).toEqual(expected)
    });
});