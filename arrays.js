var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningofArray(arr, elem) {
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningofArray(arr, elem) {
  arr.unshift(elem);
  return arr
}

function addElementToEndOfArray()