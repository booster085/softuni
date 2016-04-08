var prototypal = (function(window, document) {
	if (!Object.create) {
		Object.create = function(proto) {
			function F() {};
			F.prototype = proto;
			return new F();
		}
	}
	var Shape  = {
		create : function(x, y, color) {
			this.ax = x;
			this.ay = y;
			return this;
		},
		toString : function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', color = ' + this.color;
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
})(window, document);

console.log(prototypal);