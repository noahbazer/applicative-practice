/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const yearCategories = data.asteroids.reduce((accumulator, currentValue) => {
    const filtered = data.asteroids.filter((asteroid) => asteroid.discoveryYear === currentValue.discoveryYear);
    const count = filtered.length;

    return [
    ...accumulator,
    {value: currentValue.discoveryYear, count: count}
    ];
  }, []);

  function callback(category) {
    return category.count;
  }

  function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
    else {
    var max = cb(array[0]);
    var value = array[0].value;
    for (let elem of array) {
      if (cb(elem) > max) {
        max = cb(elem);
        value = elem.value;
      }}}
    return value;
  }
return (maxBy(yearCategories, callback));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function







