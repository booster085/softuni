if (!Object.create) {
	Object.create = function (proto) {
		function F() {};
		F.prototype = proto;
		return new F();
	};
};
if (!Object.prototype.extends) {
	Object.prototype.extends = function(parent) {
		this.prototype = Object.create(parent.prototype);
		this.prototype.constructor = this;
	};
};

var Animal = (function() {
	function Animal (name, species) {
		this._name = name;
		this._species = species;
	}
	Animal.prototype.makeNoise = function() {
		throw new Error('Cannot call the abstract method Animal.makeNoise.'); 
	}
	Animal.prototype.run  = function() {
		return this._name + ' is running';
	}
	return Animal;
})();

var Dog = (function() {
	Dog.extends(Animal);
	function Dog (name, breed) {
		Animal.call(this, name, 'dog');
		this._breed = breed;
	}
	Dog.prototype.makeNoise = function() {
		return 'Bay-bay';
	}
	Dog.prototype.run = function() {
		return Animal.prototype.run.call(this) + ' and barks!';
	}
	return Dog;
})();
var dog = new Dog('Lasi', 'Koker');
// console.log(dog.run());
console.log(dog.makeNoise());