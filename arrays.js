var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningofArray(arr, elem) {
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningofArray(arr, elem) {
  arr.unshift(elem);
  return arr
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem]
}

function destructivelyAddElementToEndofArray(arr, elem) {
  arr.push(elem);
  return arr
}

function accessElementInArray(arr, ind){
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningofArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr
}

