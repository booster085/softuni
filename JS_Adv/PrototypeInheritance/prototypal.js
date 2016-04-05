if (!Object.create) {
	Object.create = function (proto) {
		function F() {};
		F.prototype = proto;
		return new F();
	};
};

var Animal  = {
	init : function(name, species) {
		this._name = name;
		this._species = species;
		return this;
	},
	makeNoise : function() {
		throw new Error('Cannot call the abstract method Animal.makeNoise.');
	},
	fuck : function() {
		return this._name + ' is fucking right now...';
	},
	_hidden : function() {
		console.log('hidden');
	}
}

var Gepard = Object.create(Animal);
Gepard.init = function(name, speed) {
	Animal.init.call(this, name, 'gepard');
	this.makeNoise = function() {
		return this._name + ' says Arrrrrrg';
	}
	this._speed = speed;
};

var gepi = Object.create(Gepard),
	pepi = Object.create(Gepard);
gepi.init('Gepi', 100);
gepi.jump = function() {
	console.log(this._name + ' can jump');
};
Gepard.run = function() {
	console.log(this._name + ' is running');
}
pepi.init('Pepi', 97);
console.log(gepi.run());