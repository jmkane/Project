var teams = ['red sox', 'white sox', 'angels','rangers', 'dodgers', 'padres', 'rockies'];
Array.isArray(teams);
teams.length;
console.log(teams.length);
const team = teams[4];
console.log(team);
index = teams.indexOf('padres');
console.log(index);
first = teams[0];
console.log(first);
last = teams[teams.length - 1];
console.log(last);
teams.push('giants');
index = teams.indexOf('giants');
console.log(index);
console.log(teams);
last = teams[teams.length -1];
console.log(last);
const dodgers = teams.pop();
console.log(teams);
teams.splice(4,1);
console.log(teams);
teams.push('giants');
console.log(teams);
var ages = [56, 63, 63, 64, 60, 62, 62, 58, 53, 50, 48];
console.log(ages);

// combine
const combine = (...arrays) => [].concat(...arrays);  //.concat from the mozilla link
var nicknames = ['Big Papi','Mad Bum','The Shark','The Baby Giraffe'];
console.log(nicknames);

var kanemess = teams.concat( ages,nicknames);
var messkane = combine(teams,nicknames,ages);
console.log(messkane);
console.log(kanemess);

// Sum and Product
function Counter() {
  this.sum = 0;
  this.product = 1;
 }
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    this.product *= entry;
      }, this);
  // ^---- Note
};

var obj = new Counter();
obj.add(ages);
obj.product
obj.sum

var x = obj.sum;
console.log(x);

var y = obj.product;
console.log(y);
// tail
 var temp = teams.slice();
 console.log(temp);
 temp.splice(0,1);
 console.log(teams);
 console.log(ages);
 console.log(temp);

function tail(array) {
   var newtemp = array.slice();
   newtemp.shift();
   return(newtemp);
};
console.log(ages);
console.log(teams);
var tailteams = tail(teams);
console.log(tailteams);
console.log(teams);



// Contains
var b = ages.includes(56) ;
console.log(b);

const contains = (array, element) => {
  return array.includes(element)
};  //.includes from the mozilla link

var d = contains(ages,48);
console.log(d);

// min and max
function compare(a, b) {
  if (a < b ) {
    return -1;
  }
  if (a > b ) {
    return 1;
  }
//   a must be equal to b
  return 0;
}

var numtemp = ages.slice();
numtemp.sort(function(a, b) {
  return a - b;
});
console.log(ages);
console.log(numtemp);
console.log('min value = ', numtemp[0]);
console.log('max value = ', numtemp[numtemp.length - 1]);




//Unique
  var utemp = ages.slice(0,1);
  console.log(utemp);
  console.log(ages);
  for(var i = 1; i < ages.length; i++) {
    var temp = utemp.includes(ages[i]);
    console.log(temp);
    if (temp === false) {
 //     console.log(temp);
      utemp.push(ages[i]);
      }
    } ;
console.log(utemp);
console.log(ages);

function Unique (array) {
   var utemp = array.slice(0,1);
  for(var i = 1; i < array.length; i++) {
    var temp = utemp.includes(array[i]);
    if (temp === false) {
      console.log(temp);
      utemp.push(array[i]);
      }
    }
  return (utemp);
};

var newAge = Unique(ages);
console.log(newAge);
