# VIP INTERNATIONAL — Next.js сайт

## Установка и запуск

```bash
npm install
npm run dev
```

Открой в браузере: http://localhost:3000

## Структура

```
app/
  layout.tsx          — корневой layout (navbar + footer)
  page.tsx            — главная страница
  globals.css         — глобальные стили
  about/
    page.tsx          — страница «О компании»
  catalog/
    data.ts           — все продукты (27 штук)
    page.tsx          — каталог со всеми продуктами
    [slug]/
      page.tsx        — страница отдельного продукта

components/
  Navbar.tsx          — шапка с выпадающим меню каталога
  Footer.tsx          — подвал с соцсетями
  PurpleBox.tsx       — фиолетовый блок вместо фотографий

next.config.js
package.json
tsconfig.json
```

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная |
| `/about` | О компании |
| `/catalog` | Каталог всех продуктов |
| `/catalog/[slug]` | Страница продукта (27 продуктов) |

## Замена фото

Все фотографии заменены компонентом `<PurpleBox />`.
Чтобы добавить реальные фото — замени `<PurpleBox>` на `<Image>` из next/image и положи файлы в `/public`.
