let number =[{x: 1,y:2},{x: 3, y: 4}, {x: null, y: 4},{x: 3, y: undefined}];
console.log(number);
console.log(number.filter(item => item.x && item.y));