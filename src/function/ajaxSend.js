

export function ajaxSend(formData, success) {
  console.log(formData)
  fetch('http://localhost:3001/', { // файл-обработчик
      method: 'POST',
      mode:'no-cors',
      cache:'no-cache',
      headers: {
          'Content-Type': 'application/json', // отправляемые данные
      },
      body: JSON.stringify(formData)
  })
      .then(response => alert(success))
      .catch(error => console.error(error))
};