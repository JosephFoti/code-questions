// Codefights 1
// Write a function that returns the sum of two numbers.

function add(param1, param2) {
  var x = param1 + param2;
  return x
}

// Codefights 2
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  var x = Math.ceil(year / 100);
  return x
}

// Codefights 3
// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  var x = inputString;
  var y = inputString.split("").reverse().join("");

  if (x == y) {
    return true;
  } else {
    return false;
  }
}

// Codefights 4
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  var largest = [];
  var theBigOne;

  for (i = 0; i < inputArray.length; i++) {
    let a = inputArray[i];
    let b = inputArray[i + 1];
    let c = a * b;
    if (c) {
      largest.push(c);
    }
  }
  largest.sort(function(a, b) {
    return b - a
  });
  console.log(largest)

  if (largest.length == 0) {
    largest[0] = 0;
  }
  return largest[0]
}

// Codefights 5
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function shapeArea(n) {
  var nInit = 0;
  var nCount = 0;
  while (nCount < n) {
    nInit = nInit + (4 * nCount);
    if (nInit == 0) {
      nInit = 1;
    }
    nCount++;
    console.log(nInit);
  }
  return nInit
}

// Codefights 6
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
//
// Example
//
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  statues.sort(function(a, b) {
    return a - b
  });
  var x = [];
  var y = statues.length - 1;
  var z = statues[y];

  for (var i = statues[0]; i < z; i++) {
    for (var j = 0; j < statues.length; j++) {
      if (statues[j] == i) {
        break;
      } else if (x.indexOf(i) == -1 && statues.indexOf(i) == -1) {
        x.push(i);
        console.log(i);

      }

    }
  }
  console.log(x)
  return x.length
}

// Codefights 7
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
  var exileTicker = 0;
  var lastSigInc;
  var tryAgain;
  // sequence.sort(function(a,b){return b-a}); || lastSigInc > sequence[i+1]
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      exileTicker++;
      if (sequence[i] > sequence[i + 1]) {
        console.log((i + 3) + " | " + sequence.length)

        if (sequence[i] < sequence[i + 2] || i + 3 > sequence.length) {
          sequence.splice([i + 1], 1);
        } else {
          sequence.splice(i, 1);
        }

        tryAgain = true;
        console.log(sequence)
        break;
      }
    }
  }
  if (tryAgain) {
    for (var i = 0; i < sequence.length; i++) {
      if (sequence[i] >= sequence[i + 1]) {
        exileTicker++;
      }
    }
  }

  console.log(exileTicker);
  if (exileTicker > 1) {
    return false;
  } else {
    return true;
  }
}

// Codefights 8
// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.
// Help the bots calculate the total price of all the rooms that are suitable for them.

function matrixElementsSum(matrix) {
  var spookyColumns = [];
  var total = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0 && spookyColumns.indexOf(j) == -1) {
        spookyColumns.push(j);
      } else if (spookyColumns.indexOf(j) >= 0) {
        console.log('avoided row ' + i + ' col ' + j + ' Value ' + matrix[i][j])
      } else {
        total = total + matrix[i][j];
      }
    }
  }
  console.log('total calc ' + total)
  return total
}

// Codefights 9
// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
  var longestString = 0;
  var results = [];
  for (var i = 0; i < inputArray.length; i++) {
    let thisStringLength = inputArray[i].length
    if (thisStringLength > longestString) {
      results.length = 0;
      results.push(inputArray[i]);
      longestString = thisStringLength;
    } else if (thisStringLength == longestString) {
      results.push(inputArray[i]);
    }
  }
  return results;
}

// Codefights 10
// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  var s1Array = s1.split('');
  var s2Array = s2.split('');
  var commonValues = [];
  // var s2Unique = [];

  for (var i = 0; i < s1Array.length; i++) {
    let x = s1Array[i];
    for (var j = 0; j < s2Array.length; j++) {
      if (x == s2Array[j]) {
        s2Array.splice(s2Array.indexOf(x), 1);
        commonValues.push(x);
        break;
      }
    }

  }

  return commonValues.length;

}

// Codefights 11
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  var x = n.toString().split('')
  let x1 = x.slice(0, x.length / 2);
  let x2 = x.slice(x.length / 2, x.length)
  var x1Total = 0;
  var x2Total = 0;

  for (var i = 0; i < x1.length; i++) {

    x1Total += +x1[i];
    x2Total += +x2[i];
  }
  console.log(x1Total);
  console.log(x2Total);
  var answer = (x1Total == x2Total) ? true : false;
  return answer
}

