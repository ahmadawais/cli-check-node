/**
 * Testing with ava.
 *
 * @link https://github.com/avajs/ava/blob/master/docs/01-writing-tests.md
 */
const test = require('ava');
const checkNode = require('./index.js');

(async () => {
	test('node version is not 20', async t => {
		t.regex(checkNode('20', { fail: false }), /Required version of Node is: 20 or higher./);
	});
})();
