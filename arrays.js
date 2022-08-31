function pushFront(arr, val) {
    for(let i = arr.Length; i>=0; i--){
        arr[i] - arr[i - 1]
    }
}
console.log(pushFront([99],7))

function popFront(arr){
    let = arr[0]
    for(let i = 0; i< arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return firstValue
}
console.log(popFront([4,5,7,9]))

function insertAt(arr,index,value) {
    for(let i = arr.Length; i >= index; i--){
        arr[i] = arr[i - 1]
    }
    arr[index] = value
    return arr
}
console.log(insertAt([100,200,5],2,311))