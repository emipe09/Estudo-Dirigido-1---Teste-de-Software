const find3Numbers = require("./SortedSubsequence3");

// Função auxiliar criada para ser utilizada nos testes
function isValidTriplet(result, arr) {
  if (!Array.isArray(result) || result.length !== 3) return false;
  const [a, b, c] = result;

  if (!(a < b && b < c)) return false;

  const ia = arr.indexOf(a);
  const ib = arr.indexOf(b, ia + 1);
  if (ib === -1) return false;
  const ic = arr.indexOf(c, ib + 1);
  return ic !== -1;
}


// Testa se o algoritmo encontra corretamente uma subsequência crescente válida de tamanho 3
test("encontra uma subsequencia crescente de tamanho 3", () => {
  expect(find3Numbers([12, 11, 10, 5, 6, 2, 30])).toEqual([5, 6, 30]);
});

// Testa o comportamento quando não existe subsequência crescente no array
test("retorna um array vazio quando não há subsequencia crescente de tamanho 3", () => {
  expect(find3Numbers([5, 4, 3, 2, 1])).toEqual([]);
});

// Testa arrays em ordem estritamente decrescente
test("retorna um array vazio, quando os valores estiverem em ordem estritamente decrescente", () => {
  expect(find3Numbers([10, 9, 8, 7, 6])).toEqual([]);
});

// Testa arrays com todos os elementos iguais
test("retorna um array vazio, quando os elementos forem todos iguais", () => {
  expect(find3Numbers([4, 4, 4, 4])).toEqual([]);
});

// Testa o comportamento para entrada vazia
test("retorna array vazio para entrada vazia", () => {
  expect(find3Numbers([])).toEqual([]);
});

// Testa arrays com menos de 3 elementos
test("retorna array vazio para arrays menores que 3 elementos", () => {
  expect(find3Numbers([1, 2])).toEqual([]);
});

// Testa o funcionamento com números negativos
test("funciona com numeros negativos", () => {
  expect(find3Numbers([-5, -4, -3])).toEqual([-5, -4, -3]);
});

// Testa subsequência crescente localizada no início do array
test("encontra subsequencia crescente no inicio", () => {
  expect(find3Numbers([1, 2, 3, 0])).toEqual([1, 2, 3]);
});

// Testa subsequência crescente localizada no final do array
test("encontra subsequencia crescente no final", () => {
  expect(find3Numbers([9, 8, 1, 2, 3])).toEqual([1, 2, 3]);
});

// Testa arrays com elementos duplicados misturados
test("funciona com elementos duplicados misturados", () => {
  expect(find3Numbers([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
});

// Testa arrays com elementos decimais (float), todas as possibilidades.
test("deve funcionar corretamente com números decimais", () => {
  const arr = [1.1, 2.2, 3.3];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});

// Testa arrays com números grandes
test("funciona corretamente com números grandes", () => {
  const arr = [1000000, 5000000, 9000000];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});

// Testa arrays contendo números negativos e positivos
test("funciona com numeros negativos e positivos misturados", () => {
  const arr = [-10, -5, 0, 10];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});