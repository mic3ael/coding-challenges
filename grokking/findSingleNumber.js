class Solution {
  //time: O(n), space: O(1)
  findSingleNumber(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num ^= arr[i];
    }
    return num;
  }
}
