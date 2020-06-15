const motorShip = new MotorShip('ship', 'model', {x:12,y:2});
motorShip.prototype = Ship;

console.log(motorShip);