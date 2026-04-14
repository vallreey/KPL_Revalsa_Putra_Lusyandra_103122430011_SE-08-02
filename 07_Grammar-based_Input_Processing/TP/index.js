function toNumberArray(input) {
  let arr;
  if (typeof input === "string") {
    arr = input.split(",");
  } 
  else if (Array.isArray(input)) {
    arr = input;
  } 
  else {
    return [];
  }
  return arr
    .map(item => parseFloat(item.trim()))
    .filter(num => !isNaN(num)); 
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]