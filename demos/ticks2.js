// Demonstrate ticks (2).
var t = 0;

function logAndIncTick() {
  console.log('Tick: ' + t);
  t++;

 if (t < process.maxTickDepth) {
   process.nextTick(logAndIncTick);
 }
}

console.log('First');
logAndIncTick();
console.log('Second');
