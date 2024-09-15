/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const idValue = new Map();

    // Add all objects from arr1 to the map by their id
    for (let obj of arr1) {
        idValue.set(obj.id, { ...obj });
    }

    // Merge or add objects from arr2 to the map
    for (let obj of arr2) {
        if (idValue.has(obj.id)) {
            idValue.set(obj.id, { ...idValue.get(obj.id), ...obj });
        } else {
            idValue.set(obj.id, { ...obj });
        }
    }

    // Convert the map back to an array and sort by id to preserve order
    return Array.from(idValue.values()).sort((a, b) => a.id - b.id);
};
