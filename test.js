/**
 * Testing with ava.
 *
 * @link https://github.com/avajs/ava/blob/master/docs/01-writing-tests.md
 */
const test = require('ava');
const checkNode = require('./index.js');

test.failing('Failing script', t => {
	checkNode('15', { fail: false });
	t.fail();
});