// Codefights 12
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function sortByHeight(a) {
  var trees = [];
  var treePos = [];
  var tick = -1;


  function notTree(x) {
    tick++;
    if (x < 0) {
      trees.push(x);
      treePos.push(tick);
    }
    return x >= 0;
  }
  var notTrees = a.filter(notTree).sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < trees.length; i++) {
    notTrees.splice(treePos[i], 0, -1);
  }

  console.log(`${trees} and ${treePos} and also the not trees ${notTrees}`)
  return notTrees;
}

// Codefights 13
// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.
// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

var reverse = (str) => str.split('').reverse().join('');

var reverseParentheses = (s) => {
  while (s.includes('(')) {
    var l = s.lastIndexOf('(');
    var r = s.indexOf(')', s.lastIndexOf('('));
    s = s.slice(0, l) + reverse(s.slice(l + 1, r)) + (r + 1 === s.length ? s.slice(r, -1) : s.slice(r + 1));
  }
  return s;
};

// Codefights 14
// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
  var odd = false;
  var set1 = 0;
  var set2 = 0;
  for (var i = 0; i < a.length; i++) {
    if (odd) {
      odd = false;
      set2 += a[i];
    } else {
      odd = true;
      set1 += a[i];
    }
  }
  var weights = [set1, set2]
  return weights
}

// Codefights 15
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  let frameWidth = picture[0].length + 2;
  var cap = '';

  for (var i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
  }
  for (var i = 0; i < frameWidth; i++) {
    cap += '*'
  }

  picture.unshift(cap);
  picture.push(cap);

  return picture
}

// Codefights 16
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {

  if (a.toString() == b.toString()) {
    return true;
  }

  var c = [];
  var d = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();

  if (c.length === 2 && c.toString() == d.toString()) {
    return true;
  }
  return false;


}

// ---- NOTE attempt 1, could not pass system in which many repeats exist because replacement index was inaccurate.
//
//     var errorCount = 0;
//     for (var i=0;i<a.length;i++) {
//         if (a[i] !== b[i] && errorCount <= 1) {
//             let newPosition = a.indexOf(b[i]);
//             errorCount++;
//              console.log(`itteration ${i} - ${a[i]} is a and ${b[i]} is b. they have been switched. new position ${newPosition}`);
//             if (a.indexOf(b[i]) >= 0) {
//                 a.splice(newPosition,1,a[i]);
//                 a.splice(i, 1, b[i]);

//             } else {
//                 console.log(`array a is ${a} and array b is ${b} and they failed!`)
//                return false;
//             }
//         console.log(`array a is ${a} and array b is ${b} and they continue!`)
//         }
//     }
//     if(errorCount < 2) {
//     return true;
//     } else {
//                         console.log(`array a is ${a} and array b is ${b} and they failed!`)

//     return false;
//     }

// Codefights 17
// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(inputArray) {
  var count = 0;
  for (var i = 0; i < inputArray.length; i++) {
    while (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] += 1;
      count++;
    }
  }
  console.log(inputArray)
  return count
}



// Codefights 18
// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
  if (inputString == inputString.split('').reverse().join('')) {
    return true;
  }
  var oddNumbers = 0;
  var sorted = inputString.split('').sort();

  function foo(arr) {
    var a = [],
      b = [],
      prev;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }

    for (var i = 0; i < b.length; i++) {
      if (b[i] & 1) {
        oddNumbers++;
      }
    }
    if (oddNumbers > 1) {
      return false;
    }
    return true;
  }

  return foo(sorted);

}


// Codefights 19
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var youStrong = Math.max(yourLeft, yourRight);
  var friendStrong = Math.max(friendsLeft, friendsRight);
  var youWeak = Math.min(yourLeft, yourRight);
  var friendWeak = Math.min(friendsLeft, friendsRight);
  if (youStrong == friendStrong && youWeak == friendWeak) {
    return true
  }
  return false
}

// Codefights 20
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
  var diff = [];
  for (var i = 0; i < inputArray.length; i++) {
    diff.push(Math.abs(inputArray[i] - inputArray[i + 1]));
  }
  diff.sort(function(a, b) {
    return b - a
  });
  return diff[0]
}

// Codefights 21
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.
// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {

  // credit to https://www.youtube.com/watch?v=56VDg5gx2_0&list=PLHdCowjFIBmJpWtXakyh0cczY-3PsFwer&index=20
  //
  // if(inputString.split('.').length > 4){
  //        return false
  //  } else if ((/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/).test(inputString)) {
  //     return true
  //  }
  //  return false;

  var splitter = inputString.split('.');
  console.log(splitter)

  for (var i = 0; i < splitter.length; i++) {
    if (typeof parseInt(splitter[i]) != 'number') {
      console.log(splitter[i]);
    }
    if (parseInt(splitter[i]) < 0 || parseInt(splitter[i]) > 255 || !isNaN(inputString[i]) || inputString[i] == "") {
      console.log(i)
      return false;
    }
  }
  return true;

}

