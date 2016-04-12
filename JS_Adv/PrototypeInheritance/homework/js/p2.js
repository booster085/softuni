var prototypal = (function(window, document) {
	if (!Object.create) {
		Object.create = function(proto) {
			function f() {};
			f.prototype = proto;
			return new f();
		}
	}
	if (!Object.prototype.extend) {
		Object.prototype.extend = function (properties) {
			function f() {};
			f.prototype = Object.create(this);
			for (var prop in properties) {
				f.prototype[prop] = properties[prop];
			}
			f.prototype._super = this;
			return new f();
		}
	}
	var Shape  = {
		construct : function(x, y, color) {
			this.ax = x;
			this.ay = y;
			this.color = color;
			return this;
		},
		toString : function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', color = ' + this.color;
		}
	}

	var Circle = Shape.extend({
		construct : function construct(ax, ay, r, color) {
			this._super.construct.call(this, ax, ay, color);
			this.r = r;
			this.toString = function() {
				return 'aX = ' + this.ax + ', aY = ' + this.ay + ', r = ' + this.r + ', color = ' + this.color;
			}
			return this;
		}
	});
	var Rectangle = Object.create(Shape);
	Rectangle.construct = function(ax, ay, width, height, color) {
		Shape.construct.call(this, ax, ay, color);
		this.width = width;
		this.height = height;
		this.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', width = ' + this.width + ', height = ' + this.height + ', color = ' + this.color;
		}
		return this;
	};
	var Triangle = Object.create(Shape);
	Triangle.construct = function(ax, ay, width, height, color) {
		Shape.construct.call(this, ax, ay, color);
		this.bx = bx;
		this.by = by;
		this.cx = cx;
		this.cy = cy;
		this.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', bX = ' + this.bx + ', bY = ' + this.by + ', cX = ' + this.cx + ', cY = ' + this.cy + ', color = ' + this.color;
		}
		return this;
	};
	var Line = Object.create(Shape);
	Line.construct = function(ax, ay, bx, by, color) {
		Shape.construct.call(this, ax, ay, color);
		this.bx = bx;
		this.by = by;
		this.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', bX = ' + this.bx + ', bY = ' + this.by + ', color = ' + this.color;
		}
		return this;
	};
	var Segment = Object.create(Line);
	Segment.construct = function(ax, ay, bx, by, color) {
		Line.construct.call(this, ax, ay, bx, by, color);
		return this;
	}

	var shape = Object.create(Circle);
	var line = Object.create(Line).construct(5, 6, 7, 8, '#fefefe');
	shape.construct(23, 22, 5, '#234328');
	console.log(shape);
	document.getElementsByTagName('textarea')[0].value = line;
	
})(window, document);
