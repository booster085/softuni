var ex2 = function() {
	Object.prototype.getRandom = function() {
		var randomNum = Math.floor(Math.random() * Object.keys(this).length);
		return this[randomNum] || '{' + Object.keys(this)[randomNum] + ': ' + this[Object.keys(this)[randomNum]] + '}';
	}
	var arr = [321,13,45,11,2,33];
	var str = 'This is an example!';
	var obj = {
	  name: "Gosho",
	  age: 25,
	  grade: 5.95,
	  isActive: true,
	  languages: ["English", "French"]
	};

	console.log(arr.getRandom());
	console.log(str.getRandom());
	console.log(obj.getRandom());
}


// Pretend that Function.prototype.call() does not exist. Write JavaScript’s call() function using apply()
var ex3 = function() {
	function test(a) {
		console.log('example ' + a + ' ' + this);
	}
	Function.prototype.call2 = function() {
		obj = Array.prototype.shift.apply(arguments);
		this.apply(obj, arguments);
	}
var a = 321;
test.call2(a, 5);
}

// Create a class that maintains a list of numbers in ascending order.
// The class will have two methods:
// •	add(num) will add num to the list
// •	get(index) will get the value at the i-th index in the list
// You should also provide a length property (not method) that gives the length of the list.

var ex4 = function() {
	// var NumSorter = (function() {
	// 	function NumSorter() {
	// 		numArr = Array.prototype.sort.call(arguments, function(a, b) {
	// 			return a - b;
	// 		});
	// 		this._numArr = numArr;
	// 	}
	// 	return NumSorter;

	// })();
	// var a = new NumSorter(11,3,6,34,23,18);
	var NumMaintainer = {
		init : function() {
			numArr = Array.prototype.sort.call(arguments, function(a, b) {
				return a - b;
			});
			this.numArr = numArr;
			this.length = this.numArr.length; 
			return this;
		},
		add : function(num) {
			if (this.numArr) {
				var i, len = this.length;
				if (this.numArr[len - 1] <= num) {
					Array.prototype.push.call(this.numArr, num);
				} else {
					for (var i  = 0; i < len; i += 1) {
						if (this.numArr[i] > num) {
							Array.prototype.splice.call(this.numArr, i, 0, num);
							return;
						}
					}
				}
				this.length = this.numArr.length;
			}
		},
		get : function(index) {
			if (this.numArr) {
				if (index >= 0 && index < this.length) {
					return this.numArr[index];
				} else {
					throw new Error('Not such index');
				}
			}
		}
	}
	var arr = NumMaintainer.init(11,3,6,34,23,18);
	arr.add(18);
	arr.add(2);
	arr.add(33);
	arr.add(0);
	arr.add(1020);
	console.log(arr.numArr);
	console.log(arr.length);
	console.log(arr.get(10));
}

ex4();