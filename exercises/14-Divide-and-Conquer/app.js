let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here

function mergeTwoList(arr) {

    var oddArr = [];
    var evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }

    var merge = [];
    for (let i = 0; i < oddArr.length; i++) {
        merge.push(oddArr[i]);
    }
    for (let i = 0; i < evenArr.length; i++) {
        merge.push(evenArr[i]);
    }

    return merge;

}

console.log(mergeTwoList(list_of_numbers))
