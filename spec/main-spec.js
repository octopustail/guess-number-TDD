const main = require('../main/main');

describe('main()', function () {

    it('should print correct nA', function () {
        var numA = '3A0B',
            userinput = '1234',
            result = main(userinput);
        expect(result).toEqual(numA)
    });
    it('should print correct nB', function () {
        var numB = '0A3B',
            userinput = '5341',
            result = main(userinput);
        expect(result).toEqual(numB)
    });
    it('should print correct nAnB',function () {
        var numC = '1A3B',
            userinput = '1523',
            result = main(userinput);
        expect(result).toEqual(numC)
    });

});