# Focus Timer ⏳

Extensão simples de Pomodoro Timer (Manifest V3) com lembrete no YouTube.

## Funcionalidades
- Inicie ciclos de 25 minutos via popup.
- Receba notificação quando terminar.
- Conte seus ciclos concluídos (armazenados no storage).
- Lembrete visual ao entrar no YouTube.

## Instalação
1. Clone o repositório ou baixe o `.zip` em [Releases](https://github.com/<usuario>/<repo>/releases).
2. Acesse `chrome://extensions` e ative o Developer mode.
3. Clique em **Load unpacked** e selecione a pasta do projeto.

## Estrutura
- `src/popup/` → Popup da extensão.
- `src/background/` → Service Worker.
- `src/content/` → Script injetado.
- `docs/` → Landing Page do projeto.

## Licença
MIT
