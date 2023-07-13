# API GymPass

Projeto do módulo 3 do curso de Nodejs da Rocktseat (GymPass style App)

## Requisitos Funcionais

- [X] deve ser possível se cadastrar
- [X] deve ser possível se autenticar
- [ ] deve ser possível obter o perfil de um usuário logado
- [ ] deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] deve ser possível o usuário obter seu histórico de check-ins
- [ ] deve ser possível o usuário buscar academias próximas
- [ ] deve ser possível o usuário buscar academias pelo nome
- [ ] deve ser possível o usuário realizar chack-in em uma academia
- [ ] deve ser possível validar o check-in de um usuário
- [ ] deve ser possível cadastrar uma academia

## Regras de Negócio

- [X] o usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] o usuário não pode fazer 2 check-ins no mesmo dia
- [ ] o usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] o check-in só pode ser valido até 20 minutos após criado
- [ ] o check-in só pode ser validado por administradores
- [ ] a academia só pode ser cadastrada por administradores
- [ ]

## Requisitos Não Funcionais

- [X] a senha do usuário precisa estar criptografada
- [X] os dados da aplicação precisam estar persistido em um banco PostgreSQL
- [ ] todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] o usuário deve ser identificado por um JWT

## Tecnologias utilizadas

- Javascript
- Typescript
- NodeJS
- NPM
- Git
- Editor Config
- Dotenv
- Zod
- Eslint
- Prisma ORM
- Docker
- Bcrypt
- Vitest

## Conceitos aplicados

- Design de Software
- Engenharia de Requisitos
- Variáveis de ambiente
- Validação de variáveis via schema validation
- Padrão de lint de codificação
- Aliases de importação
- Object Relational Mapping
- Migrations
- Containerização com Docker
- Docker hub
- Docker compose
- Criptografia Hashing
- Primary key e Foregein key
- Relacionamentos entre tabelas
- Estruturando com controllers e services
- Criptografia e hash para senha
- S.O.L.I.D.
- Repository pattern
- Handler de erros globais
- Testes Unitários
- In Memory Test Database
- Coverage Report
- UI view para os testes
- Aplicando (SUT - system under test) como um modelo para maior produtividade na implementação dos testes
- Factory Pattern

## Geral

1. adicionado o arquivo `.gitignore`

1. adicionado o arquivo `.editorconfig`

## Git

1. projeto iniciado com o comando

    ```SHELL
      git init
    ```

1. repositório do projeto disponibilizado em: <https://github.com/thiagosf-dev/api-rest-nodejs-solid>

## Starter

1. projeto criado com o comando:

    ```SHELL
      npm init
    ```

## Typescript

1. instalação com o comando:

    ```SHELL
      npm i -D typescript @types/node tsx tsup
    ```

1. criado o arquivo `tsconfig.json` com o comando:

    ```SHELL
      npx tsc --init
    ```

1. configurado o arquivo `tsconfig.json` para alias import:

    ```json
      "baseUrl": "./",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      },
    ```

## Fastify

1. instalado com o comando:

    ```SHELL
      npm i fastify
    ```

## NPM

1. criado na raíz do projeto o arquivo `.npmrc` com a seguinte configuração:

    ```.npmrc
      save-exact=true
    ```

## Environments Variables

1. criado o arquivo `.env` e o `.env.example` com a seguinte configuração:

    ```.env
      NODE_ENV=dev
    ```

1. instalado Dotenv com o comando:

    ```SHELL
      npm i dotenv
    ```

## Zod

1. instalado com o comando:

    ```SHELL
      npm i zod
    ```

## Eslint

1. instalado o ESLint com o comando:

    ```SHELL
      npm i -D eslint @rocketseat/eslint-config
    ```

1. criado na raíz do projeto o arquivo de configuração do ESLint: `.eslintrc.json`

1. configurado o `.eslintrc.json`: `{
  "extends": [
    "@rocketseat/eslint-config/node"
  ]
}`

