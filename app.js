const express = require("express");//импорт модуля Express
const app = express();// создание объекта приложения
const port = 3000;
//обслуживание статических файлов из директории public
app.use(express.static("public"));
// обработчик для корневого маршрута
app.get("/", function (req, res) {
  res.send("Hello, World!");// отправка ответа
});
// обработчик для  маршрута /about
app.get("/about", function(req, res)
{
  res.send("Это простое приложение на Express.js");
})
//обработчик для несуществующих маршрутов(пишется в конце, срабатывает, если ни один из маршрутов не сработал)
app.use(function(req,res)
{
  res.send("Страница не найдена");
})

app.listen(port);// прослушивание на порте 3000



