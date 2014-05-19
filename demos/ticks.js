// Demonstrate ticks (1).
console.log('First');
process.nextTick(function() {
  console.log('Hello, world!');
});
console.log('Second');
