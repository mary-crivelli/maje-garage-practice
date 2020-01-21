const palindromeChecker = (userInput) => {
    if (typeof userInput != 'string') throw new Error('not a string');
    if (userInput.length <= 0) throw new Error('no empty strings allowed');

    function reverseString(x){return x.toLowerCase().split("").reverse().join("")};

    if (reverseString(userInput) === userInput) { return true }
}

describe('palindrome-tester', () => {
    test('canary validation tool', () => {
        expect(true).toEqual(true);
    });

    test('user input is string', () => {
        expect(() => {
            palindromeChecker(0);
        }).toThrow(new Error('not a string'))
    });

    test('user input is not empty string', () => {
        expect(() => {
            palindromeChecker('');
        }).toThrow(new Error('no empty strings allowed'))
    });

    test('user input reversed is same as user input forward', () => {
        expect(palindromeChecker('mom')).toEqual(true);
    })

    test('user input reversed is same as user input forward regardless of capitalization', () => {
        expect(palindromeChecker('moM')).toEqual(true)
    })
});