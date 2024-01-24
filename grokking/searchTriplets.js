class Solution {
  // time: O(n), space: O(n), when n is the length of the array
  searchTriplets(arr) {
    const triplets = [];
    // sorting
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      const pivot = arr[i];
      let leftIdx = i + 1;
      let rightIdx = arr.length - 1;

      while (leftIdx < rightIdx) {
        const left = arr[leftIdx];
        const right = arr[rightIdx];
        if (pivot + left + right < 0) leftIdx++;
        else if (pivot + left + right > 0) rightIdx--;
        else {
          triplets.push([pivot, left, right]);
          leftIdx++;
          rightIdx--;
        }
      }
    }
    return triplets;
  }
}
