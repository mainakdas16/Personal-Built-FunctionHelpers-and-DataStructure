function map(value, cb) {
  var newArray = [];
  var index;
  if (Array.isArray(value) == true) {
    for (let indexValue of value) {
      index = value.indexOf(indexValue);
      cb(indexValue, index, value);

      newArray.push(cb(indexValue, index, value));
    }
  } else if (typeof value == "object") {
    for (let key in value) {
      cb(value[key], key, value);
      newArray.push(cb(value[key], key, value));
    }
  } else {
    //// console.log(`Please put in an array or an object`)
  }
  return newArray;
}

var test = map([9, 6, 9, 7, 7], function (value, index, array) {
  return index;
});
/////

// function filter(predicateFn, array) {
//     if (array.length == 0) return [];
//     const firstItem = head(array);
//     const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
//     return concat(filteredFirst,filter(predicateFn,tail(array)));
// }

// var wholes = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(n) {
//     var check = n/2;
//     if(check.isInterger()){
//         return true;
//     }else {
//         return false;
//     }
// }
// var kkk = filter(isEven, wholes);
// //// console.log(kkk);

// function that checkes if a number is even
var n = 7;
function isEven(n) {
  var keep = n / 2;
  if (Number.isInteger(keep)) {
    return true;
  } else {
    return false;
  }
}

/// Or
function isEven2(n) {
  var keep = n % 2;
  if (keep === 0) {
    return true;
  } else {
    return false;
  }
}
////// console.log(isEven2(n));

// Prime number tester using loops and if statement.

function isPrime(n) {
  var keep;
  for (let i = 2; i <= 13; i++) {
    if (n == 1 || n == 0) {
      keep = false;
    } else if (
      n > i &&
      n % i === 0 &&
      typeof keep == "undefined" // prevent keep from being resigned
    ) {
      keep = false;
    } else if (n == i && typeof keep == "undefined") {
      keep = true;
    }
  }
  return keep;
}
////// console.log(isPrime(15));

//isPrime using if statements.
function isPrime2(n) {
  if (n == 2) {
    return true;
  }
  if (!isEven(n)) {
    if (n == 3 || n == 5 || n == 7 || n == 11) {
      return true;
    } else if (n % 3 == 0 || n % 5 == 0 || n % 7 == 0 || n % 11 == 0) {
      return false;
    }
    return true;
  }
  return false;
}

////// console.log(isPrime2(47));


// Prime Number testing in sqrt(n) time - Suitable for numbers upto <= 10^16
export function isPrime3(n) {

	for(let i = 2; i * i <= n; i++) {
		if(n % i == 0) return false;
	}

	return true;
}
// console.log(isPrime3(15));

// Implementing a setTimeOut.
function delay(func, wait) {
  var d = Date.now();
  var currentDate;
  do {
    currentDate = Date.now();
  } while (currentDate - d < wait);

  return func();
}

function reverse(arr) {
  var temp = [];
  for (let item of arr) {
    temp.unshift(item);
  }

  /*loops throught the temp array backwards so as to pop the last elements in the arr array while
    adding to the front of the arr array the elements in the temp array from backwards */
  for (let item = temp.length - 1; item >= 0; item--) {
    arr.pop();
    arr.unshift(temp[item]);
  }
}

var array = [1, 2, 3];
reverse(array);
////// console.log(array);

/*functions that input random numbers in an array and also sort the array in ascending
order at the same time prevent reoccurence of numbers in the array. */

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(luckyLotteryNumbers) {
  var num = 0;
  var k = 1;
  var keep = lotteryNum();
  luckyLotteryNumbers.push(keep);
  luckyLotteryNumbers.sort(function (a, b) {
    if (a - b == 0) {
      // prevent recursion of same numbers.
      k = luckyLotteryNumbers.indexOf(a);
      num = 1;
    }
    return a - b;
  });
  luckyLotteryNumbers.splice(k, num); //only removes a value if it reoccures hence (a-b) = 0
}

function lottery() {
  let luckyLotteryNumbers = [];

  while (luckyLotteryNumbers.length < 6) {
    pickNumber(luckyLotteryNumbers);
  }

  return luckyLotteryNumbers;
}

// console.log(lottery());

//A isPalindrome function that checks if the str is the same if called backwards
function isPalindrome(str) {
  var another = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // a loop to loop through the str parameter from the back.
    another += str[i];
  }
  another === str ? true : false;
}

// //// console.log( isPalindrome("") === true );
// //// console.log( isPalindrome("a") === true );
// //// console.log( isPalindrome("aa") === true );
// //// console.log( isPalindrome("aba") === true );
// //// console.log( isPalindrome("abba") === true );
// //// console.log( isPalindrome("abccba") === true );

// //// console.log( isPalindrome("ab") === false );
// //// console.log( isPalindrome("abc") === false );
// //// console.log( isPalindrome("abca") === false );
// //// console.log( isPalindrome("abcdba") === false );

function pipe2(...args) {
  return function piped(input) {
    for (item of args) {
      input = items(input);
    }
    return input;
  };
}

/*Same functionality as the filter method on arrays */
function filterIn(cb, arr) {
  var newArr = [];
  for (let elem of arr) {
    if (cb(elem)) {
      newArr = [...newArr, elem]; //used in place of the newArr.push(elem) as a form of functional progarmming style.
      //newArr.push(elem);
    }
  }
  return newArr;
}

var items = filterIn(
  function (value) {
    return value > 5;
  },
  [1, 2, 3, 4, 5, 6, 8]
);

//// console.log(items);

//A function that prevent duplications in an array.
function uniqueElemArr(arr) {
  let item = [];
  for (let value of arr) {
    if (!item.includes(value)) {
      item = [...item, value]; /// equivalent to "item.push(value)"
    }
  }
  return item;
}

function uniqueArr2(array) {
  var breadCrums = {};
  var arr = [];
  array.forEach((elem) => {
    if (!breadCrums[elem]) {
      breadCrums[elem] = true;
      arr.push(elem);
    }
  });
  array = [...arr];
  return array.sort((a, b) => a - b);
}

////// console.log( uniqueElemArr([1,2,3,1,1,2,3,4,5,]) );
//// console.log(uniqueArr2([1,2,3,1,1,2,3,4,5,])) // [1,2,3,4,5]

/*Making a reduce function works for only arrays */
function reduceArr(cb, acc, arr) {
  //
  for (let elem of arr) {
    acc = cb(acc, elem);
  }
  return acc;
}

//reduce for both obj and arrays
function reduceObj(reducerFn, initialValue, o) {
  for (let key in o) {
    initialValue = reducerFn(initialValue, o[key]);
  }
  return initialValue;
}

var stringReduceTest = reduceObj(
  function (one, two) {
    return one + two;
  },
  "",
  ["Nosa ", "Is ", "A ", "Genius"]
);

////// console.log(stringReduceTest);

//making a map function with explicitly implemented reduce function
function mapWithExplicitReduceFunction(arr, mappingFn) {
  return reduceObj(
    function (first, second) {
      first.push(mappingFn(second));
      return first;
    },
    [],
    arr
  );
}

//making a filter function with explicitly implemented reduce function
function filterWithExplicitReduceFunction(arr, filterFn) {
  return reduceObj(
    function (first, second) {
      if (filterFn(second)) {
        first.push(second);
      }
      return first;
    },
    [],
    arr
  );
}

