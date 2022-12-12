# Football League API

  
## Objetivo
  Criar uma api feita em Typescript e MySQL (Sequelize) para alimentar o frontend do portal de um campeonato de futebol imaginário entre times brasileiros. Ela consegue prover os resultados de partidas, editar o placar de partidas em andamento, calcular estatísticas de cada time e selecionar jogos de fora ou dentro de casa.
  A api segue uma arquitetura REST, em camadas MSC, contando com POO e princípios de SOLID. Ela também conta com testes de integração para cobrir o código (70%+).
  
## Desafios
 - Desenvolver funcionalidades de uma api utilizando Programação Orientada a Objetos.
 - Conectar o backend com o frontend da aplicação
 - Fazer testes de integração pela primeira vez
  
## Observações
 - O frontend foi desenvolvido pronto pela Trybe, só precisei construir o backend
 - A aplicação é monorepo, ou seja, tanto o back quanto o frontend estão no mesmo repositório
 - Assim como o frontend, o arquivo docker-compose foi desenvolvido pela Trybe. Entretando eu configurei os ambos Dockerfiles
  
## Executando a aplicação
 Em /football-league-api/app rode:
```
npm run compose:up
```
  
Após os containeres serem criados e o healthcheck terminar:
  Acesse http://localhost:3000
  Ou então entre em /football-league-api/app/frontend e rode
```
npm start
```
 Uma vez rodando, pelo navegador, faça o login e acesse a plataforma pelas seguintes credenciais:
 ```
  login: Admin
  senha: secret_admin
 ```

Caso deseje remover os containeres, rode:
```
npm run compose:down
```
## Rotas
### Login 
| Requisição | URL                                  |
| ---------- | ------------------------------------ |
| `POST`     | http://localhost:3001/login          |
| `GET`      | http://localhost:3001/login/validate |


### Teams
| Requisição | URL                             |
| ---------- | ------------------------------- |
| `GET`      | http://localhost:3001/teams     |
| `GET`      | http://localhost:3001/teams/:id |

### Matches

| Requisição | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3001/matches            |
| `POST`     | http://localhost:3001/matches            |
| `PATCH`    | http://localhost:3001/matches/:id        |
| `PATCH`    | http://localhost:3001/matches/:id/finish |

### Leaderboard

| Requisição | URL                                    |
| ---------- | -------------------------------------- |
| `GET`      | http://localhost:3001/leaderboard/     |
| `GET`      | http://localhost:3001/leaderboard/home |
| `GET`      | http://localhost:3001/leaderboard/away |
