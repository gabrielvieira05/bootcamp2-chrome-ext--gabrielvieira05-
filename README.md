***

# Focus Timer - Extensão do Google Chrome (Manifest V3)

Extensão simples para Chrome que funciona como um timer de foco/pomodoro com controle de horas, minutos e segundos, notificações e interface intuitiva.

***

## Funcionalidades principais

- Timer configurável com horas, minutos e segundos
- Iniciar, pausar e resetar contagem facilmente
- Notificações ao final do timer
- Interface simples, elegante e pensada para produtividade
- Testes E2E automatizados (Playwright)
- Empacotamento automatizado (`dist/extension.zip`)

***

## Instalação e uso (Modo local)

1. Clone ou baixe este repositório  
2. Execute `npm install` para instalar dependências  
3. Rode `npm run build` para empacotar a extensão na pasta `dist/`  
4. No Chrome, acesse `chrome://extensions`  
5. Ative o "Modo do desenvolvedor" (canto superior direito)  
6. Clique em **Load unpacked** e selecione a pasta `dist/`  
7. Clique no ícone da extensão para abrir o popup  
8. Configure o timer e comece a usar

***

## Testes automatizados

- Para rodar os testes E2E do Playwright:
  ```bash
  npm run test:e2e
  ```
- Para visualizar o relatório HTML dos testes:
  ```bash
  npx playwright show-report
  ```
- O relatório será aberto em seu navegador (`playwright-report/index.html`).

***

## Empacotamento automático

- O script de build (`npm run build`) copia todos os arquivos necessários e gera `dist/extension.zip` pronto para envio/publicação.
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
├── docs/                  # materiais para GitHub Pages se houver
├── .github/workflows/     # workflow de CI do GitHub Actions
├── package.json           # dependências, scripts e metadados
├── manifest.json          # descrição da extensão
├── LICENSE, README.md     # documentação e licença
```

***

## CI/CD e automação

- O repositório possui automação GitHub Actions para build, testes e artefato do ZIP.
- Pipeline testado localmente e validado em CI/CD.

***

## Créditos

Desenvolvido por Seu Nome ou Usuário GitHub – Bootcamp II Professor Romes (2025)

***
