# Geradis — landing page

Статический лендинг (чистый HTML + CSS + JS, без сборки), готовый к публикации
на **GitHub Pages**. Название бренда: **Geradis**.

## Структура

```
geradis-site/
├── index.html            — главная страница
├── privacy.html          — заглушка политики конфиденциальности
├── terms.html            — заглушка условий использования
├── .nojekyll             — отключает обработку Jekyll на GitHub Pages
├── README.md
└── assets/
    ├── css/style.css     — все стили (включая 4 режима освещения)
    ├── js/main.js        — переключатель света, анимация появления
    └── img/
        ├── wall-day.webp — фоновое фото стены (сгенерировано ИИ)
        ├── og.png        — картинка для превью в соцсетях (Open Graph)
        └── favicon.svg   — фавиконка
```

## Как опубликовать на GitHub Pages

### Вариант 1. Через веб-интерфейс (без git в терминале)

1. Создайте новый репозиторий на GitHub, например `geradis-site`
   (или `<username>.github.io`, если это будет сайт целиком).
2. Нажмите **uploading an existing file**, перетащите **всё содержимое**
   папки `geradis-site` (не саму папку, а файлы внутри: `index.html`,
   `assets/` и т.д.) и сделайте коммит.
3. Откройте **Settings → Pages**.
4. В блоке **Build and deployment** выберите:
   - Source: **Deploy from a branch**
   - Branch: **main**, папка: **/(root)**
5. Нажмите **Save** и подождите 1–2 минуты.
6. Сайт будет доступен по адресу `https://<username>.github.io/<репозиторий>/`.

### Вариант 2. Через git из терминала

```bash
cd geradis-site
git init
git add .
git commit -m "Geradis landing page"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
# затем: Settings → Pages → Deploy from a branch → main / (root)
```

## Что стоит поменять перед публикацией

- **Ссылки-заглушки `#`** в `index.html`: пункты меню Products и Research,
  строка «New: …» и ссылки соцсетей (X, LinkedIn, Discord, GitHub).
- **Email** `contact@geradis.ai` — если домен другой, замените в
  `index.html`, `privacy.html`, `terms.html` и в `assets/js/main.js`.
- **Канонический URL и og:url** — в `index.html` есть закомментированные
  мета-теги с плейсхолдером `<username>`; раскомментируйте и подставьте
  свой адрес (для корректного превью в соцсетях `og:image` тоже лучше
  указать абсолютным URL).
- **Privacy и Terms** — сейчас это заглушки, замените текст на реальный.

## Локальный просмотр

Просто откройте `index.html` в браузере, либо:

```bash
python3 -m http.server 8000
# и откройте http://localhost:8000
```

## Примечания

- Шрифты (DM Sans, Libre Baskerville, Caveat) подключены с Google Fonts —
  нужны интернет-соединение при первом заходе.
- Фоновое фото стены сгенерировано ИИ; режимы освещения
  (Dawn / Daylight / Golden hour / Moonlight) сделаны CSS-слоями
  поверх фото, переключатель — в углу страницы.
- При `prefers-reduced-motion` анимации отключаются.
