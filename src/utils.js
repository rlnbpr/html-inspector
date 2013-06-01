/**
 * Convert an array like object to an array
 */
function toArray(arrayLike) {
  return arrayLike ? [].slice.call(arrayLike) : []
}


/**
 * Determine if an object is a Regular Expression
 */
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) == "[object RegExp]"
}


/**
 * Consume an array and return a new array with no duplicate values
 */
function unique(array) {
  var uniq = []
  array = array.sort()
  array.forEach(function(val, i) {
    val !== array[i-1] && uniq.push(val)
  })
  return uniq
}


/**
 * Given a string and a list of strings or Regular Expressions,
 * does the string match any of the items in the list?
 */
function foundIn(needle, haystack) {
  return haystack.some(function(item) {
    return isRegExp(item) ? item.test(needle) : needle === item
  })
}