1. criado script para rodar o ESlint e fazer o fix: `"eslint:fix": "eslint --ext .js,.ts src --fix"````

1. criado o arquivo `.eslintignore`

## Prisma ORM

1. instalado com o comando:

    ```SHELL
      npm i -D prisma
    ```

1. iniciado o Prisma com o comando:

    ```SHELL
      npx prisma init
    ```

1. instalada a extensão do `vscode` para o Prisma: `prisma.io`

1. ajustado o arquivo `.vscode/settings.json`:

    ```json
      {
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
          "sourse.fixAll.eslint": true,
          "source.organizeImports": false
        },
        "files.eol": "\n",
        "[javascript]": {
          "editor.formatOnSave": false,
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
          }
        },
        "[prisma]": {
          "editor.formatOnSave": true
        },
        "[typescript]": {
          "editor.formatOnSave": false,
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
          }
        },
      }
    ```

1. criada a tipagem automatizada do model com o comando:

    ```SHELL
      npx prisma generate
    ```

1. instalada dependência para manipular o banco de dados com o comando:

    ```SHELL
      npm i @prisma/client
    ```

1. rodando as migrations com o comando:

    ```shel
      npx prisma migrate dev
    ```

1. rodando o Prisma Studio com o comando:

    ```shel
      npx prisma studio
    ```

## Docker

1. instalado docker desktop

2. versão do docker informada no comando:

    ```SHELL
      docker -v
    ```

3. imagem do Postgres da Bitname excutada com o comando:

    ```SHELL
      docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolidpg -p 5432:5432 bitnami/postgres
    ```

4. listando todos os containers que estão em execução:

    ```SHELL
      docker ps
    ```

5. listando todos os containers já criados:

    ```SHELL
      docker ps -a
    ```

6. subindo o container:

    ```SHELL
      docker start api-solid-pg
    ```

7. parando o container:

    ```SHELL
      docker stop api-solid-pg
    ```

8. removendo o container:

    ```SHELL
      docker rm api-solid-pg
    ```

9. visualizando os logs d container:

    ```SHELL
      docker logs api-solid-pg
    ```

## Docker Compose

1. criado na raíz do projeto o arquivo `docker-compose.yml`

1. subindo container com o docker compose:

    ```SHELL
      docker compose up -d
    ```

1. parando container com o docker compose:

    ```SHELL
      docker compose stop
    ```

1. removendo container com o docker compose:

    ```SHELL
      docker compose down
    ```

## Bcrypt

1. instaldo com o comando:

    ```SHELL
      npm i bcryptjs
    ```

    ```SHELL
      npm i -D @types/bcryptjs
    ```

## Teste

1. instalação do Vitest:

    ```SHELL
      npm i -D vitest vite-tsconfig-paths
    ```

1. criado na raíz do projeto o arquivo `vite.config.ts`

1. criado no `package.json` o script:

    ```JSON
     "test": "vitest run",
     "test:w": "vitest"
    ```

1. instalada a lib de coverage `@vitest/coverage-v8` após executar o seguinte script adicionado no `package.json`

    ```JSON
      "test:c": "vitest run --coverage"
    ```

    com o comando:

    ```SHELL
      npm run test:c
    ```

1. instalada a UI do vitest com o comando:

    ```SHEL
      npm i -D @vitest/ui
    ```

1. criado no `package.json` o script para executar a UI:

    ```JSON
      "test:ui": "vitest --ui"
    ```

    com o comando:

    ```SHEL
      npm run test:ui
    ```

## Como testar essa API

1. em uma pasta de sua preferência, faça o clone do projeto com o comando:

    ```SHELL
      git clone https://github.com/thiagosf-dev/api-rest-nodejs-solid.git
    ```

2. abra a pasta criada após o comando acima, e digite o comando:

    ```SHELL
      npm install
    ```
