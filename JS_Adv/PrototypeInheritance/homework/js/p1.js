var classic = (function(document, window){
	if (!Object.create) {
		Object.create = function(proto) {
			function F() {};
			F.prototype = proto;
			return new F();
		}
	}
	if (!Object.prototype.extends) {
		Object.prototype.extends = function(parent) {
			this.prototype = Object.create(parent.prototype);
			this.prototype.constructor = this;
		}
	}
	var Shape = (function() {
		function Shape(x, y, color) {
			this.ax = x;
			this.ay = y;
			this.color = color;

		}
		Shape.prototype.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', color = ' + this.color;
		}
		return Shape;
	})(),
	Circle = (function() {
		Circle.extends(Shape);
		function Circle(ax, ay, r, color) {
			Shape.call(this, ax, ay, color); //x, y is the Circle center
			this.r = r;

		}
		Circle.prototype.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', r = ' + this.r + ', color = ' + this.color;
		}
		return Circle;
	})(),
	Rectangle = (function() {
		Rectangle.extends(Shape);
		function Rectangle(ax, ay, width, height, color) {
			Shape.call(this, ax, ay, color);
			this.width = width;
			this.height = height; 

		}
		Rectangle.prototype.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', width = ' + this.width + ', height = ' + this.height + ', color = ' + this.color;
		}
		return Rectangle;
	})(),
	Triangle = (function() {
		Triangle.extends(Shape);
		function Triangle(ax, ay, bx, by, cx, cy, color) {
			Shape.call(this, ax, ay, color);
			this.bx = bx;
			this.by = by;
			this.cx = cx;
			this.cy = cy;

		}
		Triangle.prototype.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', bX = ' + this.bx + ', bY = ' + this.by + ', cX = ' + this.cx + ', cY = ' + this.cy + ', color = ' + this.color;
		}
		return Triangle;
	})(),
	Line = (function() {
		Line.extends(Shape);
		function Line(ax, ay, bx, by, color) {
			Shape.call(this, ax, ay, color);
			this.bx = bx;
			this.by = by;

		}
		Line.prototype.toString = function() {
			return 'aX = ' + this.ax + ', aY = ' + this.ay + ', bX = ' + this.bx + ', bY = ' + this.by + ', color = ' + this.color;
		}
		return Line;
	})(),
	Segment = (function() {
		Segment.extends(Line);
		function Segment(ax, ay, bx, by, color) {
			Line.call(this, ax, ay, bx, by, color);
		}
		return Segment;
	})();
	return {
		Shape,
		Circle,
		Rectangle,
		Triangle,
		Line,
		Segment
	};
})(document, window);

var circle = new classic.Circle(5, 9, 10, '#FF0000');
var rect = new classic.Rectangle(4, 5, 25, 30, '#FEB917');
var tri = new classic.Triangle(3, 5, 17, 22, 58, 12, '#5CC232');
var line = new classic.Line(4, 5, 11, 56, '#0000FF');
var seg = new classic.Segment(14, 15, 24, 85, '#00FFFF');
document.getElementsByTagName('textarea')[0].value = circle;
console.log(circle);