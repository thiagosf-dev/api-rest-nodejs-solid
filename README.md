# API GymPass

Projeto do módulo 3 do curso de Nodejs da Rocktseat (GymPass style App)

## Requisitos Funcionais

- [ ] deve ser possível se cadastrar
- [ ] deve ser possível se autenticar
- [ ] deve ser possível obter o perfil de um usuário logado
- [ ] deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] deve ser possível o usuário obter seu histórico de check-ins
- [ ] deve ser possível o usuário buscar academias próximas
- [ ] deve ser possível o usuário buscar academias pelo nome
- [ ] deve ser possível o usuário realizar chack-in em uma academia
- [ ] deve ser possível validar o check-in de um usuário
- [ ] deve ser possível cadastrar uma academia

## Regras de Negócio

- [ ] o usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] o usuário não pode fazer 2 check-ins no mesmo dia
- [ ] o usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] o check-in só pode ser valido até 20 minutos após criado
- [ ] o check-in só pode ser validado por administradores
- [ ] a academia só pode ser cadastrada por administradores
- [ ]

## Requisitos Não Funcionais

- [ ] a senha do usuário precisa estar criptografada
- [ ] os dados da aplicação precisam estar persistido em um banco PostgreSQL
- [ ] todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] o usuário deve ser identificado por um JWT

## Tecnologias utilizadas

- Javascript
- Typescript
- NodeJS
- Git
- Editor Config

## Conceitos aplicados

- Design de Software
- Engenharia de Requisitos

## Geral

1. adicionado o arquivo `.gitignore`

1. adicionado o arquivo `.editorconfig`

## Git

1. projeto iniciado com o comando

    ```shell
      git init
    ```

1. repositório do projeto disponibilizado em: <https://github.com/thiagosf-dev/api-rest-nodejs-solid>

## Como testar esa API

1. em uma pasta de sua preferência, faça o clone do projeto com o comando:

    ```shell
      git clone https://github.com/thiagosf-dev/api-rest-nodejs-solid.git
    ```

1. abra a pasta criada após o comando acima, e digite o comando:

    ```shell
      npm install
    ```