// Implimenting the curry function
function curryN(no, fn) {
  var newArrHolder = [];
  var i = 1;
  return function curryHolder(v) {
    newArrHolder = [...newArrHolder, v];
    if (i < no) {
      i++;
      return curryHolder;
    }
    return fn(...newArrHolder);
  };
}

//Test for curry  function.
function addOneCurry(x, y, z) {
  return x + y + z;
}
function addOne(x) {
  return x + 1;
}
function mul(int) {
  return int * 2;
}

var holder = curryN(3, addOneCurry);
// //// console.log(holder(7)(7)(7));

/*Implimenting the compose untility */
function compose(...args) {
  const arr = [...args.reverse()];
  return function composeHelper(input) {
    for (let elem of arr) {
      input = elem(input);
    }
    return input;
  };
}

//Test for compose
var ok = compose(addOne, mul);
////// console.log(ok(7));

//Another implimentation of pipe in term of compose.
function pipe(...args) {
  const arr = [...args];
  return compose(...arr.reverse());
}

//Test for compose
var ok = pipe(addOne, mul);
////// console.log(ok(7));

//convert Numbers to different base.
function convertNumberToDifferentBase(value, converTo) {
  return value.toString(converTo);
}

//concatAll that flatens 2 dimentionsal array in to a single dimensional array
var arr = [[1], [2, 3], [], [4]];

function concatAll(arr) {
  var emp = [];
  arr.forEach((x) => {
    return x.forEach((x) => {
      emp = [...emp, x];
    });
  });
  return emp;
}
concatAll(arr);

// zips an two array and combine them
var zip = function (left, right, combinerFunction) {
  var counter,
    results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    //Math.min to avoid length difference in the two array,uses the length of the smallest array.
    results.push(combinerFunction(left[counter], right[counter]));

    // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
  }

  return results;
};

var zipper = zip(
  [1, 2, 3],
  [4, 5, 6],
  function addElemOfBothArray(left, right) {
    return left + right;
  }
);
//// console.log(zipper); //[1,2,3] + [4,5,6] = [5,7,9]

/*

                                COMPUTER SCIENCE ALGORITHMS (BRIAN HOLT CLASS)
         check--- https://btholt.github.io/complete-intro-to-computer-science            for detailed info
                    more information about all algorithms can be found on the link above.

*/
///MY PERSONAL ALGORITHMS: DIFFERENT WAYS TO SORT NUMBER :FOR THE SAKE OF HAVING A "CONSTANT SPATIAL COMPLEXITY" ('MOST OF THE ALGORITHM MUTATES THEIR INITIAL VALUE')

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]; // GLOBAL ARRAY FOR ALL SORT FUNCTIONS

//--------------BUBBLE SORT ALGORITHM-------------

function bubbleSort(nums) {
  // code goes here
  var swap = true;
  while (swap) {
    var swapDetails = "NO Swap";
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        var keep = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = keep;
        swapDetails = "Swap";
      }
      if (swapDetails === "Swap") {
        swap = true;
      } else {
        swap = false;
      }
    }
  }
  return nums;
}

//bubble sort test
// //// console.log(bubbleSort(nums)); //[1,2,3,4,5,6,7,8,9,10];

//BUBBLE SORT TIME COMPLEXITY == NSQUARE -  QUADRATIC TIME COMPLEXITY  (Because it requires 2 loops)
// Takes estimatively about 0.12seconds to sort through the "NUMS" array .

//--------------iNSERTION SORT ALGORITHM-------------

function insertionSort(nums) {
  // code goes here
  for (let i = 1; i < nums.length; i++) {
    for (let k = i; k >= 0; k--) {
      if (nums[k] < nums[k - 1]) {
        var temp = nums[k];
        nums[k] = nums[k - 1];
        nums[k - 1] = temp;
      }
    }
  }
  return nums;
}

//Insertion sort test
//// console.log(insertionSort(nums)); //[1,2,3,4,5,6,7,8,9,10];

//INSERTION SORT TIME COMPLEXITY == NSQUARE -  QUADRATIC TIME COMPLEXITY  (Because it requires 2 loops)
// Takes estimatively about 0.12seconds to sort through the "NUMS" array .

//--------------RECURSION NESTATION ALGORITHM-------------
//VARIABLES FOR RECURSION NESTATION TEST
var nested = [1, 2, 3];
var nested2 = [1, [2], 3];
var nested3 = [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]];
var nested4 = [10, [12, 14, [1], [16, [20]]], 10, 11];

function nestedAdd(array) {
  if (array.length === 1) {
    if (Array.isArray(array[0])) {
      return nestedAdd(...array);
    }
    return array[0];
  }

  var [first, second, ...rest] = array;

  if (Array.isArray(first)) {
    var flat = [...first];
    return nestedAdd([...flat, second, ...rest]);
  }
  if (Array.isArray(second)) {
    var flat2 = [...second];
    return nestedAdd([first, ...flat2, ...rest]);
  }

  var addUP = first + second;
  return nestedAdd([addUP, ...rest]);
}

//// console.log(nestedAdd(nested)); //6
//// console.log(nestedAdd(nested2)); //6
//// console.log(nestedAdd(nested3)); //5
//// console.log(nestedAdd(nested4)); //94

//THE ABOVE FUNCTION "nestedAdd" WILL PROBABLY NOT RUN INTO A "STACK OVERLOAD PROBLEM" FOR A SYSTEM THAT SUPPORT TAIL CALL BECAUSE IT UTILIZES THE TAIL CALL SYSTEM, HENCE WHEN A RECURSION OCCURS IT DOESN'T BUBBLE UP(ADD TO THE CALL STACK) BUT INSTEAD REPLACES THE POSITION OF IT PREVIOUS FUNCTION THAT CALLED IT.

function nestedAdd2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

//// console.log(nestedAdd2(nested)); //6
//// console.log(nestedAdd2(nested2)); //6
//// console.log(nestedAdd2(nested3)); //5
//// console.log(nestedAdd2(nested4)); //94
//THE "nestedAdd2" FUCNTION WILL PROBABLY RUN IN A "STACK OVERLOAD PROBLEM" BECAUSE IT BUBBLES UP AND WILL TAKE MORE COMPUTATIONAL TIME IF THE INPUT HAVE A DIPPLY NESTED ARRAYS.

//--------------RECURSION FACTORIAL ALGORITHM-------------

function factorial(fac) {
  var sum = fac;
  if (sum > 1) {
    sum *= factorial(fac - 1);
  }
  return sum;
}
//// console.log(factorial(5)); //120
//THE FACTORIAL FUNCTION ABOVE WILL DEFINATELY RUN INTO A "STACK OVERLOAD PROBLEM" BECAUSE IT BUBBLES UP AND WILL TAKE MORE COMPUTATION TIME AND MORE SPACE ON THE STACK IF A LARGER NUMBER IS INPUTED I.E "10000 OR 10000000" (TRY USING THE FACTORIAL FUNCTION TO FIND THE FACTORIAL FOR THOSE NUMBER !WARNING: MIGHT CRASH YOUR CODE RUNNER, DO NOT RUN IN A BROWSER WILL DEFINATELY CRASH YOUR BROWSER).

function factorial2(num) {
  if (num < 2) return 1;
  return num * factorial2(num - 1);
}
//// console.log(factorial2(10000));
// THE FACTORIAL2 FUNCTION IS NOT TAILED CALLED SO WILL RUN INTO A "STACK OVERLOAD" BUT NOT AS QUICKLY AS THE FIRST FUCNTION ABOVE "FACTORIAL" . TRY RUNNING BOTH FUNCTIONS WITH THE VALUE "10000" AND SEE THE DIFFERENCE

