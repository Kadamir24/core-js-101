/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let arr = '';
  for (let i = 1; i <= num; i += 1) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      arr = 'FizzBuzz';
    } else if (i % 3 === 0) {
      arr = 'Fizz';
    } else if (i % 5 === 0) {
      arr = 'Buzz';
    } else {
      arr = i;
    }
  }
  return arr;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1Y = rect1.top;
  const rect1X = rect1.left;
  // const leftPoint1 = {rect1Y, rect1X};
  const rect1Height = rect1Y + rect1.height;
  // const rightPoint1 = rect1Height;
  const rect1Width = rect1X + rect1.width;
  // const rightPoint2 = rect1Width;
  // const rigthPoint1 = { rect1Height, rect1Width}

  const rect2Y = rect2.top;
  const rect2X = rect2.left;
  // const leftPoint2 = {rect2Y, rect2X};
  const rect2Height = rect2Y + rect2.height;
  // const rightPoint2 = rect2Height;
  const rect2Width = rect2X + rect2.width;
  // const rightPoint2 = rect2Width;
  // const rigthPoint2 = { rect2Height, rect2Width}

  if (rect1X >= rect2Width || rect2X >= rect1Width) {
    return false;
  }


  if (rect1Y >= rect2Height || rect2Y >= rect1Height) {
    return false;
  }

  return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const circleX = circle.center.x;
  const circleY = circle.center.y;
  const circleRad = circle.radius;
  const pointX = point.x;
  const pointY = point.y;

  if ((pointX - circleX) * (pointX - circleX)
    + ((pointY - circleY) * (pointY - circleY)) < circleRad ** 2) {
    return true;
  }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i], i + 1) === -1) {
      if (str.indexOf(str[i]) === i) {
        return str[i];
      }
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let max = 0;
  let min = 0;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  let res = '';
  if (isStartIncluded) {
    res += '[';
  } else {
    res += '(';
  }
  res += `${min}, `;
  res += max;
  if (isEndIncluded) {
    res += ']';
  } else {
    res += ')';
  }
  return res;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = String(num);
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return Number(newStr);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let sum = 0;
  const ccnString = String(ccn);
  for (let i = 0; i < ccnString.length; i += 1) {
    let ccnNumber = Number(ccnString[i]);
    if ((ccnString.length - i) % 2 === 0) {
      ccnNumber *= 2;
      if (ccnNumber > 9) {
        const ccnString2 = String(ccnNumber);
        ccnNumber = Number(ccnString2[0]) + Number(ccnString2[1]);
      }
    }
    sum += ccnNumber;
  }

  if (sum % 10 === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const numStr = String(num);
  let res = 0;
  if (numStr.length === 1) {
    return Number(numStr);
  }
  for (let i = 0; i < numStr.length; i += 1) {
    const temp = Number(numStr[i]);
    res += temp;
  }
  return getDigitalRoot(res);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '<') {
      res += str[i];
    } else if (str[i] === ')') {
      if (res[res.length - 1] === '(') {
        res = res.slice(0, res.length - 1);
      }
    } else if (str[i] === ']') {
      if (res[res.length - 1] === '[') {
        res = res.slice(0, res.length - 1);
      }
    } else if (str[i] === '}') {
      if (res[res.length - 1] === '{') {
        res = res.slice(0, res.length - 1);
      }
    } else if (str[i] === '>') {
      if (res[res.length - 1] === '<') {
        res = res.slice(0, res.length - 1);
      }
    }
  }

  if (res.length === 0 && str.length % 2 === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const base = '0123456789';
  let result = '';
  let input = num;
  while (input > 0) {
    result = base[input % n] + result;
    input = Math.floor(input / n);
  }
  return result;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
  // // throw new Error('Not implemented');
  // const res = [];
  // // let flagStop = false;
  // if (m1.length === 1 && m2.length === 1) {
  //   // flagStop = true;
  //   const tempArr = [];
  //   let sum = 0;
  //   const mat1 = ([].concat(...m1));
  //   const mat2 = ([].concat(...m2));
  //   for (let i = 0; i < mat1.length; i += 1) {
  //     sum += mat1[i] * mat2[i];
  //   }
  //   tempArr.push(sum);
  //   res.push(tempArr);
  //   return res;
  // }
  // for (let i = 0; i < m1.length; i += 1) {
  //   const row = [];
  //   for (let j = 0; j < m2.length; j += 1) {
  //     let newCell = 0;
  //     for (let k = 0; k < m1[i].length; k += 1) {
  //       // if (flagStop) {
  //       // newCell += m1[i][k] * m2[j][k];
  //       // } else {
  //       newCell += m1[i][k] * m2[k][j];
  //       // }
  //     }
  //     row.push(newCell);
  //   }
  //   res.push(row);
  // }

  // for (let index = 0; index < res.length; index += 1) {
  //   if (Number.isNaN(res[index])) {
  //     res.pop(res[index]);
  //   }
  // }

  // return res;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const row1 = position[0];
  const row2 = position[1];
  const row3 = position[2];

  const row1Win = [];
  const row2Win = [];
  const row3Win = [];

  const col1Win = [];
  const col2Win = [];
  const col3Win = [];

  const diag1 = [];
  const diag2 = [];
  for (let i = 0; i < 3; i += 1) {
    row1Win.push(row1[i]);
    if (i === 0) {
      col1Win.push(row1[i]);
      diag1.push(row1[i]);
    } else if (i === 1) {
      col2Win.push(row1[i]);
    } else if (i === 2) {
      col3Win.push(row1[i]);
      diag2.push(row1[i]);
    }
    for (let j = 0; j < 3; j += 1) {
      row2Win.push(row2[j]);
      if (j === 0) {
        col1Win.push(row2[j]);
      } else if (j === 1) {
        col2Win.push(row2[j]);
        diag1.push(row2[j]);
        diag2.push(row2[j]);
      } else if (j === 2) {
        col3Win.push(row2[j]);
      }

      for (let k = 0; k < 3; k += 1) {
        row3Win.push(row3[k]);
        if (k === 0) {
          col1Win.push(row3[k]);
          diag2.push(row3[k]);
        } else if (k === 1) {
          col2Win.push(row3[k]);
        } else if (k === 2) {
          col3Win.push(row3[k]);
          diag1.push(row3[k]);
        }
      }
    }
  }

  const isX = (val) => val === 'X';
  const is0 = (val) => val === '0';
  if (row1Win.every(is0) || row2Win.every(is0) || row3Win.every(is0)
  || col1Win.every(is0) || col2Win.every(is0) || col3Win.every(is0)
  || diag1.every(is0) || diag2.every(is0)) {
    return '0';
  }

  if (row1Win.every(isX) || row2Win.every(isX) || row3Win.every(isX)
  || col1Win.every(isX) || col2Win.every(isX) || col3Win.every(isX)
  || diag1.every(isX) || diag2.every(isX)) {
    return 'X';
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
