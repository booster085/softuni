(function(){
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.save();
// head
    ctx.scale(1.1, 1);
    ctx.beginPath();
    ctx.arc(250, 300, 100, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#90cad7';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#217582';
    ctx.stroke();
    ctx.closePath();
    ctx.scale(1, 1.1);

// eyes

    //left
    ctx.scale(1.5, 1);
    ctx.beginPath();
    ctx.arc(125, 240, 12, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    //right
    ctx.beginPath();
    ctx.arc(180, 240, 12, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
    ctx.scale(1, 1.5);

//pupils

    //left
    ctx.scale(1, 2);
    ctx.beginPath();
    ctx.arc(121, 80, 3.5, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#217582';
    ctx.fill();
    ctx.closePath();

    //right
    ctx.beginPath();
    ctx.arc(176, 80, 3.5, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#217582';
    ctx.fill();
    ctx.closePath();
    ctx.scale(1, 0.5);

//nose

    ctx.beginPath();
    ctx.moveTo(150, 160);
    ctx.lineTo(140, 190);
    ctx.lineTo(155, 190);
    ctx.stroke();
    ctx.lineWidth = 2;

//mouth
    ctx.rotate(Math.PI / 15);
    ctx.scale(3, 1);
    ctx.beginPath();
    ctx.arc(65, 175, 9, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

//hat
    ctx.scale(4.5, 1);

    ctx.beginPath();
    ctx.arc(60, 200, 30, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#235482';
    ctx.fill();
    ctx.closePath();


    ctx.scale(1/4.5, 1);
    ctx.rect(210, 50, 130, 150);
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.fill();

    ctx.scale(3, 1);
    ctx.beginPath();
    ctx.arc(91.7, 49, 21.2, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(91.7, 173, 22.2, 0, Math.PI, false);
    ctx.lineWidth = 1.5;
    ctx.stroke()
})();
