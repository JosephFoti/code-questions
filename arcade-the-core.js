// The Core 1
// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    let x = n.toString().split('')
    let y = x.reduce((x,y)=>(parseInt(x)+parseInt(y)))
    return y
}

// The Core 2
// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
    let res = ''
    for(let i=0;i<n;i++) {
        res += '9';
    }
    return parseInt(res)
}

// The Core 3
// n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

function candies(n, m) {
    return (Math.floor(m/n)*n)
}

// The Core 4
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols-(col-1))*(nRows-(row))
}

// The Core 5
// Given a divisor and a bound, find the largest integer N such that:
// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

function maxMultiple(divisor, bound) {
    return bound - (bound%divisor)
}

// The Core 6
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function circleOfNumbers(n, firstNumber) {
    return (firstNumber+(n/2))%n
}

// The Core 7
// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n) {
    let x = Math.floor(n/60);
    let r = (n%60);
    let s = x+''+r;
    let res = s.split('');
    return res.reduce((x,y)=>parseInt(x)+parseInt(y));
}

// The Core 8
// Some phone usage rate may be described as follows:
// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
    let dur = 0;
    let loop = s;
    console.log(`${s} budget`)
    for (let i=1;i<loop;i++) {
        if (i==1) {
            if ((s-min11) <= 0) {
                return dur
            } else {
                s -= min1;
                dur++;
                console.log(`${s} first minute`);
            // test if we can afford the next minute, if not break
            }

        } else if (i>1 && i<11) {

            if ((s-min11) <= 0) {
                return dur
            } else {
                s -= min2_10;
                dur++;
                console.log(`${s} 2-10 minute`);
            }
        } else if (i > 10) {
            if ((s-min11) < 0) {
                return dur
            } else {
                s -= min11;
                dur++;
                console.log(`${s} 11 minute`);

            }
        }
    }
    return dur
}

// The Core 9
// You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.
// Given values experience, threshold and reward, check if you reach the next level after killing the monster.

function reachNextLevel(experience, threshold, reward) {
    if ((experience+reward)>=(threshold)) return true;
    return false
}

// The Core 10
// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?
// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let val = 0;
    if (weight1 > maxW && weight2 <= maxW) {
        return value2
    } else if (weight2 > maxW && weight1 <= maxW) {
        return value1
    } else if (value1 == value2 && (weight1 <= maxW || weight2 <= maxW )) {
        return value1
    }
    if (value1 > value2 && weight1 <= maxW) {
        val = value1;
    } else if(value2 > value1 && weight2 <= maxW) {
        val = value2;
    }

    if (weight1+weight2 <= maxW) {
        val = (value1+value2)
    }
    return val
}

// The Core 11
// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

function extraNumber(a, b, c) {

    var numbers = [a,b,c];
    if (numbers.lastIndexOf(numbers[0]) == 0) {
        return numbers[0]
    } else if(numbers.lastIndexOf(numbers[0]) == 1) {
        return numbers[2];
    }
    return numbers [1];
}

// The Core 12
// Given integers a and b, determine whether the following pseudocode results in an infinite loop
//
// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

function isInfiniteProcess(a, b) {
    if (Math.abs(a-b)%2 > 0) return true
    if (a>b) return true
    return false
}

// The Core 13
// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

function arithmeticExpression(a, b, c) {
    if (a+b==c||a-b==c||a*b==c||a/b==c) return true
    return false;
}

// The Core 14
// In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players wins 7 games.
// Determine if it is possible for a tennis set to be finished with the score score1 : score2.

function tennisSet(score1, score2) {
    if (score1 > 7 || score2 > 7 || score1 == score2) return false
    if ((score1 >= 6 && score2 < 5) || (score1 < 5 && score2 >= 6)) return true;
    if ((score1 > 6 && score2 < 5) || (score1 < 5 && score2 > 6)) return false;
    if (score1+score2>=10 && (score1 == 7 || score2 == 7)) return true;
    return false;
}

// The Core 15
// Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.
// Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.
// A person contradicts Mary's belief if one of the following statements is true:
// they are young and beautiful but not loved;
// they are loved but not young or not beautiful.

function willYou(young, beautiful, loved) {
    let attr;
    if (young && beautiful) {
        attr = true;
    } else {
        attr = false;
    }

    if(attr && !loved) return true;
    if(!attr && loved) return true;
    return false
}

// The Core 16
function metroCard(lastNumberOfDays) {
let res = [];

    let Months = function(name,days) {
        this.name = name;
        this.days = days;
        this.next = null;
    }

let jan = new Months('Jan',31)
let feb = new Months('Feb',28)
let mar = new Months('Mar',31)
let apr = new Months('Apr',30)
let may = new Months('May',31)
let jun = new Months('Jun',30)
let jul = new Months('Jul',31)
let aug = new Months('Aug',31)
let sep = new Months('Sep',30)
let oct = new Months('Oct',31)
let nov = new Months('Nov',30)
let dec = new Months('Dec',31)

jan.next = feb;
feb.next = mar;
mar.next = apr;
apr.next = may;
may.next = jun;
jun.next = jul;
jul.next = aug;
aug.next = sep;
sep.next = oct;
oct.next = nov;
nov.next = dec;
dec.next = jan;

let months=[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];

let posibilites = months.filter(x=>{
    if(x.days == lastNumberOfDays){
        res.push(x.next.days);
        return x.next.days
    }
});
    let set = new Set(res);
    let setRes = set.values()
    setRes = [...setRes];
    return setRes;
//     return posibilites;

}


// The Core 17
// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.
//
// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

function killKthBit(n, k) {
  return n & ~(1 << (k - 1)) ;
}