//--------------MERGE SORT RECURSION ALGORITHM-------------
function mergeSort(array) {
  var firstHolder;
  var secondHolder;

  function merge(left, right) {
    const results = [];

    // go until one list runs outs
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        // shift removes the first element in an array and returns it
        // it's like .pop() for the front
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }

    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
  }

  if (array.length > 1) {
    var splitArray = array.splice(0, Math.ceil(array.length / 2));
    firstHolder = mergeSort(splitArray);
    secondHolder = mergeSort(array);
    return merge(firstHolder, secondHolder);
  }
  return array;
}
var keep = mergeSort([1, 5, 7, 4, 2, 3, 6]);
//// console.log(keep);
//THE MERGE SORT FUNCTION IS NOT TAIL CALL OPTIMIZED

//--------------QUICK SORT RECURSION ALGORITHM-------------

function quickSort(arr) {
  var result = [];
  if (arr.length < 2) {
    return arr;
  }
  const last = arr[arr.length - 1];
  var left = [];
  var right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < last) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  var leftHolder = quickSort(left);
  var rightHolder = quickSort(right);

  return result.concat(...leftHolder, last, ...rightHolder);
}
//// console.log(quickSort([4,9,3,5]));
//FUNCTION "QUICK SORT" NOT TAIL CALL OPTIMIZED

//--------------RADIX SORT RECURSION ALGORITHM-------------

function radixSort(array) {
  var arr = [...array];

  function getLongestNumber(array) {
    var longestNo = 0;
    array.forEach((elem) => {
      elem = elem.toString();
      if (elem.length > longestNo) {
        longestNo = elem.length - 1;
      }
    });
    return longestNo;
  }

  var longestNumber = getLongestNumber(array);
  var pointer = 1;

  while (longestNumber >= 0) {
    var bucket = new Array(10).fill().map((e) => []); // makes a new bucket on every invocation
    arr.forEach((elem) => {
      elem = elem.toString();
      var track = elem.length - pointer;
      bucket = sortIntoBucket(elem, track, bucket);
    });

    var temp = [];
    bucket.forEach((sorted) => {
      temp = temp.concat(sorted);
      arr = [...temp];
    });
    arr = arr.map((e) => Number(e)); //convers elements back to number
    pointer++;
    longestNumber--;
  }
  return arr;
}

//helper functions to help with function "radix sort"

function sortIntoBucket(elem, number, bucket) {
  var bucketPlace = Number(elem[number]) || 0; //of number in each unit position of the elem and if it is undefined returns 0;
  bucket[bucketPlace].push(elem);
  //pushs the element into the same array as its unit number
  //i.e elem = "58" number = 0; elem[number] = 5; bucketplace = 5; on the "5th" array in the bucket push "elem"
  //if elem[number] is undefined the bucketPlace will return 0;
  return bucket;
}

//// console.log(radixSort([109,224,58,901])) //[58,109,224,901]
const fill = 99;
const value = new Array(fill)
  .fill()
  .map(() => Math.floor(Math.random() * 500000));
// //// console.log(value.length); //99
// //// console.log(radixSort(value));// larger test sorts an array with 99 random numbers
// //// console.log(radixSort(value).length) //99
//// console.log(value.sort((a,b)=>a-b));

//OBSERVE THAT THE RADIX SORT FUNCITON DOES NOT COMPARE ANY ITEM TO ANOTHER RATHER SORT BY UNIT TEST OF EACH UNITS OF EACH NUMBERS IN THE INPUT ARRAY,
//THE FUNCITON HAS AN N LEVEL SPARTIAL COMPLEXITY CAUSE IT CREATE A NEW ARRAY FOR EVERY UNIT TESTS ALSO HAS A TIME COMPLEXITY OF NSQUARE.

//--------------BINARY SEARCH ALGORITHM-------------
/*THE BINARYSEARCH FUNCTION CAN ONLY WORK WHEN THE ITEM GIVEN IS ALREADY SORTED(ACCENDING ORDER)*/

function binarySearch(num, array) {
  var arr = [...array];
  var splitArray = Math.floor(arr.length / 2);
  var result = "not found";
  var answer = arr[splitArray];
  var half;
  typeof arr[0] === "object"
    ? (half = arr[splitArray].id)
    : (half = arr[splitArray]);

  if (half === num) {
    return answer;
  } else if (arr.length === 1 && result === "not found") {
    return result;
  } else if (half > num) {
    var keep = arr.splice(0, splitArray);
    return binarySearch(num, keep);
  } else if (half < num) {
    arr.splice(0, splitArray);
    return binarySearch(num, arr);
  }
}

function binarySearch2(num, array) {
  var arr = [...array];
  var found = false;
  var result = "not found";

  while (!found) {
    var splitArray = Math.floor(arr.length / 2);
    var answer = arr[splitArray];
    var half;
    typeof arr[0] === "object"
      ? (half = arr[splitArray].id)
      : (half = arr[splitArray]);

    if (half === num) {
      found = true;
    } else if (arr.length === 1 && result === "not found") {
      return result;
    } else if (half > num) {
      var keep = arr.splice(0, splitArray);
      arr = keep;
    } else {
      arr.splice(0, splitArray);
    }
  }
  return answer;
}

// Test for both binarySearch and binarysearch2 function , OBSERVE THAT BINARYSEARCH FUNCTION WORKS FOR BOTH PRIMITIVE AND OBJECT TYPE ELEMENTS IN THE INPUT.
var findobj = binarySearch(3, [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
]);

var findnum = binarySearch(12, [0, 5, 10, 12, 15, 19, 21, 22, 24, 30]);
// // console.log(findnum);
//// console.log(findobj)

var findobj = binarySearch2(3, [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
]);

var findnum = binarySearch2(12, [0, 5, 10, 12, 15, 19, 21, 22, 24, 30]);

//// console.log(findobj);

//// console.log(findnum);

/*THE BINARYSEARCH FUNCTION CAN ONLY WORK WHEN THE ITEM GIVEN IS ALREADY SORTED(ACCENDING ORDER)*/

//THE FIRST BINARYSEARCH "binarySearch" FUNCTION ABOVE USES RECUSION FOR ITS COMPUTATION AND IS TAIL CALL OPTIMIZED.  THE SECOND BINARYSEARCH "binarySearch2" FUNCTION USES ITERATION(LOOP) FOR ITS COMPUTATION
//FOR A SYSTEM THAT DOESN'T SUPPORT TAIL CALL, THE "binarySearch2" FUNCTION IS WILL BE BETTER FOR PERFORMANCE REASONS ESPECIALLY WHEN DEALING WITH LARGER INPUT

//--------------LINEAR SEARCH ALGORITHM-------------
/*THE LINEARSEARCH FUNCTION CAN WORK WITH ELEMENTS IN ANY ORDER (IT DOES ALMOST THE SAME THING AS THE ARRAY.INCLUDES() METHOD)*/

function linearSearch(num, array) {
  var arr = [...array];
  var result = "not found";
  for (let counter = 0; counter < arr.length; counter++) {
    var check;
    typeof arr[0] === "object"
      ? (check = arr[counter].id)
      : (check = arr[counter]);
    if (check === num) {
      return (result = arr[counter]);
    }
  }

  return result;
}
var testobj = linearSearch(31, [
  { id: 1, name: "Sam" },
  { id: 11, name: "Sarah" },
  { id: 21, name: "John" },
  { id: 10, name: "Burke" },
  { id: 13, name: "Simona" },
  { id: 31, name: "Asim" },
  { id: 6, name: "Niki" },
  { id: 19, name: "Aysegul" },
  { id: 25, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 2, name: "Marc" },
  { id: 51, name: "Chris" },
  { id: 14, name: "Ben" },
]);
var testnum = linearSearch(6, [, 2, 3, 6, 5, 7]);
// //// console.log(testobj);
// //// console.log(testnum);

