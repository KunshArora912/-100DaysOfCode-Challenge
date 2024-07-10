function sumFinder(){
    var arr = [10, 15, 3, 7];
    var k = parseInt(prompt("What's the sum?"), 10);
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var sum = arr[i] + arr[j];
            if (sum == k) {
                newArr.push(arr[i]);
                newArr.push(arr[j]);
            }
        }
    }
    if (newArr.length > 0) {
        console.log('The pairs that add up to ' + k + ' are ' + newArr[0]+(', ')+newArr[1]);
    } else {
        console.log('No pairs add up to ' + k);
    }
}