// Codefights 22
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray) {
  var sorted = inputArray.sort(function(a, b) {
    return a - b
  })
  var max = 0;
  console.log(sorted);
  for (var i = 2; i < 40; i++) {
    for (var j = 0; j < inputArray.length; j++) {
      if (inputArray.includes(i)) {
        break;
      } else {
        var x = 1;
        var jump = 0;
        while (inputArray[inputArray.length - 1] > jump && !inputArray.includes(jump)) {
          console.log(`round ${i}, comparing to ${inputArray[j]} ${jump}`)
          jump = i * x;
          x++;
          if (jump > inputArray[inputArray.length - 1]) {
            return max = i;
            break
          }
        }
      }
    }
  }
  return max;
}

// Codefights 23
// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.

function boxBlur(image) {
  var blurStore = [];
  var blur = [];

  var thisTotal = 0;
  var reducer = (accumulator, currentValue) => accumulator + currentValue;

  var avs = [];
  var htick = 0,
    wtick = 0;
  var res = [];

  var dementions = [image.length, image[0].length];
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {

      if ((i > 0 && j > 0) && (i < image.length - 1 && j < image[i].length - 1)) {
        blur = [image[i - 1][j - 1], image[i - 1][j], image[i - 1][j + 1], image[i][j - 1], image[i][j], image[i][j + 1], image[i + 1][j - 1], image[i + 1][j], image[i + 1][j + 1]];

        thisTotal = blur.reduce(reducer);
        avs.push(Math.floor(thisTotal / 9));
        console.log(i + " " + j)
      }
    }
    res.push(avs);
    avs = [];

  }

  res.pop();
  res.shift();
  return res
}

// Codefights 24
// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

function minesweeper(matrix) {
  let res = [];
  var cap = [];
  for (var i = 0; i < matrix.length - 1; i++) {
    if (i === 0) {
      let capCount = 0;
      let edgeCount = 1;
      while (capCount < matrix.length + 2) {
        cap.push(false);
        capCount++;
      }
      matrix.unshift(cap);
      matrix.push(cap);
      while (edgeCount < matrix.length - 1) {
        matrix[edgeCount].unshift(false);
        matrix[edgeCount].push(false);
        edgeCount++;
      }
    } else {

      let row = [];

      for (var j = 1; j < matrix[i].length - 1; j++) {
        let searchCandidates = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i][j - 1], matrix[i][j + 1], matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1]];
        let count = 0;
        for (var k = 0; k < searchCandidates.length; k++) {
          if (searchCandidates[k]) {
            count++
          }
        }
        row.push(count);
      }
      res.push(row);
    }
  }
  return res;
}

// Codefights 25
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {

  let newArray = inputArray.map(x => {
    if (x == elemToReplace) {
      x = substitutionElem;
      console.log(x);
      return substitutionElem;
    } else {
      return x;
    }
  })
  return newArray;
};

// Codefights 26
// Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
    let eTest = n.toString().split('');
    var isFalse = true;
    var checkIfFalse = eTest.map(x => {
        let hasRemainder = x/2;
        if (hasRemainder.toString().indexOf('.') >= 0) {
        return isFalse = false;

    }

    })

    return isFalse;

}

// Codefights 27
// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

function variableName(name) {
     var reg = "[A-Z|a-z|_][A-Z|a-z|0-9|_]*";

    var search = name.match(reg);

    console.log(search[0].length + ' ' + search['input'].length)
    if (search[0].length === search['input'].length) {
        return true;
    } else {
        return false;
    }

}

// Codefights 28
// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

function alphabeticShift(inputString) {
    // get ASCII and shift it one
    // get string, split it to array for map
    var shiftASCII = inputString.split('').map(x=>{
        //get CharCode
        let code = x.charCodeAt()
        //show me original
        console.log(`code ${code} gives ${String.fromCharCode(code)}`)
        if (code == 122) {
            //if z, return to value for a
            code = 97;
        } else {
            // else next value
            code = code+1;
        }
        //show me mutation
        console.log(`the new code is ${code} gives ${String.fromCharCode(code)}`);
        //return new value for map
        return String.fromCharCode(code);

    });
    //return result
    return shiftASCII.join('')
}

// Codefights 29
// Given two cells on the standard chess board, determine whether they have the same color or not.

