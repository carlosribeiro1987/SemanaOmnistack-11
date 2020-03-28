# Anotações Validação

### Celebrate

Middleware de validação para o framework **`express`**.

- Instalação: **`npm install celebrate`**

## Testes

### Jest

- Instalação: **`npm install -D jest`**
- Inicialização **`jest --init**
  - Would you like to use Jest when running "test" script in "package.json"? : **`Y`**.
  - Choose the test environment that will be used for testing: **`node`**.
  - Do you want Jest to add coverage reports?: **`N`**.
  - Automatically clear mock calls and instances between every test?: **`y`**.
- Executar testes: **`npm test`**.

### Cross-Env

- Instalação: **`npm install cross-env`**.
- Editar arquivo **`package.json`**:
  > ```json
  >  "scripts": {
  >    "start": "nodemon src/index.js",
  >    "test": "cross-env NODE_ENV=test jest"
  >  },
  > ```

### Supertest

Biblioteca para testes de integração

- Instalação: **`npm install supertest -D`**.

### Tipos de teste

- #### Teste de integração
  - Testa uma funcionalidade por completo.
- #### Teste unitário
  - Testa um pedaço muito pequeno de código
