class Solution {
  // time: O(n), space: (1) -> ballon has fixed length
  maxNumberOfBalloons(text) {
    const data = {
      b: {
        count: 0,
        rate: 1,
      },
      a: {
        count: 0,
        rate: 1,
      },
      l: {
        count: 0,
        rate: 2,
      },
      o: {
        count: 0,
        rate: 2,
      },
      n: {
        count: 0,
        rate: 1,
      },
    };

    for (let i = 0; i < text.length; i++) {
      const c = text.charAt(i);
      if (!data.hasOwnProperty(c)) {
        continue;
      }

      data[c].count++;
    }

    let minCount = Number.POSITIVE_INFINITY;

    for (const [_, { rate, count }] of Object.entries(data)) {
      minCount = Math.min(Math.floor(count / rate), minCount);
    }

    return minCount;
  }
}
