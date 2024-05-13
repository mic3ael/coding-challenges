class Solution {
  // time: O(n), space: O(1)
  canPlaceFlowers(flowerbed, n) {
    if (!flowerbed.length) return false;
    for (let i = 0; i < flowerbed.length; i++) {
      if (i == 0 && flowerbed[i] != 1 && flowerbed[i + 1] != 1) {
        flowerbed[i] = 1;
        n--;
      }
      if (
        i == flowerbed.length - 1 &&
        flowerbed[i] != 1 &&
        flowerbed[i - 1] != 1
      ) {
        flowerbed[i] = 1;
        n--;
      }

      if (flowerbed[i] != 1 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
        flowerbed[i] = 1;
        n--;
      }
    }

    return n <= 0;
  }
}
