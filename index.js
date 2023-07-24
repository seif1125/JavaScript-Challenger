function minMax(arr) {
  if (!arr.length == 0) {
    // check array is having 1 element at least
    let min = arr[0]
    let max = arr[0] //assign min and max numbers values with initialization of the first array element as this
    //element will be the refrence

    for (var i = 1; i < arr.length; i++) {
      // looping over each element

      if (arr[i] <= min) {
        min = arr[i] //if element in array is smaller than our  minimum than min number
        // will be this one as untill now is the smallest one
      }
      if (arr[i] >= max) {
        max = arr[i] //if element in array is larger than our  maximum than max number
        // will be this one as untill now is the biggest  one
      }
    }
    return [min, max] // once we looped over array then we return our last updated min and max
  }
}
module.exports = minMax
