# Car Catalog

[Preview SPA build](https://car-catalog-demo.netlify.app/)

## Что сделано

- Nuxt 4 приложение с SSR и SPA сборками.
- Локальный JSON (server/data/cars.json) + локальный API (/api/cars).
- Подключение CarQuery через серверный прокси (/api/car-details).
- Pinia store с persisted state.
- Поиск по make/model, фильтры.
- Страницы списка и карточки автомобиля.
- Обработка загрузки и ошибок.

## Запуск/сборка

1. `npm install`
2. В `.env` указать `NUXT_PUBLIC_CAR_QUERY_BASE`
3. Dev: `npm run dev`
4. Build SSR: `npm run build:ssr` && `npm run start:ssr`
5. Build SPA: `npm run build:spa` && `npm run preview:spa`

## Структура проекта

- `server/data/cars.json` - локальные данные
- `server/api/*.ts` - локальные API (cars, car-details)
- `server/mappers/*.ts` - преобразования данных API во внутренние модели приложения
- `stores/cars.ts`, `stores/car-details.ts` - Pinia stores с бизнес-логикой и use-cases приложения
- `pages/index.vue`, `pages/cars/[id].vue`, `components` - UI
