import test from 'ava'
import render from 'react-test-renderer'

const HelloAva = () => '<h1>Hello Ava...!</h1>'

test('HelloWorld component', t => {
	const tree = render.create(<HelloAva />).toJSON()
	t.snapshot(tree);
});