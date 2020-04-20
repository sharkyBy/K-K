  // подключение express
  const express = require('express');
  // создаем объект приложения
  const app = express();
  // создаем порт для прослушивания
  const port = 3000;
  // определяем обработчик для маршрута "/"
  app.post('/', (request, response) => {
    //отправка ответа
    response.send('Приветос мой Экспресс сервер!')
  })
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
  })


