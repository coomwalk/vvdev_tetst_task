# vvdev_tetst_task
Первыми тремя строчками импортируется модуль express, создается объект прилодения и задается константа port(чтобы избежать излишнего повторения константы, и удобного изменения порта прослушивания)
```
const express = require("express");
const app = express();
const port = 3000;
```
Далее реализовано обслуживание статического файла в директории 'public', обработчик корневого маршрута,обработчик для  маршрута /about и обработчик для несуществующих маршрутов.
21 строчкой ставится прослушивание на порт '3000'