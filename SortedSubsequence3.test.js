const find3Numbers = require("./SortedSubsequence3");

test("encontra uma subsequencia crescente de tamanho 3", () => {
  expect(find3Numbers([12, 11, 10, 5, 6, 2, 30])).toEqual([5, 6, 30]);
});

test("retorna um array vazio quando não há subsequencia crescente de tamanho 3", () => {
  expect(find3Numbers([5, 4, 3, 2, 1])).toEqual([]);
});

test("retorna um array vazio, quando os valores estiverem em ordem estritamente decrescente", () => {
  expect(find3Numbers([10, 9, 8, 7, 6])).toEqual([]);
});

test("retorna um array vazio, quando os elementos forem todos iguais", () => {
  expect(find3Numbers([4, 4, 4, 4])).toEqual([]);
});

test("retorna array vazio para entrada vazia", () => {
  expect(find3Numbers([])).toEqual([]);
});

test("retorna array vazio para arrays menores que 3 elementos", () => {
  expect(find3Numbers([1, 2])).toEqual([]);
});

test("funciona com numeros negativos", () => {
  expect(find3Numbers([-5, -4, -3])).toEqual([-5, -4, -3]);
});

test("encontra subsequencia crescente no inicio", () => {
  expect(find3Numbers([1, 2, 3, 0])).toEqual([1, 2, 3]);
});

test("encontra subsequencia crescente no final", () => {
  expect(find3Numbers([9, 8, 1, 2, 3])).toEqual([1, 2, 3]);
});

test("funciona com elementos duplicados misturados", () => {
  expect(find3Numbers([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
});
