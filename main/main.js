// Write your cade below:
function geneRamdom() {
    return Math.floor(Math.random() * 10001).toString();
}
function calAcount(srcStr, desStr) {
    var aCount = 0;
    for (var i = 0; i < srcStr.length; i++) {
        if (srcStr[i] === desStr[i]) {
            aCount++;
        }
    }
    return aCount;
}

function calBcount(srcStr, desStr) {
    var bCount = 0;
    for (var i = 0; i < srcStr.length; i++) {
        if ((srcStr[i] !== desStr[i]) && (desStr.indexOf(srcStr[i]) !== -1)) {
            bCount++;
        }
    }
    return bCount;
}


module.exports = function main(numStr) {
    var aCount, bCount;
    var goalStr = geneRamdom();
    aCount = calAcount(numStr, goalStr);
    bCount = calBcount(numStr, goalStr);

    console.log('numStr',numStr,'goalStr',goalStr,'result',aCount+'A' + bCount+'B')
    return aCount+'A' + bCount+'B';
};