//--------------ARRAY LIST ALGORITHM USING JAVASCRIPT OBJECT-------------

class ArrayList {
  constructor() {
    this.length = 0;
  }
  push(num) {
    this[this.length] = num;
    this.length++;
  }
  pop() {
    var last = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return last;
  }
  get(index) {
    return this[index];
  }
  shift() {
    if (this.length > 0) {
      var answer = this[0];
      this[0] = null;
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.length - 1];
      this.length--;
      return answer;
    }
    return null;
  }
  delete(index) {
    var removedItem = this[index];
    this.length--;
    delete this[index];
    if (index !== this.length) {
      for (let i = index; i < this.length; i++) {
        this[i] = this[i + 1];
        delete this[i + 1];
      }
    }
    return removedItem;
  }
}

var test = new ArrayList();

// test.push(3);
// test.push(4);
// test.push(8);
// test.push(9);
// //// console.log(test.length);
// //// console.log(test);
// //// console.log(test.delete(1));
// //// console.log(test);

//-------------- DIFFERENT ALGORITHM TO GET VALUES FROM A TREE IN DIFFERRENT ORDER (TRAVERSE) -------------

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

// //GET ALL ELEMENTS IN THE LEFT OF EACH NODES STARTING FROM THE NODE ITSELF FIRST BEFOR GETTING THE ELEMENT IN THE RIGHT
function preorder(tree, node) {
  var current = tree;
  node.push(current.value);
  var leftHolder = current.left;
  var rightHolder = current.right;
  if (leftHolder == null && rightHolder == null) {
    return node;
  } else if (leftHolder == null && rightHolder != null) {
    node = preorder(rightHolder, node);
  } else {
    node = preorder(leftHolder, node);
  }
  if (rightHolder == null) {
    return node;
  } else if (!node.includes(rightHolder.value)) {
    node = preorder(rightHolder, node);
  }
  return node;
}

// //GET ALL ELEMENTS IN THE LEFT OF EACH NODES STARTING FROM THE LAST ELEMENT IN NODE ITSELF FIRST BEFOR GETTING THE ELEMENT IN THE RIGHT
function postorder(tree, node) {
  var current = tree;
  var leftHolder = current.left;
  var rightHolder = current.right;
  if (leftHolder == null && rightHolder == null) {
    node.push(current.value);
    return node;
  } else if (leftHolder == null && rightHolder != null) {
    node = postorder(rightHolder, node);
  } else {
    node = postorder(leftHolder, node);
  }
  if (rightHolder == null) {
    node.push(current.value);
    return node;
  } else if (!node.includes(rightHolder.value)) {
    node = postorder(rightHolder, node);
  }
  node.push(current.value);
  return node;
}

//GET ELEMENTS FROM THE TREE IN ACCEDING ORDER
function inorder(tree, node) {
  var current = tree;
  var leftHolder = current.left;
  var rightHolder = current.right;
  if (leftHolder == null && rightHolder == null) {
    node.push(current.value);
    return node;
  } else if (leftHolder == null && rightHolder != null) {
    node.push(current.value);
    node = inorder(rightHolder, node);
  } else {
    node = inorder(leftHolder, node);
  }

  if (!node.includes(current.value)) {
    node.push(current.value);
  }

  if (rightHolder == null) {
    return node;
  } else {
    node = inorder(rightHolder, node);
  }
  return node;
}

//TESTS
var fingerCrossed = preorder(tree, []);
//// console.log(fingerCrossed); // [8,4,3,2,5,7,6,12,10,9,11]

var fingerCrossed2 = postorder(tree, []);
//// console.log(fingerCrossed2); // [2,3,4,5,6,7,8,9,10,11,12]

var fingerCrossed3 = inorder(tree, []);
//// console.log(fingerCrossed3); //[2,3,4,5,6,7,8,9,10,11,12]

//GET ELEMENT FROM THE CLOSE ELEMENT
function breadth(tree, node) {
  tree.forEach((elem) => {
    node.push(elem.value);

    tree.shift();
    if (elem.left) tree.push(elem.left);
    if (elem.right) tree.push(elem.right);
    return breadth(tree, node);
  });
  return node;
}

var fingerCrossed4 = breadth([tree], []);
//// console.log(fingerCrossed4) //[8,4,12,3,5,10,2,7,9,11,6]

//-------------- ALGORITHM TO CONVERT AN ARRAY TO A HEAP  AND SORT THE HEAPED ARRAY -------------

const heapSort = (array) => {
  // code
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    array = heapify(array, i, array.length);
  }
  //// console.log(array) uncomment to view heaped array.
  // heaped array will be [  10, 9, 6, 8, 5, 3, 4, 7, 2, 1]
  for (let i = array.length - 1; i > 0; i--) {
    array = createMaxHeap(array, i);
  }
  //final anwser result in sorted heap array. [1,2,3,4,5,6,7,8,9,10]
  return array;
};

const heapify = (array, i, heapSize) => {
  // turns the array into a heap
  // code
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var temp = i;

  if (heapSize > left && array[left] > array[temp]) {
    temp = left;
  }
  if (heapSize > right && array[right] > array[temp]) {
    temp = right;
  }

  if (temp !== i) {
    var keep = array[i];
    array[i] = array[temp];
    array[temp] = keep;

    heapify(array, temp, heapSize);
  }

  return array;
};
const createMaxHeap = (array, i) => {
  // sorts the heap array in accending order
  // code
  var temp = array[0];
  array[0] = array[i];
  array[i] = temp;
  array = heapify(array, 0, i);
  return array;
};

// var test = heapSort([2, 5, 3, 8, 10, 6, 4, 7, 9, 1]); //[1,2,3,4,5,6,7,8,9,10]
// // console.log(test);

//-------------- ALGORITHM TO GRAPHS GETTING INFORMATION OUT GIVEN AN ID AND DEPTHS -------------
import list from "./testSite2.js";
// GETS GRAPH DATA STRUCTURE FROM TESTSITE2.JS FILE

function connect(id, depth) {
  var getMostPopularjob = [];
  var ArrayofAllJobs = [];
  var mostPopularjob;
  var scoreofMostPopularjob = 1;

  var connectionArray = [];
  list.forEach((elem) => {
    if (elem.id == id) {
      connectionArray = [...connectionArray, ...elem.connections];
      getMostPopularjob.push({ job: elem.title, score: 1 });
      ArrayofAllJobs.push(elem.title);
      mostPopularjob = elem.title;
    }
  });

  for (let i = 1; i < depth; i++) {
    connectionArray.forEach((connectionelem) => {
      list.forEach((elem) => {
        if (connectionelem == elem.id) {
          elem.connections.forEach((connectedelem) => {
            //avoid repetition of ids
            if (!connectionArray.includes(connectedelem)) {
              connectionArray.push(connectedelem);
            }
          });
        }
      });
    });
  }

  connectionArray.forEach((elem) => {
    list.forEach((elem2) => {
      if (elem === elem2.id) {
        getMostPopularjob.forEach((elemPopular) => {
          // increase job of each scores for people with same jobs
          if (elemPopular.job === elem2.title) {
            elemPopular.score = elemPopular.score + 1;
            if (elemPopular.score > scoreofMostPopularjob) {
              // get most popular job by its score
              scoreofMostPopularjob = elemPopular.score;
              mostPopularjob = elemPopular.job;
            }
          }
        });
        if (!ArrayofAllJobs.includes(elem2.title)) {
          // Avoid repition of people with same jobs
          ArrayofAllJobs.push(elem2.title);
          getMostPopularjob.push({ job: elem2.title, score: 1 });
        }
      }
    });
  });
  return mostPopularjob;
}

