# 🚀 FocusTimer PWA (Monorepo)

> Versão PWA (Progressive Web App) do FocusTimer, evoluída de uma extensão do Chrome para uma aplicação web completa com Backend e Frontend containerizados.

![FocusTimer PWA](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Docker](https://img.shields.io/badge/Container-Docker-blue)
![PWA](https://img.shields.io/badge/PWA-Ready-purple)

## 📋 Sobre o Projeto

O **FocusTimer PWA** é uma ferramenta de produtividade estilo Pomodoro. Diferente da versão anterior (extensão), esta versão opera como um aplicativo web independente, capaz de funcionar offline e persistir dados de histórico em um backend próprio.

### ✨ Funcionalidades Principais
* **Frontend Moderno:** Interface refeita com tema Dark/Glassmorphism e totalmente responsiva.
* **PWA (Progressive Web App):** Instalável no Desktop/Mobile e funcionamento Offline (Service Worker v3).
* **Backend Próprio:** API REST em Node.js/Express para salvar histórico das sessões.
* **Timer Configurável:** Defina horas, minutos e segundos personalizados.
* **Infraestrutura como Código:** Orquestração completa via Docker Compose (Nginx + Node.js).

---

## 🏗 Estrutura de Pastas (Monorepo)

O projeto foi reestruturado para separar claramente as responsabilidades:

```bash
.
├── apps/
│   ├── api/         # Backend (Node.js + Express) - Roda na porta 3000
│   └── web/         # Frontend (HTML/CSS/JS + PWA) - Roda na porta 8080
├── .github/         # Pipelines de CI/CD (GitHub Actions)
├── docker-compose.yml # Orquestrador dos containers
└── README.md        # Documentação
````

-----

## 🚀 Instalação e Uso (Rodando com Docker)

Esta é a forma recomendada de executar a aplicação completa (Frontend + API).

### Pré-requisitos

  * Docker e Docker Compose instalados.

### Passo a Passo

1.  Clone este repositório:

    ```bash
    git clone [https://github.com/gabrielvieira05/bootcamp2-chrome-ext--gabrielvieira05-.git](https://github.com/gabrielvieira05/bootcamp2-chrome-ext--gabrielvieira05-.git)
    ```

2.  Entre na pasta do projeto e suba os containers:

    ```bash
    docker compose up --build
    ```

3.  Acesse a aplicação no navegador:

      * **Frontend (Timer):** [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080)
      * **API (Histórico):** [http://localhost:3000/sessions](https://www.google.com/search?q=http://localhost:3000/sessions)

> **Nota:** Ao finalizar um ciclo de foco, o Frontend envia automaticamente os dados para a API. Você pode verificar o registro acessando o link da API acima.

-----

## 🧪 Testes e CI/CD

O projeto conta com uma pipeline de Integração Contínua (CI) no **GitHub Actions** que executa automaticamente a cada push na branch `main`.

**O que é validado:**

1.  **Build dos Containers:** Garante que os Dockerfiles da `api` e `web` estão corretos.
2.  **Smoke Testing:** Verifica se os serviços sobem e respondem com status `HTTP 200 OK` (garantindo que a aplicação está acessível).
3.  **Dependências:** Instalação limpa das dependências do projeto.

Para ver os logs de execução, acesse a aba [Actions](https://github.com/gabrielvieira05/bootcamp2-chrome-ext--gabrielvieira05-/actions) deste repositório.

-----

## 🛠️ Tecnologias Utilizadas

  * **Frontend:** HTML5, CSS3 (Variáveis CSS), Vanilla JS.
  * **Backend:** Node.js, Express.
  * **DevOps:** Docker, Docker Compose, Nginx (Reverse Proxy), GitHub Actions.
  * **PWA:** Service Workers, Web App Manifest.

-----

## 👨‍💻 Créditos

Desenvolvido por **Gabriel Vieira Souza** e **Caio da Silva Diniz**.
*Bootcamp II - Professor Romes (2025)*