function chessBoardCellColor(cell1, cell2) {
    //Assign values to a 2d matrix
    //Write object
    var Cell = function(xCord,yCord,color){
        //Cell object
        this.xCord = xCord;
        this.yCord = yCord;
        this.color = color;
    }
    //color
    var color = 'brown';
    //x Coordinates
    var letters = ['','A','B','C','D','E','F','G','H'];

    for (var i=1;i<9;i++) {
        for (var j=1;j<9;j++) {
            //Dynamic object creation with constructor
            this[letters[j]+i] = new Cell(letters[j],i,color);
            //alternate brown/tan
            if (color == 'brown') {
                color = 'tan';
            } else {
                color = 'brown'
            }
        }
        if (color == 'brown') {
                color = 'tan';
            } else {
                color = 'brown'
        }
    }
    console.log(A1,B1,H1);

    if (this[cell1]['color'] == this[cell2]['color']) {
        return true;
    }
    return false;
}

// Codefights 30
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

function circleOfNumbers(n, firstNumber) {
    return (firstNumber+(n/2))%n
}

// Codefights 31
// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold. Of course you don't want to wait too long, so you know that the answer is not greater than 6.

function depositProfit(deposit, rate, threshold) {
    var growth = deposit;
    var years = 0;
    rate = rate/100;
    while(growth < threshold) {
        years++;
        growth+=growth*rate;
    }
    return years
}

// Codefights 32
// Given a sorted array of integers a, find an integer x from a such that the value of
//
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

function absoluteValuesSumMinimization(a) {
    //this math does not make sense to me
     a.length % 2 === 0 ? a[a.length/2-1] : a[Math.floor(a.length/2)];
}

// Codefights 33
// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

function stringsRearrangement(inputArray) {
    function getPerms(arr){
        var permutations = [];
        var sequence = [];
        var fullLength = arr.length;
        var FullResult;

        function permute(a) {
        // how to recurse - credit to https://www.youtube.com/watch?v=PFOE2CAEA5E
        // We are running a function within a looped function where each itteration redefines the scope of whats being examined
            for(var i=0;i<a.length;i++) {
                var initialString = a[i];
                // console.log(`${a[i]} has been captured`)
                sequence.push(initialString);
                if (fullLength == sequence.length) {
                    // console.log(`${sequence} has been pushed`)
                    permutations.push([...sequence]);
                } else {
                    let remaining = [...a.slice(0,i),...a.slice(i+1)];
                    permute(remaining);
                }
                sequence.pop();
            }
        }
        permute(arr);
        return permutations;
    }

    // function oneChange(x,y) {
    //     let counter = 0;
    //     for(let i = 0;i<x.length;i++) {
    //         if (x[i] != y[i]) {
    //             counter++;
    //         }
    //     }
    //     if (counter != 1) {
    //         return false
    //     }
    // }
    //

    function checkChange(aPerm) {
        var res = true;
                // console.log(inputArray.sort());
                for(var i=1; i<aPerm.length; i++) {
                    let thisErrorCount = 0;
                    for (var j=0; j<aPerm[i].length; j++) {

                        if (aPerm[i-1][j] != aPerm[i][j]) {
                            thisErrorCount++;
                            // console.log(`the error waS ${aPerm[i-1][j]} does not equal ${aPerm[i][j]}`)
                        }
                    }
                    if (thisErrorCount != 1) {
                            // console.log('false! with '+thisErrorCount)
                            res = false;
                            // console.log(`comparing ${aPerm[i-1]} to ${aPerm[i]} and stumbling on ${j}`)
                            break;
                    }
                }
                return res;
    }

    var permutations = getPerms(inputArray);

    function findDiffs(perms) {
        for (let k=0;k<perms.length;k++) {
            if (checkChange(perms[k])) {
                return true;
            }
        }
        return false;
    }

    return findDiffs(permutations);

}

    // var res = true;
    // console.log(inputArray.sort());
    // for(var i=1; i<inputArray.length; i++) {
    //     let thisErrorCount = 0;
    //     for (var j=0; j<inputArray.length; j++) {
    //         if (inputArray[i-1][j] != inputArray[i][j]) {
    //             thisErrorCount++;
    //             console.log(`the error waS ${inputArray[i-1][j]} does not equal ${inputArray[i][j]}`)
    //         }
    //     }
    //     if (thisErrorCount != 1) {
    //             res = false;
    //             console.log(`comparing ${inputArray[i-1]} to ${inputArray[i]} and stumbling on ${j}`)
    //             break;
    //     }
    // }
    // return res;