// var popular = connect(306, 4);
// // console.log(popular);

//-------------- ALGORITHM TO BUILDING TRIES FOR MAKING SEARCHING AND AUTO COMPLETE BOXES RESTRICTING THE SEARCH TO ONLY 3 VALUES -------------
// USING CLASSES
import { CITY_NAMES } from "./testSite2.js";

class Node {
  constructor(arr) {
    this.arr = arr;
  }
  complete(string) {
    var answer = [];
    var findcheck = string.toLowerCase();
    this.arr.forEach((elem) => {
      var check = elem.toLowerCase();
      if (findcheck[0] == check[0] && check.includes(findcheck)) {
        if (answer.length < 3) {
          answer.push(check);
        }
      }
    });
    return answer;
  }
}

const createTrie = (words) => {
  // you do not have to do it this way; this is just how I did it
  const root = new Node(words);

  // more code should go here

  return root;
};

const root = createTrie(CITY_NAMES.slice(0, 200));
const completions = root.complete("new");
// console.log(completions); //['new york', 'new orleans', 'newark']

//USING ONLY FUNCTIONS

function search(arr, string) {
  var answer = [];
  var findcheck = string.toLowerCase();
  arr.forEach((elem) => {
    var check = elem.toLowerCase();
    if (findcheck[0] == check[0] && check.includes(findcheck)) {
      if (answer.length < 3) {
        answer.push(check);
      }
    }
  });
  return answer;
}
var result = search(CITY_NAMES.slice(0, 200), "new");
// console.log(result); //['new york', 'new orleans', 'newark']

//-------------- BLOOM FILTER ALGORITHM -------------
//Used to test if a value have been added before without having to deal with add the value to an array
//cause when so many values are added it might have performance issues on the system, bloom filter can really be effective though it is not some time correct but still effective it is a trade off between 100% certainty and (performance or memory).

//Bloom filters works by passing a string through a hash function (functions that converts it string into a number i.e they are always consistent)  read more on bloom filter here "https://btholt.github.io/complete-intro-to-computer-science/bloom-filters"
import { hash1, hash2, hash3 } from "./hashing-functions.js"; //personal coded hashing functions
var h1 = hash1(100);
var h2 = hash2(100);
var h3 = hash3(100);

class BloomFilter {
  constructor() {
    this.array = new Array(100).fill(0); // makes an array of 100 elements and fill them all up with 0 i.e [0,0, 0,...]
    this.h1 = h1;
    this.h2 = h2;
    this.h3 = h3;
  }

  add(string) {
    var h1 = this.h1(string);
    var h2 = this.h2(string);
    var h3 = this.h3(string);
    this.array[h1] = 1;
    this.array[h2] = 1;
    this.array[h3] = 1;
  }
  contains(string) {
    var h1 = this.h1(string);
    var h2 = this.h2(string);
    var h3 = this.h3(string);

    if (this.array[h1] === 0 || this.array[h2] === 0 || this.array[h3] === 0) {
      return false;
    } else {
      return true;
    }
  }
}

//These test uses hashing function found in the hashing functions.js file, they are just pesudohasing functions for the purpose of this test.
//CHECK "https://codesandbox.io/s/algorithms-exercises-forked-q2hhq8?file=/specs/bloom-filters/bloom-filters.test.js" TO VIEW A TEST OF BLOOM FILTER. SAME CODE AS ABOVE.
var bf = new BloomFilter();
// // console.log(bf.contains("Brian")); //false
// // console.log(bf.contains("semona")); //false
// // console.log(bf.contains("serah")); //false
// bf.add("Brian");
// // console.log(bf.contains("Brian")); //true
// // console.log(bf.contains("semona")); //false
// // console.log(bf.contains("serah")); //false

/*

                                COMPUTER SCIENCE ALGORITHMS (BIANCA GANDOLFO CLASS)
         check--- https://slides.com/bgando/intro-to-algorithms#/ for detailed info
                    more information about all algorithms can be found on the link above.

*/

//Personal Algorithms

//-------------- UNIQUE ARR ALGORITHM -------------

function uniqueArr(arr) {
  let item = [];
  for (let value of arr) {
    if (!item.includes(value)) {
      item = [...item, value]; /// equivalent to "item.push(value)"
    }
  }
  return item;
}

function uniqueArr3(array) {
  var breadCrums = {};
  var arr = [];
  array.forEach((elem) => {
    if (!breadCrums[elem]) {
      //restriction
      breadCrums[elem] = true;
      arr.push(elem);
    }
  });
  array = [...arr];
  return array.sort((a, b) => a - b);
}

////// console.log( uniqueArr([1,2,3,1,1,2,3,4,5,]) ); [1,2,3,4,5]
//// console.log(uniqueArr2([1,2,3,1,1,2,3,4,5,])) // [1,2,3,4,5]

//THE FIRST UNIQUEARR FUNCTION ("uniqueArr") HAS A TIME COMPLEXITY OF NSQUARE (QUADRATIC) BECAUSE IT USES THE .INCULDES METHOD WHICH UNDER THE HOOD LOOPS THROUGH EVERY ELEMENT IN THE ARRAY AT WORST CASE SENERIO THEREFORE TWO NESTED LOOPS CREATING A TIME COMPLEXITY OF NSQUARE . IT ALSO HAS A SPATIAL COMPLEXITY OF N (LINEAR) CAUSE IT CREATE AND RETURNS A NEW ARRAY MAKING A NEW SPACE IN MEMORY.

//THE SECOND UNIQUEARR FUNCTION ("uniqueArr2") HAS A TIME COMPLEXITY OF N (LINEAR), IT HAS NO NEXTATION OF LOOPS, IT ALSO HAS A CONSTANT SPATIAL COMPLEXITY CAUSE IT DOESN'T CREATE AND KEEP A NEW SPACE IN MEMORY

//HENCE THE SECOND FUNCTION ("uniqueArr2") MIGHT BE BETTER FOR PERFORMANCE. BUT THE SECOND MIGHT BE BETTER FOR READABILITY.

//-------------- QUEUE (DATA STRUCTURE) ALGORITHM -------------

