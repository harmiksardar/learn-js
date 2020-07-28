var assert = require('assert');

function area(l, w) {
 if (l <= 0) {
  return 'undefined';
 } else if (w <= 0) {
  return 'undefined';
 } else {
  return l * w;
 }
}

describe('Calculating Area', function() {
 it('should return 18 when length is 6 and width is 3', function() {
  assert.equal(area(6, 3), 18);
 })
 it('should return 6 when length is 3 and width is 2', function() {
  assert.equal(area(3, 2), 6);
 });
});
