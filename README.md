# Estudo Dirigido - Teste de Unidade

Projeto do estudo dirigido da disciplina de Teste de Software para preparar e executar testes unitarios do programa **SortedSubsequence** em JavaScript com o framework **Jest**.

## Sobre o projeto

O programa `SortedSubsequence3.js` implementa a funcao `find3Numbers(arr)`, cujo objetivo e encontrar uma subsequencia crescente de tamanho 3 dentro de um array. Quando existe uma subsequencia valida, a funcao retorna os tres valores encontrados. Quando nao existe, ou quando a entrada possui menos de tres elementos, a funcao retorna um array vazio.

Exemplo de entrada:

```js
[12, 11, 10, 5, 6, 2, 30]
```

Saida esperada:

```js
[5, 6, 30]
```

## Objetivo da atividade

De acordo com o enunciado do estudo dirigido, o grupo deve implementar no minimo 10 testes de unidade para o programa **SortedSubsequence**, utilizando **JavaScript** e **Jest**. Os testes devem contemplar cenarios diferentes, como entradas vazias, arrays com poucos elementos, valores limites e casos com ou sem subsequencia crescente.

Este repositorio esta preparado apenas com o ambiente de testes. Nenhum teste foi implementado ainda.

## Requisitos

- Node.js
- npm

As versoes verificadas neste ambiente foram:

```bash
node --version
npm --version
```

## Instalacao

Instale as dependencias do projeto:

```bash
npm install
```

Isso instalara o Jest como dependencia de desenvolvimento, conforme definido no `package.json`.

## Execucao do programa

Para executar a implementacao diretamente:

```bash
npm start
```

## Execucao dos testes

Depois que os testes forem criados, execute:

```bash
npm test
```

Para executar os testes com relatorio de cobertura:

```bash
npm run test:coverage
```

O relatorio de cobertura sera gerado na pasta `coverage/`.

## Estrutura sugerida para os testes

Crie os testes em um arquivo com sufixo `.test.js`, por exemplo:

```text
SortedSubsequence3.test.js
```

O arquivo de teste podera importar a funcao assim:

```js
const find3Numbers = require("./SortedSubsequence3");
```

## Entregaveis esperados

Conforme o PDF da atividade, a entrega final deve conter:

- Codigo do programa.
- Codigo dos testes unitarios implementados em Jest.
- Relatorio com instrucoes de instalacao, configuracao e execucao.
- Screenshots das etapas realizadas.
- Informacoes sobre a cobertura dos testes.
- Arquivo `.ZIP` nomeado como `EstudoDirigido1Grupo<numero>`.

Prazo informado no enunciado: **18/05/2026 as 23:50**.
