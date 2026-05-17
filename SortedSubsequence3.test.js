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

// Testes
test("deve retornar a subsequência crescente de tamanho 3 para o array informado", () => {
  expect(find3Numbers([12, 11, 10, 5, 6, 2, 30])).toEqual([5, 6, 30]);
});

test("retorna um array vazio quando não há subsequencia crescente de tamanho 3", () => {
  expect(find3Numbers([5, 4, 3, 2, 1])).toEqual([]);
});

test("retorna um array vazio, quando os valores estiverem em ordem estritamente decrescente", () => {
  expect(find3Numbers([10, 9, 8, 7, 6])).toEqual([]);
});

test("deve retornar um array vazio quando todos os elementos forem iguais", () => {
  expect(find3Numbers([4, 4, 4, 4])).toEqual([]);
});

test("deve retornar um array vazio quando o array possuir menos de 3 elementos", () => {
  expect(find3Numbers([3, 7])).toEqual([]);
});

test("exemplo do código [12,11,10,5,6,2,30], deve retornar [5,6,30]", () => {
  expect(find3Numbers([12, 11, 10, 5, 6, 2, 30])).toEqual([5, 6, 30]);
});

test("deve encontrar uma tripla crescente válida em um array já ordenado", () => {
  const arr = [1, 2, 3, 4, 5];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});

test("deve encontrar uma subsequência crescente válida contendo números negativos", () => {
  const arr = [-5, -3, -1, 0, 2];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});

test("deve funcionar corretamente com números decimais", () => {
  const arr = [1.1, 2.2, 3.3];
  const result = find3Numbers(arr);
  expect(isValidTriplet(result, arr)).toBe(true);
});