const capitalize = require('./capitalize');

test('Capitalize', () => {
  expect(capitalize("test")).toBe("Test");
});