class Queue {
  constructor() {
    this._length = 0;
    this._track = 0;
  }
  enqueue(value) {
    this[this._length + this._track] = value;
    this._length++;
  }
  dequeue() {
    var answer = this[this._track];
    delete this[this._track];
    this._track++;
    this._length--;
    return answer;
  }
  peek() {
    return this[this._track];
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(9);
// queue.enqueue(7);
// queue.enqueue(6);
// queue.enqueue(100);
// queue.dequeue();
// queue.enqueue(78);
// queue.dequeue();

// // console.log(queue.peek());
// // console.log(queue);

//ALL ABOVE METHODS IN THE QUEUE OBJ ALL HAVE A CONSTANT TIME COMPLEXITY

//-------------- LINKED LIST (DATA STRUCTURE) ALGORITHM -------------

class Linkedlist {
  constructor() {
    this.head = null;
    this._pointer = this.head;
    this._length = 0;
  }
  insert(elem) {
    this._length++;
    if (this.head === null) {
      this.head = {
        value: elem,
        next: this._pointer,
      };
      this._pointer = this.head;
    } else if (this._pointer.next === null) {
      if (this.contains(elem)) return "value already exists"; //Avoid repeatition of values;
      // this.previous = { ...this._pointer };
      this._pointer.next = {
        value: elem,
        next: null,
      };
      // // console.log(this.previous);
      this._pointer = this._pointer.next;
    }
  }
  insertIn(position, value) {
    var currentNode = this.head;
    if (!this.contains(position))
      return "position to be inserted doesn't exist";
    if (position === this._pointer.value) {
      this.insert(value);
    } else {
      if (this.contains(value)) return "value already exist"; // Avoid duplicated values
      while (currentNode.value !== position) {
        currentNode = currentNode.next;
      }
      var temp = { ...currentNode.next };
      currentNode.next = {
        value,
        next: temp,
      };
      this._length++;
    }
  }
  InsertNewHead(value) {
    if (this.contains(value)) return "value already exist";
    var temp = { ...this.head };
    this.head = {
      value,
      next: temp,
    };
    this._length++;
  }
  isHead(node) {
    node === this.head ? true : false;
  }
  isTail(node) {
    node === this._pointer ? true : false;
  }
  get(value) {
    if (!this.contains(value)) return "value doesn't exist";
    var currentNode = this.head;
    if (currentNode.value === value) {
      return currentNode;
    } else if (this._pointer.value === value) {
      return this._pointer;
    } else {
      while (currentNode.value !== value) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  contains(value) {
    var check = this.head;
    if (check === null) return false;
    if (check.value === value) return true;

    while (check.next !== null) {
      check = check.next;
      if (check.value === value) return true;
    }
    return false;
  }
  removeHead() {
    this.head = this.head.next;
    this._length--;
  }
  remove(value) {
    var currentNode = this.head;
    var temp = null;

    if (!this.contains(value)) return "value do not exit";
    if (value === this._pointer.value) {
      this.removeTail();
    } else if (this.head.value === value) {
      this.removeHead();
    } else {
      while (currentNode["next"].value !== value) {
        currentNode = currentNode.next;
      }
      var removed = { ...currentNode.next };
      temp = { ...currentNode["next"].next };
      currentNode.next = null;
      currentNode.next = temp;
      this._length--;
      return removed;
    }
  }
  reverseList() {
    var currentNode = { ...this.head };
    var reverse = this.head;
    var counter = 0;
    while (currentNode.next !== null) {
      var temp1 = { ...reverse };
      var temp2 = { ...currentNode.next };
      reverse = temp2;
      reverse.next = temp1;
      currentNode = currentNode.next;
    }
    var test = reverse;
    while (counter < this._length - 1) {
      test = test.next;
      counter++;
    }
    test.next = null;
    this._pointer = test;
    this.head = reverse;
  }
  removeTail() {
    this._length--;
    var loop = this.head;
    var self = this;
    function rmLastNode(loop) {
      if (loop["next"]["next"] !== null) {
        return rmLastNode(loop["next"]);
      } else if (loop["next"]["next"] === null) {
        var temp = loop["next"];
        loop["next"] = null;
        self._pointer = loop;
        return temp;
      }
    }
    return rmLastNode(loop);
  }
}

var test23 = new Linkedlist();
// test23.insert(2);
// test23.insert(7);
// test23.InsertNewHead(3);
// test23.insert(99);
// // console.log(test23.get(2));
// test23.reverseList();
// test23.remove(10);
// test23.insertIn(2, 76);
// // console.log(test23.removeTail());
// // console.log(test23.contains(10));
// // console.log(test23.removeTail());
// test23.insert(100);
// // console.log(test23);

//-------------- HASHTABLE (DATA STRUCTURE) ALGORITHM -------------

import { _hash } from "./hashing-functions.js";

class HashTable {
  constructor(range) {
    this._storage = {};
    this._range = range;
    this._length = 0;
  }
  insert(string) {
    var random = _hash(string, this._range);
    if (random in this._storage && this._storage[random] !== string) {
      if (!Array.isArray(this._storage[random])) {
        this._storage[random] = [this._storage[random]];
      }
      if (Array.isArray(this._storage[random])) {
        this._storage[random].push(string);
      }
    } else if (!(random in this._storage)) {
      this._storage[random] = string;
      this._length++;
    }
    if (this._length === Math.floor(this._range / 2)) this._range *= 2;
    return random;
  }
  remove(string) {
    var answer;
    for (let keys in this._storage) {
      if (this._storage[keys] === string) {
        answer = `key: ${keys} value: ${string}`;
        delete this._storage[keys];
        this._length--;
        return answer;
      }
      if (Array.isArray(this._storage[keys])) {
        this._storage[keys].forEach((elem, index) => {
          if (elem === string) {
            this._storage[keys].splice(index, 1);
            answer = `key: ${keys} value: ${elem}`;
          }
        });
      }
    }
    answer = "not found";
    return answer;
  }
  retrieve(key) {
    if (key in this._storage) {
      return this._storage[key];
    }
    return "not found";
  }
}

// var hashtable = new HashTable(100);
// hashtable.insert("kemi");
// hashtable.insert("tunde");
// hashtable.insert("shola");
// hashtable.insert("tope");
// hashtable.insert("kemi");
// hashtable.insert("advise");
// hashtable.insert("compromise");
// hashtable.insert("abc");
// // console.log(hashtable.retrieve(8));
// // console.log(hashtable);

// // console.log(hashtable.remove("abc"));
// // console.log(hashtable);

//-------------- BINARYTREE (DATA STRUCTURE) ALGORITHM -------------

class BinaryTree {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.value === null) this.value = value;
    if (this.left === null && value < this.value) {
      var left = new BinaryTree();
      this.left = left;
      this.left.insert(value);
    } else if (this.right === null && value > this.value) {
      var right = new BinaryTree();
      this.right = right;
      this.right.insert(value);
    } else if (this.left !== null && value < this.value) {
      this.left.insert(value);
    } else if (this.right !== null && value > this.value) {
      this.right.insert(value);
    }
  }
  preTraverse() {
    function preOrderTraverse(tree, arr) {
      arr.push(tree.value);
      if (tree.left !== null) preOrderTraverse(tree.left, arr);
      if (tree.right !== null) preOrderTraverse(tree.right, arr);
      return arr;
    }
    return preOrderTraverse(this, []);
  }
  sortedTraverse() {
    function inOrderTraverse(tree, arr) {
      if (tree.left !== null) inOrderTraverse(tree.left, arr);
      arr.push(tree.value);
      if (tree.right !== null) inOrderTraverse(tree.right, arr);
      return arr;
    }
    return inOrderTraverse(this, []);
  }
  postTraverse() {
    function postOrderTraverse(tree, arr) {
      if (tree.left !== null) postOrderTraverse(tree.left, arr);
      if (tree.right !== null) postOrderTraverse(tree.right, arr);
      arr.push(tree.value);
      return arr;
    }
    return postOrderTraverse(this, arr);
  }

  contains(value) {
    var result = false;
    function answer(tree) {
      if (tree.value === value) return (result = true);
      if (tree.left !== null) return answer(tree.left);
      if (tree.right !== null) return answer(tree.right);
    }
    answer(this);
    return result;
  }
}
// tests
const btree = new BinaryTree();
// btree.insert(7);
// btree.insert(9);
// btree.insert(1);
// btree.insert(10);
// btree.insert(2);
// btree.insert(0);
// btree.insert(8);
// btree.insert(11);
// // console.log(btree);
// // console.log(btree.contains(0));
// // console.log(btree.contains(1000));
// // console.log(btree.sortedTraverse());

//-------------- DIFFERENT ALGORITHM TO TRAVERSE THROUGHT A TREE -------------

function preOrderTraverse(tree, arr) {
  arr.push(tree.value);
  if (tree.left !== null) preOrderTraverse(tree.left, arr);
  if (tree.right !== null) preOrderTraverse(tree.right, arr);
  return arr;
}
function inOrderTraverse(tree, arr) {
  if (tree.left !== null) inOrderTraverse(tree.left, arr);
  arr.push(tree.value);
  if (tree.right !== null) inOrderTraverse(tree.right, arr);
  return arr;
}
function postOrderTraverse(tree, arr) {
  if (tree.left !== null) postOrderTraverse(tree.left, arr);
  if (tree.right !== null) postOrderTraverse(tree.right, arr);
  arr.push(tree.value);
  return arr;
}

//tests
// // console.log(preOrderTraverse(btree, []));
// // console.log(inOrderTraverse(btree, []));
// // console.log(postOrderTraverse(btree, []));

//-------------- GRAPH (DATA STRUCTURE) ALGORITHM  -------------

class Graph {
  constructor(value) {
    this[value] = { value, connections: [] };
  }
  addNode(value) {
    if (!(value in this)) {
      this[value] = { value, connections: [] };
    }
  }
  addEdge(nodeA, ...rest) {
    const nodeB = [...rest];
    for (let i = 0; i < nodeB.length; i++) {
      if (nodeA in this && nodeB[i] in this) {
        if (!this[nodeA].connections.includes(nodeB[i]))
          this[nodeA].connections.push(nodeB[i]);
        if (!this[nodeB[i]].connections.includes(nodeA))
          this[nodeB[i]].connections.push(nodeA);
      } else {
        this.addNode(nodeA);
        this.addNode(nodeB[i]);
        this.addEdge(nodeA, nodeB[i]);
      }
    }
  }
  removeNode(node) {
    var temp = { ...this[node] };
    if (node in this) {
      for (let i = 0; i < this[node].connections.length; i++) {
        const nodeConnections = this[node].connections[i];
        const connectedNodes = this[nodeConnections].connections;
        const index = connectedNodes.indexOf(node);
        connectedNodes.splice(index, 1);
      }
      delete this[node];
      return temp;
    }
  }

  depthFirstTraversal(value) {
    const visited = {};
    const graph = this;
    function depthFirst(value, arr) {
      if (!(value in visited)) {
        visited[value] = true;
        arr.push(value);
        const connectedNodes = graph[value].connections;
        for (let i = 0; i < connectedNodes.length; i++) {
          depthFirst(connectedNodes[i], arr);
        }
      }
      return arr;
    }
    return depthFirst(value, []);
  }

  breadthFirstTraversal(value) {
    const visited = {};
    const arr = [...graph[value].connections];
    visited[value] = true;
    const result = [value];

    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in visited)) {
        visited[arr[i]] = true;
        var temp = arr[i];
        result.push(arr[i]);
        arr.push(...this[temp].connections);
      }
    }
    return result;
  }
}

