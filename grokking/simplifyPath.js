class Solution {
  // time: O(n), space: O(n)
  simplifyPath(path) {
    const result = [];
    const splitPath = path.split('/');
    for (let i = 0; i < splitPath.length; i++) {
      if (splitPath[i] === '' || splitPath[i] === '.') continue;
      if (splitPath[i] === '..') result.pop();
      else result.push(splitPath[i]);
    }

    return `/${result.join('/')}`;
  }
}