// Codefights 34
// Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
    noKs = [];
    for (let i=0;i<inputArray.length;i++) {
        if ([i+1]%k != 0) {
            noKs.push(inputArray[i]);
        }
    }
    return noKs;
}

// Codefights 35
// Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
    return inputString[inputString.search(/\d/)]
}

// Codefights 36
// Given a string, find the number of different characters in it.

function differentSymbolsNaive(s) {
    var sSet = new Set(s);
    return sSet.size
}

// Codefights 37
// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

function arrayMaxConsecutiveSum(inputArray, k) {
    var sums = [];
    var prevMax;
    let instanceArray = [];
    let newInstTotal;
    for (let i=0;i<inputArray.length-(k-1);i++) {
        if (i==0) {
            instanceArray = inputArray.slice(i,i+k);
            sums.push(instanceArray);
            prevMax = instanceArray.reduce((x,y)=>x+y);
        } else {

            if (i == 1) {
                newInstTotal = (prevMax - instanceArray[0]);
            } else {
                newInstTotal = (newInstTotal - instanceArray[0]);
            }

            instanceArray.shift();
            instanceArray.push(inputArray[i+(k-1)]);
            newInstTotal += inputArray[i+(k-1)];

            if (prevMax<newInstTotal) {
                prevMax = newInstTotal;
            }
        }


    }
    // return Math.max(...sums);
    return prevMax;

}

// Codefights 38
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var height = 0;
    var day = 0;

    while (height < desiredHeight) {

        day++;
        height += upSpeed
        console.log(`${height} is the height after addition`)
        if (height >= desiredHeight) {
            console.log(height + ' ' + day)
            return day;
        }
        height -= downSpeed;
        console.log(`${height} is the height after addition`)

    }

    return day;
}

// Codefights 39
// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?
// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let res = [];
    let permutations = [];
    //get all possible sets that are possible based on the weight
    function permute(x1,x2,y1,y2,z) {
        let maxPermsX = Math.floor(z/x2);
        let maxPermsY = Math.floor(z/y2);
        let bestValue = 0;
console.log(x2+' '+y2 + ' >? '+ z);
        if (maxPermsX >= 1 && maxPermsY >= 1 && (x2+y2)<=z) {
            bestValue = (x1+y1);
            console.log('one of each');
        } else if(maxPermsX >= 1 && maxPermsY >= 1) {
            x1 > y1 ? bestValue = x1 : bestValue = y1;
            console.log('choose the best');
        } else if(maxPermsX >= 1 && maxPermsY < 1) {
            bestValue = x1;
            console.log('x1');
        } else if(maxPermsX === 0 && maxPermsY === 0) {
            bestValue = 0;
            console.log('no space');
        } else {
            bestValue = y1;
            console.log('y1');
        }
        return bestValue
    }

    return permute(value1,weight1,value2,weight2,maxW);

}

// Codefights 40
// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(inputString) {

   return (inputString.match(/^\d*/)).toString()
}

// Codefights 41
// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.

function digitDegree(n) {
    var res = 0;
    let arrayOfStrings = n.toString().split('');
    while (arrayOfStrings.length > 1) {
        let backToNumbers = arrayOfStrings.map(x=>{
            return parseInt(x);
        });
        let totalInNumber = backToNumbers.reduce((x,y)=>{return x+y});
        arrayOfStrings = totalInNumber.toString().split('');
        res++;

    }
    return res;
}

// Codefights 42
// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