const graph = new Graph(7);
graph.addNode(8);
graph.addEdge(7, 8, 10, 9, 11, 12, 13, 14);
graph.removeNode(12);
graph.addNode(10);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
graph.addEdge(8, 9);
graph.addEdge(9, 100);
graph.addEdge(10, 24);
graph.addEdge(12, 25);
// console.log(graph);
// console.log(graph.depthFirstTraversal(7));
// console.log(graph.breadthFirstTraversal(7));

//-------------- DEPTH FIRST TRAVERSAL  THROUGH ABOVE GRAPH ALGORITHM  -------------

function depthFirstTraversal(value, graph) {
  const visited = {};
  function depthFirst(value, arr) {
    if (!(value in visited)) {
      visited[value] = true;
      arr.push(value);
      const connectedNodes = graph[value].connections;
      for (let i = 0; i < connectedNodes.length; i++) {
        depthFirst(connectedNodes[i], arr);
      }
    }
    return arr;
  }
  return depthFirst(value, []);
}

// // console.log(depthFirstTraversal(7, graph));

//-------------- BREADTH FIRST TRAVERSAL  THROUGH ABOVE GRAPH ALGORITHM  -------------

function breadthFirstTraversal(value, graph) {
  const visited = {};
  const arr = [...graph[value].connections];
  visited[value] = true;
  const result = [value];

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in visited)) {
      visited[arr[i]] = true;
      var temp = arr[i];
      result.push(arr[i]);
      arr.push(...graph[temp].connections);
    }
  }
  return result;
}

// // console.log(breadthFirstTraversal(7, graph));

//-------------- ALGORITHM TO SORT AN ARRAY RANDOMLY -------------

function sortArrayRandomly(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    const randomPosition = Math.floor(Math.random() * (arr.length - 1));
    arr[i] = arr[randomPosition];
    arr[randomPosition] = temp;
  }
  return arr;
}

var randomArr = sortArrayRandomly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(randomArr);

//-------------- ALGORITHM TO VALIDATE SUBSEQUENCE OF AN ARRAY -------------
// console.log(":");

function isValidSubsequence(array, sequence) {
  var arrC = [...array];
  var arr = [];

  for (let i = 0; i < sequence.length; i++) {
    if (arrC.includes(sequence[i])) {
      arr.push(sequence[i]);
      arrC = arrC.splice(arrC.indexOf(sequence[i]) + 1, arrC.length);
    }
  }

  return arr.length === sequence.length ? true : false;
}

// tests;
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])
// ); //true
// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])
// ); //true
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10])); //true
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10])); //true
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10])); //true
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25])); //true
// console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1])); //true
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 25, 6, -1, 8, 10, 12]
//   )
// ); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [4, 5, 1, 22, 25, 6, -1, 8, 10, 12]
//   )
// ); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 23, 6, -1, 8, 10, 12]
//   )
// ); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 22, 25, 6, -1, 8, 10, 12]
//   )
// ); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 22, 6, -1, 8, 10, 12]
//   )
// ); //false
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1])); //false
// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10])
// ); //false
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2])); //false
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26])); //false
// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10])
// ); //false
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8])); //false
// console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6])); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [1, 6, -1, 10, 11, 11, 11, 11]
//   )
// ); //false
// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 25, 6, -1, 8, 10, 10]
//   )
// ); //false
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 5])); //false

//-------------- ALGORITHM TO A RANDOM ID GENERATOR -------------

function id() {
  var randomId = "_";
  const fakeIdGen = () => Math.floor(Math.random() * 9);
  for (let i = 0; i < 5; i++) {
    randomId += fakeIdGen();
  }
  return randomId;
}

// // console.log(id());

function randomNumberBetween(first, second) {
  if (typeof first !== "number" && typeof second !== "number")
    return "error expected type Number";
  const firstVal = Number(first);
  const secondVal = Number(second);
  const diff = Math.abs(firstVal - secondVal) - 1;

  const randomDiff = Math.floor(Math.random() * diff);
  const bigger = firstVal > secondVal ? firstVal - 1 : secondVal - 1;
  return Math.abs(bigger - randomDiff);
}
// // console.log(randomNumberBetween(20, 10));

