const calculateCost = require('../src/calculateCost');
const everyPossibleRoute = require('../src/everyPossibleRoute');
const lowestCostRoute = require('../src/lowestCostRoute');

test('Case 1-1', () => {
  expect(calculateCost('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','A-B-E')).toBe(4);
});

test('Case 1-2', () => {
  expect(calculateCost('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','A-D')).toBe(10);
});

test('Case 1-3', () => {
  expect(calculateCost('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','E-A-C-F')).toBe(8);
});

test('Case 1-4', () => {
  expect(calculateCost('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','A-D-F')).toBe('No Such Route');
});

test('Case 2-1', () => {
  expect(everyPossibleRoute('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','E','D',4)).toBe(4);
});

test('Case 2-2', () => {
  expect(everyPossibleRoute('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','E','E',null)).toBe(5);
});

test('Case 3-1', () => {
  expect(lowestCostRoute('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','E','D')).toBe(9);
});

test('Case 3-2', () => {
  expect(lowestCostRoute('AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1','E','E')).toBe(6);
});