function bishopAndPawn(bishop, pawn) {
  const letters = ['a','b','c','d','e','f','g','h'];
  let bishopCoords=[];
  let pawnCoords=[];
  let counter=0;
  let testCoords=[];

  function Location(x,y,color) {
    this.x = x;
    this.y = y;
  }

  var getMatrixVals = (x,y) =>{
    let letterIndex = 1+(letters.indexOf(x[0]));
    let numberIndex = parseInt(x[1]);
    y.push(letterIndex,numberIndex);
  }
  getMatrixVals(bishop,bishopCoords);
    getMatrixVals(pawn,pawnCoords);
  console.log(bishopCoords,pawnCoords)

  if (bishopCoords[0]>pawnCoords[0] && bishopCoords[1]>pawnCoords[1]) {
    console.log('pawn is to the south west');
    while (counter < 8) {
      bishopCoords[0]--;
      bishopCoords[1]--;
      counter++;
      if (bishopCoords[0] == pawnCoords[0] && bishopCoords[1] == pawnCoords[1]) {
        return true;
      }
    }
    return false;


  } else if(bishopCoords[0]>pawnCoords[0] && bishopCoords[1]<pawnCoords[1]) {
     console.log('pawn is to the north west');
    while (counter < 8 && bishopCoords[0] >= 0 && bishopCoords[1] >= 0) {
      bishopCoords[0]--;
      bishopCoords[1]++;
      counter++;
      if (bishopCoords[0] == pawnCoords[0] && bishopCoords[1] == pawnCoords[1]) {
        return true;
      }
    }
    return false;


  } else if (bishopCoords[0]<pawnCoords[0] && bishopCoords[1]<pawnCoords[1]) {
    console.log('pawn is to the north east')
    console.log(Math.max(bishopCoords));

    while (counter < 8) {
      bishopCoords[0]++;
      bishopCoords[1]++;
      counter++;
      console.log(bishopCoords)
      if (bishopCoords[0] == pawnCoords[0] && bishopCoords[1] == pawnCoords[1]) {
        return true;
      }
    }
    return false;
  } else if (bishopCoords[0]<pawnCoords[0] && bishopCoords[1]>pawnCoords[1]) {
    console.log('pawn is to the south east');
    while (counter < 8 && bishopCoords[0] >= 0 && bishopCoords[1] >= 0) {
      bishopCoords[0]++;
      bishopCoords[1]--;
      counter++;
      if (bishopCoords[0] == pawnCoords[0] && bishopCoords[1] == pawnCoords[1]) {
        return true;
      }
    }
    return false;

  } else if (bishopCoords[0]==pawnCoords[0] || bishopCoords[1]==pawnCoords[1]) {
    return false;
  }

  console.log(bishop)
}

// Codefights 43
// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.
// Given a string, check whether it is beautiful.

function isBeautifulString(inputString) {

    function countChar(char) {
        let reg = new RegExp(char,'g');
        let count = inputString.match(reg);
        return count ? count.length : 0
    }

    let limit = 51;

    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
         let currentCount = countChar(letter);
    if (currentCount > limit) {
        return false
    } else {
        limit = currentCount;
    }
    }
    return true

}

// Codefights 44
// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
// Given a valid email address, find its domain part.

function findEmailDomain(address) {

     let lastIndex = address.lastIndexOf('@');
     console.log(lastIndex+1)
     return address.sl(lastIndex+1)

}

// Codefights 45
// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

function buildPalindrome(st) {
    //reverse string and find when first instance of substring is a palendrome
    let reversedSt = st.split('').reverse().join('')
    console.log(reversedSt);
    for (let i = st.length;i>=0; i--) {
        let substring = reversedSt.slice(0,i);
        let subReverse = substring.split('').reverse().join('')
        if (substring == subReverse) {
            console.log(`${substring} is a palendrome, adding ${reversedSt.slice(i)} will complete it`);
            let remainingString = reversedSt.slice(i);
            let ReversedRemaining = remainingString.split('').reverse().join('');
            return ReversedRemaining + substring + remainingString;
        }
        console.log(substring)
    }
}

// Codefights 46
// Elections are in progress!
// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function electionsWinners(votes, k) {
    let localMax =  Math.max(...votes);
    let result = votes.filter(x=>{
        if ((x+k)>localMax) {
            return x;
        }
    })

    if (result == 0) {
        let zeroOrOne = votes.filter(x=>{
            return x == localMax ? x : null
        })
        return zeroOrOne.length == 1 ? 1 : 0;
    }
    return result.length

}

// Codefights 47
// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

function isMAC48Address(inputString) {
    // test if number, if not number see if string. if string getCharCode and see if its
    // between 65 and 70. if its the 3,6,9,12 or 15th char then it should be a -
    if (inputString.length != 17) {
        return false
    }
    for (let char in inputString) {
        if ((char+1)%3 == 0 && char != 0) {
            console.log('dash found at '+ inputString[char]);
            if (inputString[char] != '-') return false;
        } else if (parseInt(inputString[char])+1) {
            console.log(inputString[char]);
            if (inputString[char] < 0 || inputString[char] > 9) return false;
        } else {
            let charCount = inputString[char].charCodeAt();
            console.log(`${charCount} representing ${inputString[char]}`)
            if (charCount < 65 || charCount > 70) return false;
        }
    }
                    console.log(typeof parseInt('2'))

    return true;

}

// Codefights 48
// Determine if the given character is a digit or not.

function isDigit(symbol) {
    if (parseInt(symbol)+1) return true;
    return false
}

// Codefights 49
// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function lineEncoding(s) {
    // in a loop get the current letter. check if its the same as prev letter if yes add 1 to
    // a base 1 counter. if not the same, push the count (if greater than 0) and the letter
    // to result array, concat.
    let prev;
    let count = 1;
    let res = [];
    s = s+'z';
    for (let letter of s) {
        if (prev == letter) {
            count++;
        } else {
            if (count > 1) {
                res.push(count+prev);
            } else {
                res.push(prev);
            }
            prev = letter;
            count = 1;
        }

    }
    return res.join('');
}