//Optimized fibonacciSeries function
export function fibonacciSeries(value) {
  if (value > 1500) return Infinity;
  const cache = {};
  function fibHelper(value) {
    if (value < 3) return 1;
    const prev = cache[value - 1] ? cache[value - 1] : fibHelper(value - 1);
    const secondPrev = cache[value - 2]
      ? cache[value - 2]
      : fibHelper(value - 2);
    const result = prev + secondPrev;
    if (!cache[value]) cache[value] = result;
    return result;
  }
  const answer = fibHelper(value);
  //// console.log(cache);
  return answer;
}

const answer = fibonacciSeries(5);
// console.log(answer);

const randomPasswordGen = () => {
  var use = "api-";
  for (let i = 0; i < 5; i++) {
    use += String.fromCharCode(randomNumberBetween(97, 122));
  }
  use += "-";
  for (let i = 0; i < 5; i++) {
    const randomNo = Math.floor(Math.random() * 10);
    use += randomNo;
  }
  return use;
};
// console.log(randomPasswordGen());

export function MostOccuringNumberInAnArray(arr) {
  let answer = null;
  let noOfRepeation = null;
  let cache = {};

  for (var i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      cache[arr[i]] = ++cache[arr[i]];
    } else {
      cache[arr[i]] = 1;
    }
  }

  for (var key in cache) {
    if (!noOfRepeation) {
      noOfRepeation = cache[key];
      answer = Number(key);
    } else if (cache[key] > noOfRepeation) {
      noOfRepeation = cache[key];
      answer = Number(key);
    } else if (cache[key] === noOfRepeation) {
      if (typeof answer === "object") {
        answer = { ...answer, [key]: noOfRepeation };
      } else {
        answer = { [answer]: noOfRepeation, [key]: noOfRepeation };
      }
    }
  }

  return answer;
}

// const testArray = [
//   1, 9, 4, 9, 4, 5, 4, 5, 9, 5, 9, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6, 4,
// ];
// const testArray2 = [1, 4, 9, 4, 5, 9, 5, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6];
const testArray2 = [1, 9, 4, 4, 5, 5, 9, 5, 9, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6];

const reply = MostOccuringNumberInAnArray(testArray2);
// console.log(reply);

function staircase(n) {
  // Write your code here
  var result = "";
  for (let data = 1; data <= n; data++) {
    let hash = new Array(n).fill(` `);
    for (let hashCount = 0; hashCount < data; hashCount++) {
      hash[n - 1 - hashCount] = "#";
    }
    result = `${result}${hash.join("")}${"\n"}`;
  }
  return result;
}

//console.log(6)

/* A function that takes 3 argument
--------
first argument: First sorted array with blank spaces for addition of other array

second argument: Length of first sorted array

third argument: Second sorted array

forth argument: Length of second sorted array
----------
merges two sorted array into one big sorted array, and mutates  the first array.to answer. */

//Time Complexity: O(n)
const mergeMutate = function (firstArray, m, secondArray, n) {
  const copyOfFirstArray = firstArray.splice(0, m);
  const copyOfSecondArray = [...secondArray];
  let arrayLocationCounter = 0;

  while (copyOfFirstArray.length && copyOfSecondArray.length) {
    if (copyOfFirstArray[0] < copyOfSecondArray[0]) {
      firstArray[arrayLocationCounter] = copyOfFirstArray.shift();
    } else {
      firstArray[arrayLocationCounter] = copyOfSecondArray.shift();
    }
    arrayLocationCounter += 1;
  }

  //In case of any remaining element in array
  firstArray.push(...copyOfFirstArray, ...copyOfSecondArray);
};

let nums1 = [25, 40, 50, 55, 65, 0, 0, 0];
let nums2 = [2, 10, 100];

mergeMutate(nums1, 5, nums2, 3);

console.log(nums1); //expected anser:  [2, 10, 25,  40, 50, 55, 65, 100]

/*A function that takes 3 arguments 
n: length of array,
k: number combinations should be divisible by 
ar: array

Finds the possible number of pairs/combinations  for  which can be divisible by argument k.
*/

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let noOfRepeatation = 0;

  for (let i = 0; i < ar.length; i++) {
    let mutateableArray = ar.slice(i + 1, ar.length);
    for (let j = 0; j < mutateableArray.length; j++) {
      (ar[i] + mutateableArray[j]) % k === 0 && ++noOfRepeatation;
    }
  }
  return noOfRepeatation;
}

/*
 Test 
n = 6, k = 3  ar = [1, 3, 2, 6, 1, 2];
possible combinations divisible by k = 3 are:
ar[0] + ar[2] = 1 + 2 = 3
ar[0] + ar[5] = 1 + 2 = 3
ar[1] + ar[3] = 3 + 6 = 9
ar[2] + ar[4] = 2 + 1 = 3
ar[4] + ar[5] = 1 + 2 = 3

Therefore ther are 5 possible combinations divisible by k = 3
answer = 5
*/

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); //Answer:  5

//Algorithm to Inbuilt Javascript slice array methos
function sliceJS(arr, startFrom, NoOfElements) {
  const errorCheck = startFrom + NoOfElements;
  if (errorCheck > arr.length) throw new Error(`Error in input values`);
  let countCheck = 0;
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= startFrom && countCheck !== NoOfElements) {
      resultArr.push(arr[i]);
      countCheck++;
    }
  }
  return resultArr;
}
// const sliceArrTest = [0, 2, 3];
// console.log(sliceJS(sliceArrTest, 0, sliceArrTest.length)); //[0, 2, 3]
// console.log(sliceJS(sliceArrTest, 0, sliceArrTest.length - 1)); //[0, 2]
// console.log(sliceJS(sliceArrTest, 0, 1)); //[0,]
// console.log(sliceJS(sliceArrTest, 1, 3)); //Error

//Javascript inbuilt join string method
function joinJS(arr, joinBy) {
  let accumulator = "";
  for (let i = 0; i < arr.length; i++) {
    //Error handling
    if (typeof arr[i] !== "string")
      throw new Error(`can only work on strings;
      value input:  ${arr[i]}`);

    if (i !== arr.length - 1) {
      accumulator = `${accumulator}${arr[i]}${joinBy}`;
    } else {
      accumulator = `${accumulator}${arr[i]}`;
    }
  }
  return accumulator;
}
const joinJSArrTest = ["me", "she"];
console.log(joinJS(joinJSArrTest, "")); //meshe
console.log(joinJS(joinJSArrTest, " ")); //me she
console.log(joinJS(joinJSArrTest, "|")); //me|she

//Javascript inbuilt split string method
function splitJS(string, splitBy) {
  //Error handler
  if (typeof string !== "string" || typeof splitBy !== "string")
    throw new Error(`can only work on strings;
value input:  ${string}`);
  const resultArr = [];
  let concatString = "";
  for (let i = 0; i < string.length; i++) {
    if (splitBy === "") {
      resultArr.push(string[i]);
    } else if (string[i] === splitBy) {
      resultArr.push(concatString);
      concatString = "";
    } else {
      concatString = `${concatString}${string[i]}`;
    }
  }
  //push in what is left in concatString
  resultArr.push(concatString);
  return resultArr;
}

console.log(splitJS("me|she|me", "|")); //['me', 'she', 'me']
console.log(splitJS("me she me", " ")); //['me', 'she', 'me']
console.log(splitJS("me she me", "|")); //['me she me']
console.log(splitJS("me she me", "")); //['m', 'e' ' ', 's', 'h', 'e', ' ', 'm', 'e']
