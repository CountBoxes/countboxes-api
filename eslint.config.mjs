
import globals from 'globals';
import { ESLint } from 'eslint';

const config = {
  languageOptions: {
    globals: globals.node,  // Use `globals.node` para Node.js
    parserOptions: {
      ecmaVersion: 2021,    // Defina a versão do ECMAScript conforme necessário
      sourceType: 'module' // Use "module" se você estiver usando módulos ES6
    },
  },
  rules: {
    'indent': ['error', 2], // Usa 2 espaços para indentação
    'quotes': ['error', 'single'], // Usa aspas simples
    'semi': ['error', 'always'], // Sempre termina as instruções com ponto e vírgula

    // Regras de erro
    'no-console': 'warn', // Aviso para uso de console.log
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Erro para variáveis não usadas, ignorando parâmetros começando com "_"

    // Regras de boas práticas
    'eqeqeq': 'error', // Sempre use === e !==
    'no-var': 'error', // Evite o uso de var
    'prefer-const': 'error', // Use const ao invés de let quando a variável não for reatribuída

    // Regras de legibilidade e manutenção
    'camelcase': 'error', // Usa camelCase para nomes de variáveis
    'no-trailing-spaces': 'error', // Remove espaços no final das linhas

    // Regras de segurança
    'no-eval': 'error', // Evite o uso da função eval
    'no-new-func': 'error', // Evite o uso de Function construtor
  },
};

export default config;