// Codefights 50
// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function chessKnight(cell) {
    let stringSet = 'abcdefgh'
    let knightString = cell[0];
    let val2 = parseInt(cell[1]);
    let val1;
    let knightPosibilities = [[1,2],[-1,2],[-1,-2],[1,-2],[2,1],[-2,1],[-2,-1],[2,-1]];
    for (let i in stringSet) {
        if (knightString == stringSet[i]) {
            val1 = parseInt(i)+1;
        }
    }

    var res = knightPosibilities.filter(x=>{
        let newVal1 = val1+x[0];
        let newVal2 = val2+x[1];
        if((newVal1 <= 8) && newVal1 > 0 && newVal2 <= 8 && newVal2 > 0) {
            return x;
        }
    });

    return res.length;
}

// Codefights 51
// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

function deleteDigit(n) {
    var res = [];
    let x = n.toString();
    for (let i in x) {
        let xArr = x.split('');
        xArr.splice(i,1);
        res.push(xArr.reduce((x,y)=>{return x+y}));
    }
    return Math.max(...res)
}

// Codefights 52
// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function longestWord(text) {
    let bestWord = '';
    var words = text.match(/(\w)+/g);
    for (let word of words) {
        if (bestWord.length < word.length) {
            bestWord = word;
        }
    }
    return bestWord
}

// Codefights 53
// Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
    let splitter = time.split(':');
    console.log(splitter);
    if (time.length != 5) false;
    // if (splitter[0] == '24' && splitter[1] == '00') {
    //     return true;
    // }
    if (parseInt(splitter[0]) >= 24 || parseInt(splitter[0]) < 0) {
        return false;
    } else if (parseInt(splitter[1]) > 59 || parseInt(splitter[1]) < 0) {
        return false;
    }
    return true
}

// Codefights 54
// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

function sumUpNumbers(inputString) {
    let numbers = inputString.match(/\d+/g);
    if (numbers && numbers.length > 1) {
        return numbers.reduce((x,y)=>{return parseInt(x)+parseInt(y)})
    } else if (numbers && numbers.length == 1) {
        return parseInt(numbers);
    } else {
        return 0
    }
}

// Codefights 55
// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

function differentSquares(matrix) {
    // check if thisa, thisa +1 thisb thisb +1 exist, if yes push then set array
    let x = matrix;
    let res = [];
    for (let i=0;i<x.length;i++) {
        for (let j=0;j<x[i].length;j++) {
            if (x[i+1]+1&&x[i+1][j+1]+1) {
                res.push(([x[i][j],x[i][j+1],x[i+1][j],x[i+1][j+1]]).join(''))
            }
        }
    }
    let setRes = new Set(res)
    console.log(setRes)
    return setRes.size
}

// Codefights 56
// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

function digitsProduct(product) {
    let Count = 0;
    for (let j=2;j<10;j++) {
        if (product%j == 0) {
            Count++;
            break
        }
    }
    if(product==0) {
        return 10;
    } else if (product > 0 && product < 10) {
        return product;
    } else if (Count==0) {
        return -1;
    }

    for (let i=0;i<1000000;i++) {
        let test = i.toString().split('')
        let test2 = test.reduce((x,y)=>{return parseInt(x)*parseInt(y)})
        if (test2 == product) {
            return i;
        }
    }
    return -1
}

// Codefights 57
// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.
// Return an array of names that will be given to the files.

function fileNaming(names) {
        let filenames = {};

    for(let name of names) {
        let fileIndex = filenames[name];
        if(fileIndex) {
            let newName = name + "("+fileIndex+")";
            while(filenames[newName]) {
                fileIndex++;
                newName = name + "("+fileIndex+")";
            }

            filenames[name] = fileIndex;
            filenames[newName] = 1;
        } else {
            filenames[name] = 1;
        }
    }

    return Object.keys(filenames);

}



    // let count;
    // let res = [names[0]];
    // console.log(res);
    // for (let i=0;i<names.length;i++) {
    //     count = 1;
    //     let newName = names[i];
    //     for (let j=0;j<res.length;j++) {
    //         if (names[i] != res[j]) {
    //             if(count>1) {
    //                 newName = names[i]+'('+ count +')';
    //                 res.push(newName);
    //                 break;
    //             } else {
    //               console.log(`on names ${i}, ${names[i]} was pushed with no count `)
    //               res.push(names[i]);
    //               break;
    //             }
    //             console.log(res);
    //         } else {
    //             count++;
    //             console.log(names[i]+' index '+i+' was equal to '+ res[j]);
    //         }
    //     }
    // }
    // console.log(res);

