'use strict';

var Bigfisher = require('../lib/bigfisher.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test'] = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {

    var ft = new Bigfisher(0, 10, 12, 2);
    test.ok(ft.toString() === '0.0000336519046978059');

    ft = new Bigfisher(1, 9, 11, 3);
    test.ok(ft.toString() === '0.00134607618791223583');

    ft = new Bigfisher(500, 488, 319, 234);
    test.ok(ft.toString() === '0.00119666158206853406');

    test.done();
  },
};
