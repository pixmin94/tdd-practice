const cipherFunction = require('./caesarCipher');

test('CaesarCipher', () => {
  expect(cipherFunction("test")).toBe("uftu");
});