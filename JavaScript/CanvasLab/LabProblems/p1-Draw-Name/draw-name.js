(function(){
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

ctx.font = '600 100px Arial';
ctx.fillStyle = 'pink';
ctx.lineWidth = 10;
ctx.fillText('Ilian', 40, 100);
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.strokeText('Ilian', 40, 100);
})();

