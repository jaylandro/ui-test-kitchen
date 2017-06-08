import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App prop1='Hey' />, div);
});

it('Gets props', () => {
  const div = document.createElement('div');
  let rendered = ReactDOM.render(<App prop1='Hey' />, div);

  expect(rendered.props.prop1).toBe("Hey");
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


// Strings #
// You can check strings against regular expressions with toMatch:
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


// Arrays #
// You can check if an array contains a particular item using toContain:
const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});