// series of separators, first initial file string, then itteration1,
//
//     var dictionary = {};
// let res = [0];
// for (let i=0;i<names.length;i++) {
//     =[i] = names[i];
//     // get dictionary item and see if its name is equal. if it is ++
//     // else push
//     let counter = 0;
//     for (let j=0;j<names.length;j++) {
//         console.log(dictionary[i] + ' ' +res[j])
//         if (dictionary[i] == res[j]) {
//             counter++
//         } else {
//             if (counter == 0) {
//                let newName = dictionary[i];
//                 res.push(newName);
//                 break
//             } else {
//                 let newName = dictionary[i]+'('+counter+')';
//                 res.push(newName)
//                 break
//             }
//         }
//     }
// }
// console.log(res);

// Codefights 58
// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.
// Assuming that your hunch is correct, decode the message.

function messageFromBinaryCode(code) {
    let eightSet = [];
    let res = [];
    for (let i=0;i<=code.length;i++){

        if (i%8 == 0 && i!=0){

            let eightString = parseInt(eightSet.join(''),2).toString()
            let ascii = String.fromCharCode(eightString);
            res.push(ascii);
            eightSet = [];
        } else {
            eightSet.push(code[i]);
        }

    }
    return res.join('');
}

// Codefights 59
// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

function spiralNumbers(n) {
    let row = [];
    let matrix = [];
    let init,limit,count,upLim;

    for (let i=0;i<n;i++) {
       for (let i=0;i<n;i++) {
           row.push('');
       }
       matrix.push(row);
       row = [];
   }

    function right(){
        for(let i=init;i<limit;i++) {
            matrix[init][i] = count;
            count++
        }
    }
    function down() {
        for(let i=init;i<limit;i++) {
            matrix[i][limit] = count;
            count++
        }
    }
    function left() {


        for(let i=limit;i>=upLim;i--) {
            matrix[limit][i] = count;
            count++
        }
    }
    function up() {
        for(let i=limit;i>=upLim;i--) {
            matrix[i][init] = count;
            count++
        }
    }

    function spiral() {
    if (!init&&!limit&&!count) {
        init = 0;
        limit = n-1;
        count = 1;
        upLim = 1;
    } else {
        init += 1;
        limit -= 1;
        upLim += 1;
    }
    if ((limit-init) < 2) {
        if ((limit-init)==1) {
            matrix[init][init] = (count++);
            matrix[init][limit] = (count++);
            matrix[limit][limit] = (count++);
            matrix[limit][init] = (count++);
        } else {
            matrix[init][init] = (count++);
        }
        return;
    } else {
        right();
        down();
        left();
        up();
        spiral();
    }

    }
    spiral();

    return matrix;
}

// Codefights 60
// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

function sudoku(grid) {
    for (let i=0;i<grid.length;i++) {
        let columnNumbers = [];
        for (let j=0;j<grid.length;j++) {
            columnNumbers.push(grid[j][i]);
        }
        let column = new Set(columnNumbers);
        console.log(column)
        let row = new Set(grid[i]);
        console.log(row)
        console.log('next')


        if (row.size != 9 || column.size != 9) {
            return false;
        }
        columnNumbers = [];
    }

    let res = [];
    for (let k=1;k<9;k+=3) {
        for (let i=1;i<9;i+=3) {
            res.push(grid[i][k]);
            res.push(grid[i+1][k]);
            res.push(grid[i-1][k]);
            res.push(grid[i][k+1]);
            res.push(grid[i+1][k+1]);
            res.push(grid[i-1][k+1]);
            res.push(grid[i][k-1]);
            res.push(grid[i+1][k-1]);
            res.push(grid[i-1][k-1]);
            let set = new Set(res);
            if (set.size != 9) {
                return false;
            }
            res = [];
        }

    }

//     let diag1 = new Set([grid[0][0],grid[1][1],grid[2][2],grid[3][3],grid[4][4],grid[5][5],grid[6][6],grid[7][7],grid[8][8]]);
//     if (diag1.size!=9) {
//         return false;
//     }
//     console.log(diag1);

//     let diag2 = new Set([grid[8][0],grid[7][1],grid[6][2],grid[5][3],grid[4][4],grid[3][5],grid[2][6],grid[1][7],grid[0][8]]);
//     if (diag1.size!=9) {
//         return false;
//     }
//     console.log(diag2);

    return true;
}
