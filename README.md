# 🏝️ Desafio JungleGaming

Este é o código fonte da solução para o desafio JungleGaming — uma arquitetura **monorepo em TypeScript** com microserviços em NestJS, comunicação via mensageria e suporte a várias features como autenticação, tasks, comentários e notificações em tempo real.

## 📁 Estrutura do Repositório

O projeto está organizado como um **monorepo** usando **pnpm workspaces** e **Turborepo**:

```
/
├─ apps/
├─ package.json
├─ pnpm-workspace.yaml
├─ turbo.json
├─ tsconfig.base.json
├─ .gitignore
```

Cada pasta dentro de `apps/` representa um microserviço ou aplicação isolada. ([GitHub][1])

---

## 📌 Tecnologias Utilizadas

| Categoria                   | Ferramenta                 |
| --------------------------- | -------------------------- |
| Linguagem                   | TypeScript                 |
| Backend                     | NestJS                     |
| Microservices               | NestJS + TCP ou mensageria |
| Messaging                   | ClientProxy                |
| ORM                         | TypeORM com PostgreSQL     |
| Real-time                   | WebSocket Gateway          |
| Gerenciamento de Workspaces | pnpm                       |
| Monorepo Tooling            | Turborepo                  |
| Tokens de autenticação      | JWT                        |
| Logging                     | Pino                       |
| Validação                   | class-validator            |
| Swagger                     | Documentação de APIs       |

---

## 🚀 Pré-requisitos

Antes de rodar o projeto, instale:

* Node.js >= 18
* pnpm
* PostgreSQL rodando local ou remoto
* RabbitMQ (se o projeto usar eventos entre serviços)

---

## 🧰 Instalação

Execute na raiz do projeto:

```bash
pnpm install
```

Isso vai instalar todas as dependências e resolver workspaces. ([GitHub][1])

---

## 🧠 Variáveis de Ambiente

Crie um arquivo `.env` na raiz da aplicação com as variáveis necessárias:

```env
# Auth service
JWT_SECRET=SECRET_KEY
REFRESH_SECRET_KEY=REFRESH_SECRET_KEY

# API gateway
API_GATEWAY_PORT=3000
FRONTEND_ORIGIN=http://localhost:5173

# Auth microservice
AUTH_PORT=3001
AUTH_HOST=localhost

# Tasks microservice
TASKS_PORT=3002
TASKS_HOST=localhost

# Notifications microservice
NOTIFICATION_PORT=3004

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_NAME=your_db_name
```

A configuração pode variar por escopo (cada serviço pode ter seu próprio `.env`). — Certifique-se de que todos os serviços leiam as variáveis antes de inicializar.

---

## 📦 Scripts Disponíveis

Rodando na raiz:

```bash
pnpm dev
```

ou

```bash
pnpm turbo run dev
```

O Turborepo executa os serviços conforme configuração no `turbo.json` (geralmente em paralelo com watch). ([GitHub][1])

---

## 🧩 Microserviços

### 🛡️ Auth

* Endpoints: `/auth/login`, `/auth/register`, `/auth/refresh`, `/auth/logout`, `/auth/profile`
* Comunicação via microservices (TCP ou mensagens)
* Tokens JWT com refresh

### 🧠 Tasks

* CRUD completo de tarefas
* Filtros por prioridade, status e título
* Histórico de alterações
* Notificações emitidas para outros serviços

### 💬 Comments

* Owner acrescenta comentários à tarefa
* Mensageria comunica alterações para notificações

### 🔔 Notifications

* Escuta eventos como `tasks.created`, `tasks.updated`, `comment.new`
* Persiste notificações no banco
* Envia eventos via WebSocket para os clientes conectados

---

## 🧪 Testes

> 🧪 Se houver testes configurados:

```bash
pnpm test
```

ou

```bash
pnpm turbo run test
```

(Verifique se há configuração de testes dentro de cada app.)

---

## 📄 Documentação de API

Swagger está configurado no API Gateway:

```bash
GET http://localhost:3000/api/docs
```

Ele expõe todos os endpoints disponíveis com exemplos. Isso inclui payloads e respostas de cada rota.

---

## 🌐 WebSockets

Notifications usam **WebSockets** e permitem client connections autenticadas:

```
ws://localhost:PORT/ws?email=usuario@example.com
```

Clientes recebem eventos em tempo real conforme notificações são geradas.

---

## 💡 Recomendações para Desenvolvimento

* Use **branches por feature** (ex: `feat/auth-jwt-refresh`)
* Faça **commits atômicos** — um objetivo por commit
* Atualize o branch `dev` antes de realizar pull requests
* Teste fluxos importantes com dados reais

---

## 🧩 Boas práticas de Git

* Trabalhe em branch isolada
* Faça PRs para `dev` antes de mesclar em `main`
* Mantenha a branch `dev` sempre estável

Essa é uma prática comum usada em workflows com GitHub e equipes colaborativas. ([HackMD][2])

---

## 🤝 Contribuição

Se quiser contribuir:

1. Crie uma branch local nova baseada em `dev`
2. Faça commits claros e atômicos
3. Abra um pull request para a branch `dev` com descrição do que foi feito

---

## 📜 Licença

Licença não especificada no repositório (adapte se houver).

---

## 📝 Contato

Manter atualizado com:

```
Leonardobern10 — https://github.com/Leonardobern10
```

