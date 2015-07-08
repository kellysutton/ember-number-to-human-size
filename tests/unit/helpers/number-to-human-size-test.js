import { numberToHumanSize } from '../../../helpers/number-to-human-size';
import { module, test } from 'qunit';

module('Unit | Helper | number to human size');

test('it works', function(assert) {
  let result = numberToHumanSize([42]);
  assert.equal(result, "42 B");
});

test('is displays KB', function(assert) {
  let result = numberToHumanSize([1024, false, 3]);
  assert.equal(result, "1.024 kB");
});

test('it displays 1000 bytes in kB', function(assert) {
  let result = numberToHumanSize([1000]);
  assert.equal(result, "1 kB");
});

test('it displays in KiB', function(assert) {
  let result = numberToHumanSize([1024, true]);
  assert.equal(result, "1 KiB");
});

test('it displays megabytes', function(assert) {
  let result = numberToHumanSize([1024 * 1024, false, 3]);
  assert.equal(result, "1.049 MB");
});

test('it displays 1000 * 1000 bytes in MB', function(assert) {
  let result = numberToHumanSize([1000 * 1000]);
  assert.equal(result, "1 MB");
});

test('is displays SI units', function(assert) {
  let result = numberToHumanSize([1024 * 1024, true]);
  assert.equal(result, "1 MiB");
});