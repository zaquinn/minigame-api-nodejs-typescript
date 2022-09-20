# Documentação da API 

## Tabela de Conteúdos
- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
    - [Instalando Dependências](#21-instalando-dependências)
    - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [Migrations](#23-migrations)
- [Endpoints](#3-endpoints)

---
## 1. Visão Geral

O projeto consiste em uma aplicação Backend simples que visa alimentar um projeto Front End, também desenvolvido por mim, que inicialmente surgiu a partir da demanda de um teste técnico no qual participei.
Para visitar o repositório do projeto Front End a qual me refiro, clique <a href="https://github.com/zaquinn/Minigame-React-ChakraUI" target="_blank">aqui</a>.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

Url base da aplicação:
https://backend-minigame-deploy.herokuapp.com

---
## 2. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e crie uma nova database da sua escolha(com o mesmo nome dado no seu arquivo .env).

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```
Caso estas não estejam presentes na pasta src/migrations, gere-as com o comando:
```
yarn typeorm migration:generate src/migrations/initialMigrations -d src/data-source.ts
```

Rode a aplicação em servidor local com o comando:
```
yarn dev
```

## 3. Endpoints

Esta seção inclui as rotas da aplicação.

[ Voltar para o topo ](#tabela-de-conteúdos)

- [User](#1-user)
    - [POST - /user](#11-criação-de-usuário)
    - [POST - /user/login](#12-login-de-usuário)
    - [GET - /user](#13-listando-usuários)
    - [PATCH - /user/update](#14-atualizar-usuário)
    - [DELETE - /user/delete](#15-deletar-usuário)
- [CountryFlag](#2-flags)
    - [POST - /country](#21-criação-de-countries)
    - [GET - /country](#22-listagem-de-countries)
    
## 1. User
Estas são as rotas relacionadas ao CRUD de usuários.

[ Voltar para Endpoints ](#3-endpoints)

### 1.1. Criação de usuário
### `/user/`

Cria um novo usuário. É necessário, antes, já haver algum Country registrado no banco, para assim associá-lo ao usuário no momento da criação através do campo "nationality".

### Exemplo de Request:
```
POST /user/
Host: https://backend-minigame-deploy.herokuapp.com
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"username": "Ruan",
	"password": "1234",
	"nationality": "Brazil",
	"avatar": "https://i.postimg.cc/Vs4WnmYW/avatarimg.png"
}
```
### Exemplo de Response:
```
200 Success
```

```json
{
	{
	"id": 16,
	"username": "Ruan",
	"avatar": "https://i.postimg.cc/Vs4WnmYW/avatarimg.png",
	"countryFlag": {
		"id": 2,
		"country": "Brazil",
		"flag": "https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png"
	},
	"nationality": "Brazil",
	"created_at": "2022-09-19T23:42:55.282Z",
	"updated_at": "2022-09-19T23:42:55.282Z"
}
}
```
---
### 1.2. Login de usuário
Rota relacionada ao login de usuário. Retorna um Token. É necessário logar um usuário para poder atualizá-lo ou deletá-lo.

[ Voltar para Endpoints ](#3-endpoints)

### Exemplo de Request:
```
POST /user/login
Host: https://backend-minigame-deploy.herokuapp.com
Authorization: Bearer Token
Content-type: application/json
```
### Corpo da Requisição:
```json
{
	{
	"username": "Carlito",
	"password": "1234"
}
}
```
### Exemplo de Response:
```
200 Success
```

```json
{
	"token": "eyJhbGciOIUzINuhdaHOkdKMDsR5cCI6IkpXJegdaspZCISWF0IjoxNzNjMzODQ2LCJleHAOj2NjM3MyNDZ9xto2qlzhaebQZdMYlkfkfkfjlLzv2oRdnRknFaU8Y"
}
```
---

## 1.3. Listando Usuários

[ Voltar para Endpoints ](#3-endpoints)

Lista os usuários registrados

### Exemplo de Request:
```
GET /user/
Host: https://backend-minigame-deploy.herokuapp.com
Content-type: application/json
```

### Exemplo de Response:
```
200 Success
```

```json
[
	{
		"id": 1,
		"username": "Carlito",
		"avatar": "https://i.postimg.cc/Vs4WnmYW/avatarimg.png",
		"nationality": "United States",
		"created_at": "2022-09-19T23:40:42.291Z",
		"updated_at": "2022-09-19T23:40:42.291Z",
		"countryFlag": {
			"id": 3,
			"country": "United States",
			"flag": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg"
		}
	}
]
```
---
## 2. Flags
[ Voltar para Endpoints ](#3-endpoints)

## 2.1. Criação de Countries

### `/user/`

Cria um novo país. É necessário criar países para assocía-los a usuários na criação de usuários.

### Exemplo de Request:
```
POST /country/
Host: https://backend-minigame-deploy.herokuapp.com
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"country": "United States",
	"flag": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg"
}
```
### Exemplo de Response:
```
200 Success
```

```json
{
	"country": "United States",
	"flag": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg",
	"id": 1
}
```
---

## 2.2. Listagem de Countries

[ Voltar para Endpoints ](#3-endpoints)

Lista os países registrados.

### Exemplo de Request:
```
GET /country/
Host: https://backend-minigame-deploy.herokuapp.com
Content-type: application/json
```

### Exemplo de Response:
```
200 Success
```

```json
[
  {
    "country": "United States",
    "flag": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg",
    "id": 1
  }
]
```
