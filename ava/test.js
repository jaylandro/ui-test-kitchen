import test from 'ava';

const promise = Promise.reject(new TypeError('🦄'));

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

test('rejects', async t => {
	const error = await t.throws(promise);
	t.is(error.message, '🦄');
});

// test('rejects', async t => {
// 	await t.notThrows(promise);
// });