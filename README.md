# Vibecode Deploy — Todo List

Качественный Todo List на **Next.js** с сохранением задач в `localStorage`.

## Возможности

- Добавление, редактирование и удаление задач
- Отметка выполнения
- Фильтры: все / активные / готовые
- Очистка выполненных задач
- Сохранение в браузере между сессиями
- Адаптивный UI с поддержкой тёмной темы

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run lint
npm run build
```

## MCP

Проект настроен для работы с:

- **GitHub MCP** — создание репозитория и публикация кода
- **Vercel MCP** — деплой приложения

Конфигурация: [`.cursor/mcp.json`](.cursor/mcp.json)

Для GitHub MCP нужна переменная окружения `GITHUB_TOKEN` с Personal Access Token.
