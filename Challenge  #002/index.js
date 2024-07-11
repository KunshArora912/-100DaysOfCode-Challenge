var givenArr = [3,2,1];
var finalArr = [];

for(var l =0; l< givenArr.length; l++){
    var firstSide = 1;
    for(var i = 0; i<l; i++){
        firstSide = firstSide*givenArr[i];
    }

    var secondSide = 1;
    for(var j = l+1; j<givenArr.length; j++ ){
        secondSide = secondSide*givenArr[j];
    }
    finalArr.push(firstSide*secondSide);
}

console.log(finalArr);