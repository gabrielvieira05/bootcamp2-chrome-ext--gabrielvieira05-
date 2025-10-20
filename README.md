***

# Focus Timer - Extensão do Google Chrome (Manifest V3)

Extensão simples para Chrome que funciona como um timer de foco/pomodoro, com controle de horas, minutos e segundos, notificações e interface intuitiva.

***

## Funcionalidades principais

- Timer configurável (horas, minutos, segundos)
- Iniciar, pausar e resetar contagem facilmente
- Notificações ao final do timer
- Interface amigável e pensada para produtividade
- Testes E2E automatizados com Playwright
- Empacotamento automatizado (dist/extension.zip)
- Execução de testes via Docker Compose

***

## Instalação e uso (Modo local)

1. Clone ou baixe este repositório
2. Execute:
   ```
   npm install
   ```
   para instalar dependências
3. Rode:
   ```
   npm run build
   ```
   para empacotar a extensão na pasta `dist/`
4. No Chrome, acesse:
   ```
   chrome://extensions
   ```
5. Ative o "Modo do desenvolvedor" (canto superior direito)
6. Clique em **Load unpacked** e selecione a pasta `dist/`
7. Clique no ícone da extensão para abrir o popup
8. Configure o timer e comece a usar

***

## Testes automatizados

### Via NPM

- Para rodar os testes E2E do Playwright:
  ```
  npm run test:e2e
  ```

- Para visualizar o relatório HTML dos testes:
  ```
  npx playwright show-report
  ```
  O relatório será aberto em seu navegador (playwright-report/index.html).

### Via Docker

1. Build do container:
   ```
   docker compose build
   ```
2. Execute os testes:
   ```
   docker compose run --rm e2e
   ```
- Os relatórios dos testes aparecem na pasta `playwright-report/` (abre o `index.html` no navegador para comprovação).

***

## Empacotamento automático

- O script de build (`npm run build`) gera o pacote pronto para envio/publicação em:
  ```
  dist/extension.zip
  ```
- Use o ZIP em "Releases" do GitHub para entrega ou deploy.

***

## Estrutura de pastas

```
├── dist/                  # extensão empacotada (.zip) e arquivos para modo desenvolvedor
├── icons/                 # ícones da extensão (16, 32, 48, 128px)
├── src/                   # código-fonte principal (popup, background, content scripts)
├── scripts/               # script de build automatizado (Node.js)
├── tests/                 # testes Playwright (config e specs)
├── playwright-report/     # relatório dos testes
├── docs/                  # materiais para GitHub Pages (se houver)
├── .github/workflows/     # workflow de CI do GitHub Actions
├── Dockerfile             # configuração do container para testes
├── docker-compose.yml     # automação do build/teste Docker
├── package.json           # dependências, scripts e metadados
├── manifest.json          # descrição da extensão
├── LICENSE, README.md     # documentação e licença
```

***

## CI/CD, automação e Docker

- Automação GitHub Actions para build, testes (E2E) e artefato ZIP.
- Pipeline testado localmente usando Docker Compose.
- Prints dos testes e build Docker disponíveis na documentação.

***

## Créditos

Desenvolvido por Gabriel Vieira Souza – Bootcamp II Professor Romes (2025)

***
