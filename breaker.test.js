// AAA Pattern

const breaker = require('./breaker'); // Arrange

describe('Correct', () =>{
    
    test('4 aciertos', () =>{
        var value = breaker.evaluate(1,2,3,4);
        expect(value).toBe("X X X X");
    });

    test('3 aciertos', () =>{
        var value = breaker.evaluate(1,2,3,6);
        expect(value).toBe("X X X");
    });
    test('2 aciertos', () =>{
        var value = breaker.evaluate(1,2,5,6);
        expect(value).toBe("X X");
    });
    test('1 aciertos', () =>{
        var value = breaker.evaluate(1,0,8,6);
        expect(value).toBe("X");
    });
    test('0 aciertos', () =>{
        var value = breaker.evaluate(9,8,7,6);
        expect(value).toBe("");
    });
});

describe('Bad position', () =>{
    
    test('4 bad position', () =>{
        var value = breaker.evaluate(4,3,2,1);
        expect(value).toBe("_ _ _ _");
    });

    test('3 bad position', () =>{
        var value = breaker.evaluate(4,3,2,6);
        expect(value).toBe("_ _ _");
    });
    test('2 bad position', () =>{
        var value = breaker.evaluate(4,3,5,6);
        expect(value).toBe("_ _");
    });
    test('1 bad position', () =>{
        var value = breaker.evaluate(4,0,8,6);
        expect(value).toBe("_");
    });
    test('0 bad position', () =>{
        var value = breaker.evaluate(9,8,7,6);
        expect(value).toBe("");
    });
});

