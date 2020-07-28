let average = require('./average');
function main(xy) {
  let peers = xy.slice(0);
  let averageX, averageY, k, xs = [], ys = [], averageXY, xys = [], x2s = [], averageX2;
  peers.forEach(xy => {
    xs.push(xy[0]);
    ys.push(xy[1]);
    xys.push(xy[0] * xy[1]);
    x2s.push(xy[0] * xy[0]);
  });
  averageX = average(xs);
  averageY = average(ys);
  averageXY = average(xys);
  averageX2 = average(x2s);
  k = (averageXY - averageX * averageY) / (averageX2 - averageX * averageX);
  let b = averageY-averageX*k;
  return {
    k:k,
    b:b
  }
}
let xys = [[165, 170], [165, 172], [168, 174], [172, 173], [172, 176], [174, 172], [175, 174], [175, 178], [177, 178], [177, 176], [178, 175], [178, 181], [210, 194]];
function run(x,xys){
  let k = main(xys).k;
  let b = main(xys).b;
  console.log(k,b);
  return x*k+b;
}
console.log(run(170,xys))
module.exports = run;