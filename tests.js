// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should say "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should say "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should say "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should say "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean for any input', function () {
        expect(typeof isFive).toBe("boolean");
    });
    it('should return true for 5', function () {
        expect(isFive).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
});