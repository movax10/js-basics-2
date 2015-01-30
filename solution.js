function isEven(number) {
  // % (the remainder operator) can be used to test whether a number is even
  // or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define
  // whether a positive whole number is even or odd:
  //
  // • Zero is even.
  // • One is odd.

  // For any other number N, its evenness is the same as N - 2.
  // Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
  // Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
  number = number > 0 ? number : number * -1;
  if (number == 0){
    return true;
  }
  else if (number == 1){
    return false;
  }
  else {return isEven(number-2)};
}

function pascal(row, col) {
  // Write a procedure that computes the elements of Pascal's triangle by means of a recursive process.
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1
  //
  // pascal(4, 2)
  // // → 6
  if (col == 0 || row == col)
  {
    return 1;
  }
  else if (row > col){
    return pascal(row - 1, col) + pascal(row - 1, col - 1);
  }
}

function sqrt(x) {
  // Square roots by Newton's method http://en.wikipedia.org/wiki/Newton%27s_method
  // Also you can look at the problem description in SICP[1.1.7] http://newstar.rinet.ru/~goga/sicp/sicp.pdf
  // You should write a function that takes a number and computes square root
  // You can build solution based on functions structure defined below or you can make up your own
  return sqrtIter(1.0, x);
}

function sqrtIter(guess, x) {
  if (isGoodEnough(guess, x))
  {
    return guess;
  }
  else return sqrtIter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function isGoodEnough(guess, x) {
  var divider = x > 1 ? 1 : x;
  return abs((square(guess) - x))/divider < 0.001;
}

function square(x) {
  return x * x;
}

function abs(x){
  return x > 0 ? x : x * -1;
}


module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
